import React, { useState } from 'react';
import Image from 'next/image';

const planets = [
  { name: 'TriCryptoUSDC', color: 'red', desc: 'CRV APR: 15%' },
  { name: 'CrvUSD/USDC', color: 'yellow', desc: 'CRV APR: 7%' },
  { name: 'FraxEth/Eth', color: 'blue', desc: 'CRV APR: 4%' },
  { name: 'Invader L1', color: 'orange', desc: 'Weakest Alien Planet' },
  { name: 'Invader L2', color: 'green', desc: 'Midrange Alien Planet' },
  { name: 'Invader L3', color: 'purple', desc: 'Strongest Alien Planet' },
];

function Planet({ planet, onClick, isCurrent }) {
  return (
    <div className="w-32 h-32 m-4 relative">
      <div 
        className={`w-full h-full rounded-full cursor-pointer hover:opacity-75`}
        style={{
          backgroundImage: `radial-gradient(circle at 30% 30%, ${planet.color}, black)`
        }}
        onClick={onClick}
      >
        {isCurrent && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-15 h-15">
            <Image alt="Spaceship" src="/ship3.png" width={35} height={35} />
          </div>
        )}
      </div>
      <div className="text-center mt-2">
        <h2>{planet.name}</h2>
        <p>{planet.desc}</p>
      </div>
    </div>
  );
}

function PlanetGrid() {
  const [currentPlanet, setCurrentPlanet] = useState(null);
  const [potentialPlanet, setPotentialPlanet] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  const handlePlanetClick = (planet) => {
    setShowDialog(true);
    setPotentialPlanet(planet);
  };

  const handleDialogClose = (confirmed) => {
    setShowDialog(false);
    if(confirmed) setCurrentPlanet(potentialPlanet);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {planets.map((planet, index) => (
        <Planet 
          key={index} 
          planet={planet} 
          onClick={() => handlePlanetClick(planet)}
          isCurrent={currentPlanet === planet}
        />
      ))}
      {showDialog && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded">
            <p>Do you want to fly to {currentPlanet?.name}?</p>
            <button className="btn btn-primary" onClick={() => handleDialogClose(true)}>Yes</button>
            <button className="btn btn-outline" onClick={() => handleDialogClose(false)}>No</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PlanetGrid;
