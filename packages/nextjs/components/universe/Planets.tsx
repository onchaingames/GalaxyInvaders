import React, { useState, useEffect } from 'react';
import Blockies from "react-blockies";
import { generateGrid } from './gridUtils';
import { RocketLaunchIcon} from "@heroicons/react/24/outline";

const stakingAddresses = {
  'Lido': '🚀 Fly Here',
  'Rocket': '🚀 Fly Here',
  'Frax': '',
};

function Planet({ planet, onClick, isSelected }) {
  const totalShips = planet.grid ? planet.grid.flat().filter(cell => cell.type === 'rocket').length : 0;
  const totalAliens = planet.grid ? planet.grid.flat().filter(cell => cell.type === 'alien').length : 0;

  return (
    <button className={`w-32 h-auto m-4 relative bg-gray-800 rounded-lg flex flex-col`} onClick={() => onClick(planet)}>
      <div className={`w-full h-32 rounded-full cursor-pointer hover:opacity-75 flex items-center justify-center relative`}>
        {isSelected && <div className={`absolute w-full h-full rounded-full bg-white shadow-2xl w-[85%] h-[85%]`}></div>}
        <Blockies className="rounded-full z-10 relative" seed={planet.name.toLowerCase()+"sfds"} scale={12} />
      </div>
      <div className="text-center mt-2 flex-grow">
        <h2 className='text-white'>Planet {planet.name}</h2>
        <p>APR: <span className = "text-purple-500">{planet.apr}</span></p>
        <p>Total Ships: <span className = "text-purple-500">{totalShips}</span></p>
        <p>Total Aliens: <span className = "text-purple-500">{totalAliens}</span></p>
        <a href="#" className="text-blue-500 hover:underline cursor-pointer">
          {stakingAddresses[planet.name]}
        </a>
      </div>
    </button>
  );
}


function PlanetGrid({ planets, setPlanets, setSelectedPlanetIndex, selectedPlanetIndex }) {
  useEffect(() => {
    const updatedPlanets = planets.map(planet => {
      return {
        ...planet,
        grid: generateGrid()
      };
    });
    setPlanets(updatedPlanets);
  }, []);

  const handlePlanetClick = (index) => {
    setSelectedPlanetIndex(index);
  }

  return (
    <div className="flex flex-wrap justify-center">
      <div className="flex bg-gray-800 rounded flex-wrap justify-center">
        {planets.map((planet, index) => (
          <Planet 
            key={index} 
            planet={planet} 
            onClick={() => handlePlanetClick(index)}
            isSelected={index === selectedPlanetIndex}
          />
        ))}
      </div>
    </div>
  );
} 

export default PlanetGrid;
