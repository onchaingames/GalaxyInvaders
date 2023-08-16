import React, { useState, useEffect } from 'react';

function PlanetSurface({ planet, onBackClick, onTargetSelect }) {
  const [selectedTarget, setSelectedTarget] = useState(null);
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    if (planet && planet.grid) {
      setGrid(planet.grid);
    } else {
      setGrid(generateGrid());
    }
  }, [planet]);

  const handleCellClick = (cell, i, j) => {
    if (cell !== 'empty') {
      setSelectedTarget({ ...cell, i, j });
      onTargetSelect({ ...cell, i, j });
    }
  };

  return (
    <div className="">
      {grid.map((row, i) => (
        <div key={i} className="flex flex-row justify-center">
          {row.map((cell, j) => (
            <div 
              key={`${i}-${j}`} 
              className={`min-w-[2rem] max-w-[2rem] min-h-[2rem] max-h-[2rem] cursor-pointer hover:bg-blue-700 items-center justify-center ${selectedTarget && selectedTarget.i === i && selectedTarget.j === j ? 'bg-blue-500' : ''}`}
              onClick={() => handleCellClick(cell, i, j)}
            >
              {cell.type === 'rocket' && '🚀'}
              {cell.type === 'alien' && '👾'}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default PlanetSurface;
