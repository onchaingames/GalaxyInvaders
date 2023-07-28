import React, { useState } from 'react';

function PlanetSurface({ planet, onBackClick, onTargetSelect }) {
  const [selectedTarget, setSelectedTarget] = useState(null);

  if (!planet || !planet.grid) {
    return <div>Loading...</div>;
  }

const handleCellClick = (cell, i, j) => {
  if (cell !== 'empty') {
    setSelectedTarget({ ...cell, i, j });
    onTargetSelect({ ...cell, i, j });
  }
};
// In PlanetSurface
return (
  <div className="planetSurface flex flex-col items-center">
    {planet.grid.map((row, i) => (
      <div key={i} className="flex flex-row justify-center">
        {row.map((cell, j) => (
          <div 
            key={`${i}-${j}`} 
            className={`w-8 h-8 cursor-pointer hover:bg-blue-700 flex items-center justify-center ${selectedTarget && selectedTarget.i === i && selectedTarget.j === j ? 'bg-blue-500' : ''}`}
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
