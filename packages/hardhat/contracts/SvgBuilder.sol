// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./Base64.sol";
import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract SvgBuilder is Ownable {

    using Strings for uint;
    uint8 constant buffer = 3; // Start at the middle of the hull
    uint8 constant boxSize = 32;
    uint8 constant hullHeight = boxSize - buffer * 2;

    function buildImage(uint id, uint power, uint ammo) external pure returns(string memory){
        // Generate a unique color for the ship based on the id
        string[5] memory spaceColors = ["#FF5733", "#33FF57", "#5733FF", "#FF33A6", "#33FFF6"]; // Example space colors
        string memory color = spaceColors[id % spaceColors.length];

        // Generate a unique wing pattern based on the id
        string memory wingPattern = generateWingPattern(id, color);

        return string(abi.encodePacked(
            '<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" >',
            '<rect x="14" y="', uint256(buffer + 1).toString(), '" width="4.1" height="', uint(hullHeight - 2).toString(), '" fill="', color, '" />', // Hull of the ship
            '<rect x="15" y="', uint256(buffer + 1).toString(), '" width="2.1" height="', uint(hullHeight - 1).toString(), '" fill="', color, '" />', // Hull of the ship
            wingPattern, // Symmetric wing pattern
            '</svg>'
        ));
    }

    function generateWingPattern(uint id, string memory color) internal pure returns(string memory) {
        uint256 ySeed = uint256(keccak256(abi.encodePacked(id)));
        uint256 hSeed = uint256(keccak256(abi.encodePacked(ySeed)));
        string memory pattern = "";
        uint8 hullWidth = 4;
        uint8 maxColumns = (boxSize - hullWidth) / 2 - buffer;
        uint8 minWingHeight = 5;
        uint8 delta = 4;
        uint8 slope = 0;
        uint8 startY = buffer + uint8(ySeed % (hullHeight *3 / 4));
        uint8 height = minWingHeight + uint8(hSeed % (hullHeight/3) );
        startY = buffer + 2;
        height = hullHeight*2/3 + uint8(hSeed % 3);

        for(uint8 i = 0; i < maxColumns; i++) {
            //get new seed
            ySeed = uint256(keccak256(abi.encodePacked(ySeed)));
            hSeed = uint256(keccak256(abi.encodePacked(hSeed)));
            //uint8 yDelta = (uint8(ySeed % delta * 2)); 
            //uint8 hDelta = (uint8(hSeed % delta * 2));
            uint8 yDelta = getDelta(ySeed, delta + slope) * 2;
            uint8 hDelta = getDelta(hSeed, delta + slope) * 2;

            //check that wing width isn't smaller than the min or that it exceeds the box
            if(height + hDelta < delta + minWingHeight || startY + height + hDelta - delta > boxSize - buffer){
                height = height - hDelta + delta; 
            } else {
                height = height + hDelta - delta; 
            }
            //if start value is to low or too high, flip the delta
            //console.log("id: ", id);
            //console.log("startY: ", startY);
            //console.log("yDelta: ", yDelta);
            if(startY + yDelta < buffer + delta || startY + yDelta - delta > boxSize - buffer - height) {
                startY = startY + delta - yDelta; 
            } else {
                startY = startY + yDelta - delta;
            }

            uint8 xLeft = boxSize/2 - hullWidth/2 - i - 1;
            uint8 xRight = boxSize/2 + hullWidth/2 + i;

            pattern = string(abi.encodePacked(pattern, 
                '<rect x="', uint256(xLeft - 1).toString(), '.9" y="', uint256(startY).toString(), '" width="1.2" height="', uint256(height).toString(), '" fill="', color,'"/>', // Left wing
                '<rect x="', uint256(xRight - 1).toString(), '.9" y="', uint256(startY).toString(), '" width="1.2" height="', uint256(height).toString(), '" fill="', color,'" />' // Right wing
            ));
        }
        return pattern;
    }

    function getDelta(uint seed, uint8 limit) internal pure returns(uint8) {
        for(uint8 i = 0; i < limit; i++) {
            //console.log("i: ", i);
            uint8 cutoff = limit / uint8(2 ** (i + 1));
            //console.log("cutoff: ", cutoff);
            uint8 test = uint8(seed % limit);
            //console.log("test: ", test);
            if(test > cutoff) return i;
            seed = uint256(keccak256(abi.encodePacked(seed)));
        }
    }
}
