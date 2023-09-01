//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "./Base64.sol";



abstract contract SvgBuilderContract{
    function buildImage(uint tokenid, uint power, uint ammo ) external virtual view returns(string memory);
}

contract GalaxyTokens is ERC1155, Ownable {
    using Counters for Counters.Counter;

    using Strings for uint;
    string public greeting = "MY Apps!!!";
    bool public premium = false;
    uint256 public totalCounter = 0;
    mapping(address => uint) public userGreetingCounter;
    address public svgAddress;

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

    function svg(uint256 tokenId) public view returns (string memory) {
        // Example: Generate a simple SVG image based on tokenId
        if(svgAddress != address(0)){
            SvgBuilderContract svgContract = SvgBuilderContract(svgAddress);
            string memory SVG = svgContract.buildImage(tokenId, 1, 1);
            console.log(SVG);
            return SVG;
        }
        else{
            return string(abi.encodePacked(
                '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">',
                '<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />',
                '<text x="10" y="20" font-family="Arial">Token ID: ', tokenId.toString(), '</text>', 
                '</svg>'));
        }
    }

    function setSvgAddress(address _svgAddress) external onlyOwner {
        svgAddress =  _svgAddress;
    }

    function uri(uint256 tokenId) public view virtual override returns (string memory) {
        // Return the final URI
        return string("");
    }

    event GreetingChange(
        address indexed greetingSetter,
        string newGreeting,
        bool premium,
        uint256 value
    );
}
