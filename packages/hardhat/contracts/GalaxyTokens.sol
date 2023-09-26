//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "./Base64.sol";



abstract contract SvgBuilderContract{
    function renderTokenById(uint id) external virtual view returns(string memory);
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
        // Mapping from token ID to owner address
    mapping(uint256 => address) private _owners;

    constructor(address ownerX) ERC1155("") {
        _mint(msg.sender, AMMO, type(uint256).max, "");
        _tokenIds.increment();
        _mint(msg.sender, GALX, 1000000, "");
        _tokenIds.increment();
        mintSpaceship(msg.sender, 1);
        mintSpaceship(msg.sender, 2);
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

    function mintSpaceship(address account, uint256 planet) public onlyOwner {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        _mint(account, newTokenId, 1, "");
    }

    function mintSpaceships(uint256[] memory amounts) public onlyOwner {
        require(amounts.length > 0, "Must specify at least one spaceship to mint.");

        uint256[] memory ids = new uint256[](amounts.length);
        for (uint256 i = 0; i < amounts.length; i++) {
            _tokenIds.increment();
            ids[i] = _tokenIds.current();
        }

        _mintBatch(msg.sender, ids, amounts, "");
    }

    function ownerOf(uint256 tokenId) public view returns (address) {
        address owner = _owners[tokenId];
        require(owner != address(0), "Token not owned or burned");
        return owner;
    }

    // Overriding the _mint function to update the owner mapping
    function _mint(address account, uint256 id, uint256 amount, bytes memory data) internal override {
        super._mint(account, id, amount, data);
        if(amount == 1) { // Assuming that an amount of 1 means it's an NFT. Adjust logic as needed.
            _owners[id] = account;
        }
    }

    // Overriding the _burn function to update the owner mapping
    function _burn(address account, uint256 id, uint256 amount) internal override {
        super._burn(account, id, amount);
        if(amount == 1) { // Assuming that an amount of 1 means it's an NFT. Adjust logic as needed.
            _owners[id] = address(0); // Resetting owner to zero address to indicate token has been burned
        }
    }

    // Overriding the _transfer function to update the owner mapping
    function _beforeTokenTransfer(address operator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data) internal override {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
        for(uint256 i = 0; i < ids.length; i++) {
            if(amounts[i] == 1) { // Assuming that an amount of 1 means it's an NFT. Adjust logic as needed.
                _owners[ids[i]] = to;
            }
        }
    }


    function generateSVGofTokenById(uint256 id) internal view returns (string memory) {

    }

    // Visibility is `public` to enable it being called by other contracts for composition.
    function renderTokenById(uint256 id) public view returns (string memory) {
        require(svgAddress != address(0), "set svgAddress");
        SvgBuilderContract svgContract = SvgBuilderContract(svgAddress);
        return svgContract.renderTokenById(id);
        //console.log(SVG);
    }

    function svg(uint256 id) public view returns (string memory) {
        // Example: Generate a simple SVG image based on tokenId
        string memory svg = string(abi.encodePacked(
        '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">',
        '<g transform="translate(0,16) scale(1,-1)">',
            renderTokenById(id),
        '</g>',
        '</svg>'
        ));
        return svg;
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
