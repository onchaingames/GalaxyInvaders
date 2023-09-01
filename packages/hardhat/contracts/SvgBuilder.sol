// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./Base64.sol";
import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract SvgBuilder is Ownable {

    using Strings for uint;

    string[] private spaceColors = ["#FF5733", "#33FF57", "#5733FF", "#FF33A6", "#33FFF6"]; // Example space colors

    uint8 constant buffer = 3; // Start at the middle of the hull

    function buildImage(uint id, uint power, uint ammo) external view returns(string memory){
        // Generate a unique color for the ship based on the id
        string memory color = spaceColors[id % spaceColors.length];

        // Generate a unique wing pattern based on the id
        string memory wingPattern = generateWingPattern(id, color);

        return string(abi.encodePacked(
            '<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" >',
            '<rect x="14" y="', uint256(buffer).toString(), '" width="4.2" height="20" fill="', color, '" />', // Hull of the ship
            wingPattern, // Symmetric wing pattern
            '</svg>'
        ));
    }

    function generateWingPattern(uint id, string memory color) internal pure returns(string memory) {
        uint256 ySeed = uint256(keccak256(abi.encodePacked(id)));
        uint256 hSeed = uint256(keccak256(abi.encodePacked(ySeed)));
        string memory pattern = "";
        uint8 boxSize = 32;
        uint8 hullHeight = boxSize - buffer * 2;
        uint8 hullWidth = 4;
        uint8 maxColumns = (boxSize - hullWidth) / 2 - buffer;
        uint8 minWingHeight = 3;
        uint8 delta = 4;
        uint8 startY;
        uint8 height; // Ensuring the end height is within 1 px of the startY height

        for(uint8 i = 0; i < maxColumns; i++) {
            //get new seed
            ySeed = uint256(keccak256(abi.encodePacked(ySeed)));
            hSeed = uint256(keccak256(abi.encodePacked(hSeed)));

            //uint8 randomDelta =  uint8((ySeed % delta)  / (((ySeed % delta)) * ((ySeed % delta))) );

            if(startY == 0){
                startY = buffer + uint8(ySeed % (hullHeight/2));
                height =  minWingHeight + uint8(hSeed % (boxSize - buffer - startY - minWingHeight) ) ; // Ensuring the end height is within 1 px of the startY height
            }else{
                startY = startY + uint8(ySeed % (delta * 2)) - delta;
                height =  height + uint8(hSeed  % (delta * 2)) - delta; 
            }
            //add some limits to keep in buffer
            //make delta more likely to be small

            uint8 xLeft = boxSize/2 - hullWidth/2 - i - 1;
            uint8 xRight = boxSize/2 + hullWidth/2 + i;

            pattern = string(abi.encodePacked(pattern, 
                '<rect x="', uint256(xLeft).toString(), '" y="', uint256(startY).toString(), '" width="1.1" height="', uint256(height).toString(), '" fill="', color,'"/>', // Left wing
                '<rect x="', uint256(xRight).toString(), '" y="', uint256(startY).toString(), '" width="1.1" height="', uint256(height).toString(), '" fill="', color,'" />' // Right wing
            ));
        }
        return pattern;
    }
}
