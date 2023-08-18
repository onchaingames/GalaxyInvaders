import React, { useState, useEffect } from 'react';
import Blockies from "react-blockies";
import { generateGrid } from './gridUtils';

const homeworlds = ['Lido', 'Rocket', 'Frax'];
const stakingAddresses = {
  'Lido': 'Fly Here',
  'Rocket': 'Fly Here',
  'Frax': '',
};

export const planets = [
  { name: homeworlds[0], color: 'red', desc: 'APR: 15%' },
  { name: homeworlds[1], color: 'yellow', desc: 'APR: 23%' },
  { name: homeworlds[2], color: 'blue', desc: 'APR: 35%' },
];

function Planet({ planet, onClick, isSelected }) {
  const totalShips = planet.grid ? planet.grid.flat().filter(cell => cell.type === 'rocket').length : 0;
  const totalAliens = planet.grid ? planet.grid.flat().filter(cell => cell.type === 'alien').length : 0;

  return (
    <div className={`w-32 h-auto m-4 relative bg-gray-800 rounded-lg flex flex-col`}>
    <div 
      className={`w-full h-32 rounded-full cursor-pointer hover:opacity-75 flex items-center justify-center relative`}
      onClick={() => onClick(planet)}
    >
      {isSelected && <div className={`absolute w-full h-full rounded-full bg-white shadow-2xl w-[85%] h-[85%]`}></div>}
      <Blockies className="rounded-full z-10 relative" seed={planet.name.toLowerCase()+"sfds"} scale={12} />
    </div>
      <div className="text-center mt-2 flex-grow">
        <h2 className='text-white'>Planet {planet.name}</h2>
        <p>{planet.desc}</p>
        <p>Total Ships: {totalShips}</p>
        <p>Total Aliens: {totalAliens}</p>
        <a href="#" className="text-blue-500 hover:underline cursor-pointer">{stakingAddresses[planet.name]}</a>
      </div>
    </div>
  );
}

function PlanetGrid({ onPlanetClick }) {
  const [planetData, setPlanetData] = useState(planets);
  const [selectedPlanet, setSelectedPlanet] = useState(planets[0].name); // Default to the first planet

  useEffect(() => {
    const updatedPlanets = planetData.map(planet => ({
      ...planet,
      grid: generateGrid()
    }));
    setPlanetData(updatedPlanets);
  }, []);

  const handlePlanetClick = (planet) => {
    setSelectedPlanet(planet.name);
    onPlanetClick(planet);
  }

  return (
    <div className="flex flex-wrap justify-center">
      <div className="flex bg-gray-800 rounded flex-wrap justify-center">
        {planetData.map((planet, index) => (
          <Planet 
            key={index} 
            planet={planet} 
            onClick={handlePlanetClick}
            isSelected={planet.name === selectedPlanet}
          />
        ))}
      </div>
    </div>
  );
} 

export default PlanetGrid;
