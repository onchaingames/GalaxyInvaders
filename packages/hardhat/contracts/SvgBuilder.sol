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

    function buildImage(uint id, uint power, uint ammo) external view returns(string memory){
        // Generate a unique color for the ship based on the id
        string memory color = spaceColors[id % spaceColors.length];

        // Generate a unique wing pattern based on the id
        string memory wingPattern = generateWingPattern(id, color);

        return string(abi.encodePacked(
            '<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">',
            '<rect x="14" y="6" width="4" height="20" fill="', color, '" />', // Hull of the ship
            wingPattern, // Symmetric wing pattern
            '</svg>'
        ));
    }

    function generateWingPattern(uint id, string memory color) internal pure returns(string memory) {
    uint256 seed = uint256(keccak256(abi.encodePacked(id)));
    uint256 currentSeed = seed;
    string memory pattern = "";
    uint8 hullHeight = 20;
    uint8 startHeight = hullHeight / 2; // Start at the middle of the hull
    uint8 width = 32;
    uint8 hullWidth = 4;
    uint8 maxColumns = 10;

    uint8[] memory previousColumn = new uint8[](hullHeight);
    // Initialize the first column with multiple pixels set to 1
    for (uint8 k = startHeight; k < startHeight + 4; k++) {
        previousColumn[k] = 1;
    }

    for(uint8 i = 0; i < maxColumns; i++) {
        uint8[] memory currentColumn = new uint8[](hullHeight);
        for(uint8 j = startHeight; j < hullHeight; j++) {
            bool canDraw = (j == startHeight) || 
                           (previousColumn[j] == 1) || 
                           (j > 0 && previousColumn[j-1] == 1) || 
                           (j < hullHeight - 1 && previousColumn[j+1] == 1) ||
                           (j > 0 && currentColumn[j-1] == 1) ||
                           (j < hullHeight - 1 && currentColumn[j+1] == 1);

            if(canDraw) {
                currentSeed = uint256(keccak256(abi.encodePacked(currentSeed)));
                if(currentSeed % 3 != 0) { // Make pixels more likely to show up
                    currentColumn[j] = 1;
                    uint8 xLeft = width/2 - hullWidth/2 - i - 1;
                    uint8 xRight = width/2 + hullWidth/2 + i;
                    pattern = string(abi.encodePacked(pattern, 
                        '<rect x="', uint256(xLeft).toString(), '" y="', uint256(j).toString(), '" width="1.1" height="1.1" fill="', color,'" />', // Left wing
                        '<rect x="', uint256(xRight).toString(), '" y="', uint256(j).toString(), '" width="1.1" height="1.1" fill="', color,'" />' // Right wing
                    ));
                }
            }
        }
        previousColumn = currentColumn;
    }

    return pattern;
}



}
