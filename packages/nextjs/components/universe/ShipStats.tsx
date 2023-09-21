import React, { useState } from 'react';

function ShipStats({ planetsData, selectedPlanetIndex }) {
  const [showModal, setShowModal] = useState(false);
  const stats = [
    { name: 'Homeworld', value: planetsData[0].name, tooltip: 'Your home planet' },
    { name: 'On World', value: planetsData[0].name, tooltip: 'The current world you are on' },
    { name: '🖊 AMMO', value: '1500 ($569)', tooltip: 'Your ETH stake generates Ammo. Ammo can be used to attack or can be withdrawn' },
    { name: 'APR', value: '35%', tooltip: 'Annual Percentage Rate for Ammo generation.' },
    { name: 'EXP', value: '600', tooltip: 'Your experience level. Gain experience by defeating Aliens' },
    { name: '👾 GALX', value: '35 ($3400)', tooltip: 'Galaxy Tokens you have won by defeating Aliens. Stake in Gov to earn protocol fees.' },
  ];

  const handleButtonClick = () => {
    setShowModal(!showModal);
  };
  const shipSVGS = [
    "data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20x%3D%227%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%2212%22%20fill%3D%22%2333FF57%22%2F%3E%3Crect%20x%3D%228%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%2212%22%20fill%3D%22%2333FF57%22%20%2F%3E%3Crect%20x%3D%226%22%20y%3D%220%22%20width%3D%221.2%22%20height%3D%227%22%20fill%3D%22%2333FF57%22%2F%3E%3Crect%20x%3D%229%22%20y%3D%220%22%20width%3D%221.2%22%20height%3D%227%22%20fill%3D%22%2333FF57%22%20%2F%3E%3Crect%20x%3D%225%22%20y%3D%222%22%20width%3D%221.2%22%20height%3D%2210%22%20fill%3D%22%2333FF57%22%2F%3E%3Crect%20x%3D%2210%22%20y%3D%222%22%20width%3D%221.2%22%20height%3D%2210%22%20fill%3D%22%2333FF57%22%20%2F%3E%3Crect%20x%3D%224%22%20y%3D%220%22%20width%3D%221.2%22%20height%3D%227%22%20fill%3D%22%2333FF57%22%2F%3E%3Crect%20x%3D%2211%22%20y%3D%220%22%20width%3D%221.2%22%20height%3D%227%22%20fill%3D%22%2333FF57%22%20%2F%3E%3Crect%20x%3D%223%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%223%22%20fill%3D%22%2333FF57%22%2F%3E%3Crect%20x%3D%2212%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%223%22%20fill%3D%22%2333FF57%22%20%2F%3E%3Crect%20x%3D%222%22%20y%3D%223%22%20width%3D%221.2%22%20height%3D%226%22%20fill%3D%22%2333FF57%22%2F%3E%3Crect%20x%3D%2213%22%20y%3D%223%22%20width%3D%221.2%22%20height%3D%226%22%20fill%3D%22%2333FF57%22%20%2F%3E%3Crect%20x%3D%221%22%20y%3D%222%22%20width%3D%221.2%22%20height%3D%223%22%20fill%3D%22%2333FF57%22%2F%3E%3Crect%20x%3D%2214%22%20y%3D%222%22%20width%3D%221.2%22%20height%3D%223%22%20fill%3D%22%2333FF57%22%20%2F%3E%3Crect%20x%3D%220%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%227%22%20fill%3D%22%2333FF57%22%2F%3E%3Crect%20x%3D%2215%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%227%22%20fill%3D%22%2333FF57%22%20%2F%3E%3C%2Fsvg%3E",
    "data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20x%3D%227%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%2213%22%20fill%3D%22%235733FF%22%2F%3E%3Crect%20x%3D%228%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%2213%22%20fill%3D%22%235733FF%22%20%2F%3E%3Crect%20x%3D%226%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%229%22%20fill%3D%22%235733FF%22%2F%3E%3Crect%20x%3D%229%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%229%22%20fill%3D%22%235733FF%22%20%2F%3E%3Crect%20x%3D%225%22%20y%3D%220%22%20width%3D%221.2%22%20height%3D%224%22%20fill%3D%22%235733FF%22%2F%3E%3Crect%20x%3D%2210%22%20y%3D%220%22%20width%3D%221.2%22%20height%3D%224%22%20fill%3D%22%235733FF%22%20%2F%3E%3Crect%20x%3D%224%22%20y%3D%222%22%20width%3D%221.2%22%20height%3D%227%22%20fill%3D%22%235733FF%22%2F%3E%3Crect%20x%3D%2211%22%20y%3D%222%22%20width%3D%221.2%22%20height%3D%227%22%20fill%3D%22%235733FF%22%20%2F%3E%3Crect%20x%3D%223%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%224%22%20fill%3D%22%235733FF%22%2F%3E%3Crect%20x%3D%2212%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%224%22%20fill%3D%22%235733FF%22%20%2F%3E%3Crect%20x%3D%222%22%20y%3D%220%22%20width%3D%221.2%22%20height%3D%226%22%20fill%3D%22%235733FF%22%2F%3E%3Crect%20x%3D%2213%22%20y%3D%220%22%20width%3D%221.2%22%20height%3D%226%22%20fill%3D%22%235733FF%22%20%2F%3E%3Crect%20x%3D%221%22%20y%3D%220%22%20width%3D%221.2%22%20height%3D%223%22%20fill%3D%22%235733FF%22%2F%3E%3Crect%20x%3D%2214%22%20y%3D%220%22%20width%3D%221.2%22%20height%3D%223%22%20fill%3D%22%235733FF%22%20%2F%3E%3Crect%20x%3D%220%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%227%22%20fill%3D%22%235733FF%22%2F%3E%3Crect%20x%3D%2215%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%227%22%20fill%3D%22%235733FF%22%20%2F%3E%3C%2Fsvg%3E",
    "data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20x%3D%227%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%2212%22%20fill%3D%22%23FF33A6%22%2F%3E%3Crect%20x%3D%228%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%2212%22%20fill%3D%22%23FF33A6%22%20%2F%3E%3Crect%20x%3D%226%22%20y%3D%220%22%20width%3D%221.2%22%20height%3D%227%22%20fill%3D%22%23FF33A6%22%2F%3E%3Crect%20x%3D%229%22%20y%3D%220%22%20width%3D%221.2%22%20height%3D%227%22%20fill%3D%22%23FF33A6%22%20%2F%3E%3Crect%20x%3D%225%22%20y%3D%222%22%20width%3D%221.2%22%20height%3D%2210%22%20fill%3D%22%23FF33A6%22%2F%3E%3Crect%20x%3D%2210%22%20y%3D%222%22%20width%3D%221.2%22%20height%3D%2210%22%20fill%3D%22%23FF33A6%22%20%2F%3E%3Crect%20x%3D%224%22%20y%3D%220%22%20width%3D%221.2%22%20height%3D%227%22%20fill%3D%22%23FF33A6%22%2F%3E%3Crect%20x%3D%2211%22%20y%3D%220%22%20width%3D%221.2%22%20height%3D%227%22%20fill%3D%22%23FF33A6%22%20%2F%3E%3Crect%20x%3D%223%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%223%22%20fill%3D%22%23FF33A6%22%2F%3E%3Crect%20x%3D%2212%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%223%22%20fill%3D%22%23FF33A6%22%20%2F%3E%3Crect%20x%3D%222%22%20y%3D%223%22%20width%3D%221.2%22%20height%3D%226%22%20fill%3D%22%23FF33A6%22%2F%3E%3Crect%20x%3D%2213%22%20y%3D%223%22%20width%3D%221.2%22%20height%3D%226%22%20fill%3D%22%23FF33A6%22%20%2F%3E%3Crect%20x%3D%221%22%20y%3D%222%22%20width%3D%221.2%22%20height%3D%223%22%20fill%3D%22%23FF33A6%22%2F%3E%3Crect%20x%3D%2214%22%20y%3D%222%22%20width%3D%221.2%22%20height%3D%223%22%20fill%3D%22%23FF33A6%22%20%2F%3E%3Crect%20x%3D%220%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%225%22%20fill%3D%22%23FF33A6%22%2F%3E%3Crect%20x%3D%2215%22%20y%3D%221%22%20width%3D%221.2%22%20height%3D%225%22%20fill%3D%22%23FF33A6%22%20%2F%3E%3C%2Fsvg%3E",
  ];

  if (selectedPlanetIndex == 0) {
    return (
      <>
        <h1 className="text-white text-center m-4 text-2xl">Your Ships on {planetsData[0].name}</h1>
        <img
          src={shipSVGS[0]}
          alt={`SVG for ID ${0}`}
          className="z-10 relative w-20 h-20 m-4"
          onLoad={(e) => e.target.style.background = 'none'}
        />
        <img
          src={shipSVGS[1]}
          alt={`SVG for ID ${0}`}
          className="z-10 relative w-20 h-20 m-4"
          onLoad={(e) => e.target.style.background = 'none'}
        />
      </>
    );
  }
}
export default ShipStats;
