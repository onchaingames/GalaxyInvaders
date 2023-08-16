import React, { useState, useEffect } from 'react';
import Blockies from "react-blockies";
import { generateGrid } from './gridUtils'; // Adjust the path accordingly


const homeworlds = ['Lido', 'Rocket', 'Frax' ];

const stakingAddresses = {
  'Lido': 'Address',
  'Rocket': 'Address',
  'Frax': 'Address',
};



export const planets = [
  { name: homeworlds[0], color: 'red', desc: 'APR: 15%' },
  { name: homeworlds[1], color: 'yellow', desc: 'APR: 23%' },
  { name: homeworlds[2], color: 'blue', desc: 'APR: 35%' },
];

function Planet({ planet, onClick }) {
  const totalShips = planet.grid ? planet.grid.flat().filter(cell => cell.type === 'rocket').length : 0;
  const totalAliens = planet.grid ? planet.grid.flat().filter(cell => cell.type === 'alien').length : 0;

  return (
    <div className="w-32 h-auto m-4 relative bg-gray-800 rounded-lg flex flex-col"> {/* Changed h-32 to h-auto and added flex flex-col */}
      <div 
        className={`w-full h-32 rounded-full cursor-pointer hover:opacity-75 flex items-center justify-center`} // Kept h-32 here for the Blockies container
        onClick={() => onClick(planet)}
      >
        <Blockies className="rounded-full" seed={planet.name.toLowerCase()+"sfds"} scale={10} />
      </div>
      <div className="text-center mt-2 flex-grow"> {/* Added flex-grow */}
        <h2>Planet {planet.name}</h2>
        <p>{planet.desc}</p>
        <p>Total Ships: {totalShips}</p>
        <p>Total Aliens: {totalAliens}</p>
        <p>{stakingAddresses[planet.name]}</p>
      </div>
    </div>
  );
}

function PlanetGrid({ onPlanetClick }) {
  const [planetData, setPlanetData] = useState(planets);

  useEffect(() => {
    const updatedPlanets = planetData.map(planet => ({
      ...planet,
      grid: generateGrid()
    }));
    setPlanetData(updatedPlanets);
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {planetData.map((planet, index) => (
        <Planet 
          key={index} 
          planet={planet} 
          onClick={onPlanetClick}
        />
      ))}
    </div>
  );
}

export default PlanetGrid;

