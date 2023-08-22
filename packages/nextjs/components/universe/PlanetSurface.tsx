import React, { useState, useEffect } from 'react';

function PlanetSurface({ planets, selectedPlanetIndex, selectedTargetIndex, setSelectedTargetIndex }) {
  const planet = planets[selectedPlanetIndex];

  useEffect(() => {
    if (planet && planet.grid) {
      for (let i = 0; i < planet.grid.length; i++) {
        for (let j = 0; j < planet.grid[i].length; j++) {
          const cell = planet.grid[i][j];
          if (cell.type !== 'blank') {
            handleCellClick(cell, i, j);
            return; // Exit the loops once the first non-blank cell is found
          }
        }
      }
    }
  }, [planet]);

  const handleCellClick = (cell, i, j) => {
    if (cell.type !== 'blank') {
      setSelectedTargetIndex({i, j});
    }
  };

  return (
    <div className="">
      {planet && planet.grid && planet.grid.map((row, i) => (
        <div key={i} className="flex flex-row justify-center">
          {row.map((cell, j) => (
            <button 
              key={`${i}-${j}`} 
              className={`min-w-[2rem] max-w-[2rem] min-h-[2rem] max-h-[2rem] cursor-pointer hover:bg-blue-700 flex items-center justify-center border-none outline-none focus:outline-none ${selectedTargetIndex && selectedTargetIndex.i === i && selectedTargetIndex.j === j ? 'bg-blue-500' : ''}`}
              onClick={() => handleCellClick(cell, i, j)}
            >
              {cell.type === 'rocket' && '🚀'}
              {cell.type === 'alien' && '👾'}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
  

export default PlanetSurface;