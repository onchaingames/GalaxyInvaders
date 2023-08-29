//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";



contract YourContract is ERC1155, Ownable {
    using Counters for Counters.Counter;

    using Strings for uint;
    string public greeting = "MY Apps!!!";
    bool public premium = false;
    uint256 public totalCounter = 0;
    mapping(address => uint) public userGreetingCounter;

    Counters.Counter private _tokenIds;
    uint256 public constant AMMO = 0;
    uint256 public constant GALX = 1;
    uint256 public constant SPACESHIP = 2;

    constructor(address ownerX) ERC1155("") {
        _mint(msg.sender, AMMO, type(uint256).max, "");
        _tokenIds.increment();
        _mint(msg.sender, GALX, 1000000, "");
        _tokenIds.increment();
        mintSpaceship(msg.sender, 50, 1);
        mintSpaceship(msg.sender, 100, 2);
    }

    function setGreeting(string memory _newGreeting) public payable {
        greeting = _newGreeting;
        totalCounter += 1;
        userGreetingCounter[msg.sender] += 1;

        premium = msg.value > 0;

        emit GreetingChange(msg.sender, _newGreeting, premium, 0);
    }

    function withdraw() public onlyOwner {
        (bool success, ) = owner().call{ value: address(this).balance }("");
        require(success, "Failed to send Ether");
    }

    receive() external payable {}

    function mintSpaceship(address account, uint256 power, uint256 planet) public onlyOwner {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        _mint(account, newTokenId, 1, "");
    }

        function generateSVGImage(uint256 tokenId) internal pure returns (string memory) {
        // Example: Generate a simple SVG image based on tokenId
        return string(abi.encodePacked("<svg><text x='10' y='20' font-family='Arial'>Token ID: ", tokenId.toString(), "</text></svg>"));
    }

    function uri(uint256 tokenId) public view virtual override returns (string memory) {
        string memory svgImage = generateSVGImage(tokenId);
        
        // Encode the SVG to base64 (this is a simplified example; in a real-world scenario, you'd need a proper base64 encoding function)
        string memory base64Image = string(abi.encodePacked("data:image/svg+xml;base64,", svgImage));

        // Construct the JSON metadata
        string memory json = string(abi.encodePacked('{"name": "Token ', tokenId.toString(), '", "description": "A description for your token", "image": "', base64Image, '"}'));

        // Encode the JSON metadata to base64
        string memory base64Json = string(abi.encodePacked("data:application/json;base64,", json));

        // Return the final URI
        return string(abi.encodePacked("data:application/json;base64,", base64Json));
    }

    event GreetingChange(
        address indexed greetingSetter,
        string newGreeting,
        bool premium,
        uint256 value
    );
}
