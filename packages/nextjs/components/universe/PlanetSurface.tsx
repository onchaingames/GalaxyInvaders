import React, { useState, useEffect } from 'react';

function PlanetSurface({ planets, selectedPlanetIndex, selectedTargetIndex, setSelectedTargetIndex }) {
  const planet = planets[selectedPlanetIndex];
  const shipSVGS = [
    "data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20transform%3D%22translate(0%2C16)%20scale(1%2C-1)%22%3E%3Crect%20x%3D%227%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%2211%22%20fill%3D%22%2333FF57%22%2F%3E%3Crect%20x%3D%228%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%2211%22%20fill%3D%22%2333FF57%22%20%2F%3E%3Crect%20x%3D%226%22%20y%3D%220%22%20width%3D%221.2%22%20height%3D%226%22%20fill%3D%22%2333FF57%22%2F%3E%3Crect%20x%3D%229%22%20y%3D%220%22%20width%3D%221.2%22%20height%3D%226%22%20fill%3D%22%2333FF57%22%20%2F%3E%3Crect%20x%3D%225%22%20y%3D%222%22%20width%3D%221.2%22%20height%3D%223%22%20fill%3D%22%2333FF57%22%2F%3E%3Crect%20x%3D%2210%22%20y%3D%222%22%20width%3D%221.2%22%20height%3D%223%22%20fill%3D%22%2333FF57%22%20%2F%3E%3Crect%20x%3D%224%22%20y%3D%222%22%20width%3D%221.2%22%20height%3D%225%22%20fill%3D%22%2333FF57%22%2F%3E%3Crect%20x%3D%2211%22%20y%3D%222%22%20width%3D%221.2%22%20height%3D%225%22%20fill%3D%22%2333FF57%22%20%2F%3E%3Crect%20x%3D%223%22%20y%3D%222%22%20width%3D%221.2%22%20height%3D%228%22%20fill%3D%22%2333FF57%22%2F%3E%3Crect%20x%3D%2212%22%20y%3D%222%22%20width%3D%221.2%22%20height%3D%228%22%20fill%3D%22%2333FF57%22%20%2F%3E%3Crect%20x%3D%222%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%224%22%20fill%3D%22%2333FF57%22%2F%3E%3Crect%20x%3D%2213%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%224%22%20fill%3D%22%2333FF57%22%20%2F%3E%3Crect%20x%3D%221%22%20y%3D%223%22%20width%3D%221.2%22%20height%3D%226%22%20fill%3D%22%2333FF57%22%2F%3E%3Crect%20x%3D%2214%22%20y%3D%223%22%20width%3D%221.2%22%20height%3D%226%22%20fill%3D%22%2333FF57%22%20%2F%3E%3Crect%20x%3D%220%22%20y%3D%223%22%20width%3D%221.2%22%20height%3D%223%22%20fill%3D%22%2333FF57%22%2F%3E%3Crect%20x%3D%2215%22%20y%3D%223%22%20width%3D%221.2%22%20height%3D%223%22%20fill%3D%22%2333FF57%22%20%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    "data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20transform%3D%22translate(0%2C16)%20scale(1%2C-1)%22%3E%3Crect%20x%3D%227%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%2215%22%20fill%3D%22%235733FF%22%2F%3E%3Crect%20x%3D%228%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%2215%22%20fill%3D%22%235733FF%22%20%2F%3E%3Crect%20x%3D%226%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%2211%22%20fill%3D%22%235733FF%22%2F%3E%3Crect%20x%3D%229%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%2211%22%20fill%3D%22%235733FF%22%20%2F%3E%3Crect%20x%3D%225%22%20y%3D%220%22%20width%3D%221.2%22%20height%3D%228%22%20fill%3D%22%235733FF%22%2F%3E%3Crect%20x%3D%2210%22%20y%3D%220%22%20width%3D%221.2%22%20height%3D%228%22%20fill%3D%22%235733FF%22%20%2F%3E%3Crect%20x%3D%224%22%20y%3D%220%22%20width%3D%221.2%22%20height%3D%225%22%20fill%3D%22%235733FF%22%2F%3E%3Crect%20x%3D%2211%22%20y%3D%220%22%20width%3D%221.2%22%20height%3D%225%22%20fill%3D%22%235733FF%22%20%2F%3E%3Crect%20x%3D%223%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%229%22%20fill%3D%22%235733FF%22%2F%3E%3Crect%20x%3D%2212%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%229%22%20fill%3D%22%235733FF%22%20%2F%3E%3Crect%20x%3D%222%22%20y%3D%223%22%20width%3D%221.2%22%20height%3D%225%22%20fill%3D%22%235733FF%22%2F%3E%3Crect%20x%3D%2213%22%20y%3D%223%22%20width%3D%221.2%22%20height%3D%225%22%20fill%3D%22%235733FF%22%20%2F%3E%3Crect%20x%3D%221%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%224%22%20fill%3D%22%235733FF%22%2F%3E%3Crect%20x%3D%2214%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%224%22%20fill%3D%22%235733FF%22%20%2F%3E%3Crect%20x%3D%220%22%20y%3D%222%22%20width%3D%221.2%22%20height%3D%226%22%20fill%3D%22%235733FF%22%2F%3E%3Crect%20x%3D%2215%22%20y%3D%222%22%20width%3D%221.2%22%20height%3D%226%22%20fill%3D%22%235733FF%22%20%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    "data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20transform%3D%22translate(0%2C16)%20scale(1%2C-1)%22%3E%3Crect%20x%3D%227%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%2213%22%20fill%3D%22%23FF33A6%22%2F%3E%3Crect%20x%3D%228%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%2213%22%20fill%3D%22%23FF33A6%22%20%2F%3E%3Crect%20x%3D%226%22%20y%3D%220%22%20width%3D%221.2%22%20height%3D%228%22%20fill%3D%22%23FF33A6%22%2F%3E%3Crect%20x%3D%229%22%20y%3D%220%22%20width%3D%221.2%22%20height%3D%228%22%20fill%3D%22%23FF33A6%22%20%2F%3E%3Crect%20x%3D%225%22%20y%3D%222%22%20width%3D%221.2%22%20height%3D%226%22%20fill%3D%22%23FF33A6%22%2F%3E%3Crect%20x%3D%2210%22%20y%3D%222%22%20width%3D%221.2%22%20height%3D%226%22%20fill%3D%22%23FF33A6%22%20%2F%3E%3Crect%20x%3D%224%22%20y%3D%223%22%20width%3D%221.2%22%20height%3D%224%22%20fill%3D%22%23FF33A6%22%2F%3E%3Crect%20x%3D%2211%22%20y%3D%223%22%20width%3D%221.2%22%20height%3D%224%22%20fill%3D%22%23FF33A6%22%20%2F%3E%3Crect%20x%3D%223%22%20y%3D%223%22%20width%3D%221.2%22%20height%3D%227%22%20fill%3D%22%23FF33A6%22%2F%3E%3Crect%20x%3D%2212%22%20y%3D%223%22%20width%3D%221.2%22%20height%3D%227%22%20fill%3D%22%23FF33A6%22%20%2F%3E%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%221.2%22%20height%3D%223%22%20fill%3D%22%23FF33A6%22%2F%3E%3Crect%20x%3D%2213%22%20y%3D%222%22%20width%3D%221.2%22%20height%3D%223%22%20fill%3D%22%23FF33A6%22%20%2F%3E%3Crect%20x%3D%221%22%20y%3D%220%22%20width%3D%221.2%22%20height%3D%226%22%20fill%3D%22%23FF33A6%22%2F%3E%3Crect%20x%3D%2214%22%20y%3D%220%22%20width%3D%221.2%22%20height%3D%226%22%20fill%3D%22%23FF33A6%22%20%2F%3E%3Crect%20x%3D%220%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%2210%22%20fill%3D%22%23FF33A6%22%2F%3E%3Crect%20x%3D%2215%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%2210%22%20fill%3D%22%23FF33A6%22%20%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
  ];
  const reducedGrid = planet && planet.grid ? planet.grid.filter((_, idx) => idx % 2 === 0).map(row => row.filter((_, idx) => idx % 2 === 0)) : [];

  useEffect(() => {
    if (selectedTargetIndex) {
      const selectedCell = planet.grid[selectedTargetIndex.i] && planet.grid[selectedTargetIndex.i][selectedTargetIndex.j];
      if (!selectedCell || selectedCell.type === 'blank') {
        setSelectedTargetIndex(null);  // Reset if the selected target is invalid or blank
      }
    }
  }, [planet]);

const handleCellClick = (cell, i, j) => {
  if (cell.type !== 'blank') {
    setSelectedTargetIndex({i, j});
  }
};

return (
  <div className="space-y-2">
    {planet && planet.grid && planet.grid.map((row, i) => (
      <div key={i} className="flex flex-row justify-center space-x-4">
        {row.map((cell, j) => (
          <button 
            key={`${i}-${j}`} 
            className={`min-w-[3.5rem] max-w-[3.5rem] min-h-[3.5rem] max-h-[3.5rem] mx-2 my-2 cursor-pointer hover:bg-blue-700 flex items-center justify-center border-none outline-none focus:outline-none ${selectedTargetIndex && selectedTargetIndex.i === i && selectedTargetIndex.j === j ? 'bg-blue-500' : ''}`}
            onClick={() => handleCellClick(cell, i, j)}
          >
            {cell.type === 'rocket' && <img src={shipSVGS[j % shipSVGS.length]} alt="ship" className="w-full h-full transform rotate-180" />}
            {cell.type === 'alien' && <span className="text-5xl">👾</span>}
          </button>
        ))}
      </div>
    ))}
  </div>
);
}


export default PlanetSurface;