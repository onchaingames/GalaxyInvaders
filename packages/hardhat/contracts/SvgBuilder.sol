// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./Base64.sol";
import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract SvgBuilder is Ownable {

    using Strings for uint;
    uint8 constant boxSize = 16;
    uint8 constant hullHeight = boxSize;

    function renderTokenById(uint256 id) public view returns (string memory) {
        // Generate a unique color for the ship based on the id
        string[5] memory spaceColors = ["#FF5733", "#33FF57", "#5733FF", "#FF33A6", "#33FFF6"]; // Example space colors
        string memory color = spaceColors[id % spaceColors.length];
        uint256 ySeed = uint256(keccak256(abi.encodePacked(id)));
        uint256 hSeed = uint256(keccak256(abi.encodePacked(ySeed)));
        string memory pattern = "";
        uint8 maxColumns = (boxSize) / 2 ;
        uint8 minWingHeight = boxSize/8 + 1;
        uint8 delta = boxSize/4; //change in wing width from col to col at value 3, we get +/-1 or zero. delta = 5: -2,-1,0,1,2
        uint8 slope = boxSize/16 + 1; //this var creates a negative trend to the deltas, making the ship more aero.
        uint8 startY = boxSize/16;
        uint8 height = hullHeight - startY - uint8(ySeed % 5);

        for(uint8 i = 0; i < maxColumns; i++) {
            // for the first loop use default values
            if(i > 0){
                if(i < 3) height -= boxSize/16;
                //get new seed
                ySeed = uint256(keccak256(abi.encodePacked(ySeed)));
                hSeed = uint256(keccak256(abi.encodePacked(hSeed)));
                //uint8 yDelta = (uint8(ySeed % delta)); 
                //uint8 hDelta = (uint8(hSeed % delta));
                uint8 yDelta = getDelta(ySeed, delta);
                uint8 hDelta = getDelta(hSeed, delta);
                uint8 hHalfDelta = delta/2 + slope;
                uint8 yHalfDelta = delta/2;

                //check that wing width isn't smaller than the min or that it exceeds the box
                if(height + hDelta  < minWingHeight + hHalfDelta  || startY + height + hDelta  > boxSize + hHalfDelta ){
                    height = height - hDelta + hHalfDelta; 
                } else {
                    height = height + hDelta - hHalfDelta; 
                }
                //if start value is to low or too high, flip the delta
                // equation was (startY + yDelta - delta < 0) but this caused an underflow in the test, so i had to move delta to the otherside of the equation
                //console.log("id: ", id);
                //console.log("startY: ", startY);
                //console.log("yDelta: ", yDelta);
                //if we start at a negative value || if the new makes our wing width smaller than the min
                if(startY + yDelta < yHalfDelta ) {
                    startY = startY + yHalfDelta - yDelta; 
                } else {
                    startY = startY + yDelta - yHalfDelta;
                }
            }

            uint8 xLeft = boxSize/2 - 1 - i;
            uint8 xRight = boxSize/2 + i;
            
            pattern = string(abi.encodePacked(pattern, 
                '<rect x="', uint256(xLeft).toString(), '" y="', uint256(startY).toString(), '" width="1.2" height="', uint256(height).toString(), '" fill="', color,'"/>', // Left wing
                '<rect x="', uint256(xRight).toString(), '" y="', uint256(startY).toString(), '" width="1.2" height="', uint256(height).toString(), '" fill="', color,'" />' // Right wing
            ));
        }
        return pattern;
    }

    //lower numbers are exponentially more likely than higher ones to help smooth the wing profile
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
