import React, { useState, useEffect } from 'react';
import Blockies from "react-blockies";
import { generateGrid } from './gridUtils';

function Planet({ planet, onClick, isSelected }) {
  const totalShips = planet.grid ? planet.grid.flat().filter((cell: { type: string; }) => cell.type === 'rocket').length : 0;
  const totalAliens = planet.grid ? planet.grid.flat().filter((cell: { type: string; }) => cell.type === 'alien').length : 0;


  return (
    <button className={`w-32 h-auto m-4 relative bg-gray-800 items-center rounded-lg flex flex-col`} onClick={() => onClick(planet)}>
      <div className={`w-full h-32 rounded-full cursor-pointer hover:opacity-75 flex items-center justify-center relative`}>
        {isSelected && <div className={`absolute w-full h-full rounded-full bg-white shadow-2xl`}></div>}
        <Blockies className="rounded-full z-10 relative" seed={planet.name.toLowerCase()+"sfds"} scale={12} />
      </div>
      <div className="text-center mt-2 flex-grow">
        <h2 className='text-white'>Planet {planet.name}</h2>
        <a href="#" className="text-blue-500 hover:underline cursor-pointer">
          {/*stakingAddresses[planet.name]*/}
        </a>
        <p>APR: <span className = "text-purple-500">{planet.apr}</span></p>
        <p>Total Ships: <span className = "text-purple-500">{totalShips}</span></p>
        <p>Total Aliens: <span className = "text-purple-500">{totalAliens}</span></p>
      </div>
    </button>
  );
}


function PlanetGrid({ planets, setPlanets, setSelectedPlanetIndex, selectedPlanetIndex }) {
  const [selectedShipIndex, setSelectedShipIndex] = useState<number | null>(null);

  useEffect(() => {
    const updatedPlanets = planets.map((planet: any) => {
      return {
        ...planet,
        grid: generateGrid()
      };
    });
    setPlanets(updatedPlanets);
  }, []);

  const handlePlanetClick = (index: any) => {
    setSelectedPlanetIndex(index);
  }

  const shipSVGS = [
    "data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20transform%3D%22translate(0%2C16)%20scale(1%2C-1)%22%3E%3Crect%20x%3D%227%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%2211%22%20fill%3D%22%2333FF57%22%2F%3E%3Crect%20x%3D%228%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%2211%22%20fill%3D%22%2333FF57%22%20%2F%3E%3Crect%20x%3D%226%22%20y%3D%220%22%20width%3D%221.2%22%20height%3D%226%22%20fill%3D%22%2333FF57%22%2F%3E%3Crect%20x%3D%229%22%20y%3D%220%22%20width%3D%221.2%22%20height%3D%226%22%20fill%3D%22%2333FF57%22%20%2F%3E%3Crect%20x%3D%225%22%20y%3D%222%22%20width%3D%221.2%22%20height%3D%223%22%20fill%3D%22%2333FF57%22%2F%3E%3Crect%20x%3D%2210%22%20y%3D%222%22%20width%3D%221.2%22%20height%3D%223%22%20fill%3D%22%2333FF57%22%20%2F%3E%3Crect%20x%3D%224%22%20y%3D%222%22%20width%3D%221.2%22%20height%3D%225%22%20fill%3D%22%2333FF57%22%2F%3E%3Crect%20x%3D%2211%22%20y%3D%222%22%20width%3D%221.2%22%20height%3D%225%22%20fill%3D%22%2333FF57%22%20%2F%3E%3Crect%20x%3D%223%22%20y%3D%222%22%20width%3D%221.2%22%20height%3D%228%22%20fill%3D%22%2333FF57%22%2F%3E%3Crect%20x%3D%2212%22%20y%3D%222%22%20width%3D%221.2%22%20height%3D%228%22%20fill%3D%22%2333FF57%22%20%2F%3E%3Crect%20x%3D%222%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%224%22%20fill%3D%22%2333FF57%22%2F%3E%3Crect%20x%3D%2213%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%224%22%20fill%3D%22%2333FF57%22%20%2F%3E%3Crect%20x%3D%221%22%20y%3D%223%22%20width%3D%221.2%22%20height%3D%226%22%20fill%3D%22%2333FF57%22%2F%3E%3Crect%20x%3D%2214%22%20y%3D%223%22%20width%3D%221.2%22%20height%3D%226%22%20fill%3D%22%2333FF57%22%20%2F%3E%3Crect%20x%3D%220%22%20y%3D%223%22%20width%3D%221.2%22%20height%3D%223%22%20fill%3D%22%2333FF57%22%2F%3E%3Crect%20x%3D%2215%22%20y%3D%223%22%20width%3D%221.2%22%20height%3D%223%22%20fill%3D%22%2333FF57%22%20%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    "data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20transform%3D%22translate(0%2C16)%20scale(1%2C-1)%22%3E%3Crect%20x%3D%227%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%2215%22%20fill%3D%22%235733FF%22%2F%3E%3Crect%20x%3D%228%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%2215%22%20fill%3D%22%235733FF%22%20%2F%3E%3Crect%20x%3D%226%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%2211%22%20fill%3D%22%235733FF%22%2F%3E%3Crect%20x%3D%229%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%2211%22%20fill%3D%22%235733FF%22%20%2F%3E%3Crect%20x%3D%225%22%20y%3D%220%22%20width%3D%221.2%22%20height%3D%228%22%20fill%3D%22%235733FF%22%2F%3E%3Crect%20x%3D%2210%22%20y%3D%220%22%20width%3D%221.2%22%20height%3D%228%22%20fill%3D%22%235733FF%22%20%2F%3E%3Crect%20x%3D%224%22%20y%3D%220%22%20width%3D%221.2%22%20height%3D%225%22%20fill%3D%22%235733FF%22%2F%3E%3Crect%20x%3D%2211%22%20y%3D%220%22%20width%3D%221.2%22%20height%3D%225%22%20fill%3D%22%235733FF%22%20%2F%3E%3Crect%20x%3D%223%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%229%22%20fill%3D%22%235733FF%22%2F%3E%3Crect%20x%3D%2212%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%229%22%20fill%3D%22%235733FF%22%20%2F%3E%3Crect%20x%3D%222%22%20y%3D%223%22%20width%3D%221.2%22%20height%3D%225%22%20fill%3D%22%235733FF%22%2F%3E%3Crect%20x%3D%2213%22%20y%3D%223%22%20width%3D%221.2%22%20height%3D%225%22%20fill%3D%22%235733FF%22%20%2F%3E%3Crect%20x%3D%221%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%224%22%20fill%3D%22%235733FF%22%2F%3E%3Crect%20x%3D%2214%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%224%22%20fill%3D%22%235733FF%22%20%2F%3E%3Crect%20x%3D%220%22%20y%3D%222%22%20width%3D%221.2%22%20height%3D%226%22%20fill%3D%22%235733FF%22%2F%3E%3Crect%20x%3D%2215%22%20y%3D%222%22%20width%3D%221.2%22%20height%3D%226%22%20fill%3D%22%235733FF%22%20%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    "data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20transform%3D%22translate(0%2C16)%20scale(1%2C-1)%22%3E%3Crect%20x%3D%227%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%2213%22%20fill%3D%22%23FF33A6%22%2F%3E%3Crect%20x%3D%228%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%2213%22%20fill%3D%22%23FF33A6%22%20%2F%3E%3Crect%20x%3D%226%22%20y%3D%220%22%20width%3D%221.2%22%20height%3D%228%22%20fill%3D%22%23FF33A6%22%2F%3E%3Crect%20x%3D%229%22%20y%3D%220%22%20width%3D%221.2%22%20height%3D%228%22%20fill%3D%22%23FF33A6%22%20%2F%3E%3Crect%20x%3D%225%22%20y%3D%222%22%20width%3D%221.2%22%20height%3D%226%22%20fill%3D%22%23FF33A6%22%2F%3E%3Crect%20x%3D%2210%22%20y%3D%222%22%20width%3D%221.2%22%20height%3D%226%22%20fill%3D%22%23FF33A6%22%20%2F%3E%3Crect%20x%3D%224%22%20y%3D%223%22%20width%3D%221.2%22%20height%3d%224%22%20fill%3d%22%23ff33a6%22%2f%3e%3crect%20x%3d%2211%22%20y%3d%223%22%20width%3d%221.2%22%20height%3d%224%22%20fill%3d%22%23ff33a6%22%20%2f%3e%3crect%20x%3d%223%22%20y%3d%223%22%20width%3d%221.2%22%20height%3d%227%22%20fill%3d%22%23ff33a6%22%2f%3e%3crect%20x%3d%2212%22%20y%3d%223%22%20width%3d%221.2%22%20height%3d%227%22%20fill%3d%22%23ff33a6%22%20%2f%3e%3crect%20x%3d%222%22%20y%3d%222%22%20width%3d%221.2%22%20height%3d%223%22%20fill%3d%22%23ff33a6%22%2f%3e%3crect%20x%3d%2213%22%20y%3d%222%22%20width%3d%221.2%22%20height%3d%223%22%20fill%3d%22%23ff33a6%22%20%2f%3e%3crect%20x%3d%221%22%20y%3d%220%22%20width%3d%221.2%22%20height%3d%226%22%20fill%3d%22%23ff33a6%22%2f%3e%3crect%20x%3d%2214%22%20y%3d%220%22%20width%3d%221.2%22%20height%3d%226%22%20fill%3d%22%23ff33a6%22%20%2f%3e%3crect%20x%3d%220%22%20y%3d%221%22%20width%3d%221.2%22%20height%3d%2210%22%20fill%3d%22%23ff33a6%22%2f%3e%3crect%20x%3d%2215%22%20y%3d%221%22%20width%3d%221.2%22%20height%3d%2210%22%20fill%3d%22%23ff33a6%22%20%2f%3e%3c%2fg%3e%3c%2fsvg%3e",
  ];
  return (
    <>
    <div className="flex flex-row bg-gray-800 rounded-box max-w-full p-4 ">
        {shipSVGS.map((svg, index) => (
          <div 
            key={index}
            onClick={() => setSelectedShipIndex(index)}
            className={`p-4 cursor-pointer ${selectedShipIndex === index ? 'bg-gray-700 rounded-box' : ''}`}
          >
            <img
              src={svg}
              alt={`SVG for ID ${index}`}
              className="z-10 relative w-20 h-20"
            />
          </div>
        ))}
      </div>
      {/* Add other components or JSX below */}
    </>
  );
} 

export default PlanetGrid;