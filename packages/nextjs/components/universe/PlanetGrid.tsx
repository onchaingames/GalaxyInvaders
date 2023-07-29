import React from 'react';
/*
// Generate a 16x16 grid for each planet
const generateGrid = () => {
  const grid = [];
  for (let i = 0; i < 16; i++) {
    const row = [];
    for (let j = 0; j < 16; j++) {
      const rand = Math.random();
      if (rand < 0.3) row.push('rocket');
      else if (rand < 0.35) row.push('alien');
      else row.push('empty');
    }
    grid.push(row);
  }
  return grid;
};
OLD*/

// Generate a 16x16 grid for each planet
const generateGrid = () => {
  const grid = [];
  const homeworlds = ['TriCrypto', 'CrvUSD', 'FraxEth', 'Invader L1', 'Invader L2', 'Invader L3'];
  for (let i = 0; i < 16; i++) {
    const row = [];
    for (let j = 0; j < 16; j++) {
      const rand = Math.random();
      if (rand < 0.3) {
        row.push({
          type: 'rocket',
          homeworld: homeworlds[Math.floor(Math.random() * homeworlds.length)],
          ammo: Math.floor(Math.random() * 100),
          experience: Math.floor(Math.random() * 1000),
          victoryPoints: Math.floor(Math.random() * 5000),
        });
      } else if (rand < 0.35) {
        row.push({
          type: 'alien',
          ammoCost: Math.floor(Math.random() * 10),
          victoryPoints: Math.floor(Math.random() * 100),
          age: Math.floor(Math.random() * 10),
        });
      } else {
        row.push('empty');
      }
    }
    grid.push(row);
  }
  return grid;
};


export const planets = [
  { name: 'TriCryptoUSDC', color: 'red', desc: 'CRV APR: 15%', grid: generateGrid() },
  { name: 'CrvUSD/USDC', color: 'yellow', desc: 'CRV APR: 7%', grid: generateGrid() },
  { name: 'FraxEth/Eth', color: 'blue', desc: 'CRV APR: 4%', grid: generateGrid() },
  { name: 'Invader L1', color: 'orange', desc: 'Weakest Alien Planet', grid: generateGrid() },
  { name: 'Invader L2', color: 'green', desc: 'Midrange Alien Planet', grid: generateGrid() },
  { name: 'Invader L3', color: 'purple', desc: 'Strongest Alien Planet', grid: generateGrid() },
];

function Planet({ planet, onClick }) {
  return (
    <div className="w-32 h-32 m-4 relative">
      <div 
        className={`w-full h-full rounded-full cursor-pointer hover:opacity-75`}
        style={{
          backgroundImage: `radial-gradient(circle at 30% 30%, ${planet.color}, black)`
        }}
        onClick={() => onClick(planet)}
      >
      </div>
      <div className="text-center mt-2">
        <h2>{planet.name}</h2>
        <p>{planet.desc}</p>
      </div>
    </div>
  );
}

function PlanetGrid({ onPlanetClick }) {
  return (
    <div className="flex flex-wrap justify-center">
      {planets.map((planet, index) => (
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
