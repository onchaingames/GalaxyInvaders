// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./Base64.sol";
import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

/**
* @title jpegMeImage
* @author royce.eth
* @notice On Chain NFT Messenging App SVG image generation contract
 */

contract svgBuilder is Ownable {

    using Strings for uint;

    function buildImage(uint tokenId) external view returns(string memory){
        return string(abi.encodePacked(
            '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">',
            '<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />',
            '<text x="10" y="20" font-family="Arial">Token ID: ', tokenId.toString(), '</text>', 
            '</svg>'));
    }
    
    //only owner
    function withdraw() public payable onlyOwner {
        (bool success, ) = payable(msg.sender).call{
            value: address(this).balance
        }("");
        require(success);
    }
}