import React from 'react';

function TargetingSystem({ target }) {
  if (!target) {
    return (
      <div className="targeting-system">
        <h1 className="ml-10 block text-2xl">Targeting System</h1>
        <p>No target selected</p>
        <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded bottom-0" disabled>
          Attack
        </button>
      </div>
    );
  }

  const isShip = target.type === 'rocket';
  const isAlien = target.type === 'alien';

return (
  <div className="targeting-system h-full relative">
    <h1 className="ml-10 block text-2xl">Targeting System</h1>
    {isAlien && (
      <>
        <p>Alien</p>
        <p>Cvr Ammo cost: {target.ammoCost}</p>
        <p>Victory Point Reward: {target.victoryPoints}</p>
        <p>Age(blocks): {target.age}</p>
      </>
    ) || isShip && (
      <>
        <p>Human</p>
        <p>Homeworld (LP Type): {target.homeworld}</p>
        <p>Ammo (CRV): {target.ammo}</p>
        <p>Experience (veCRV): {target.experience}</p>
        <p>Victory Points (Gov tokens): {target.victoryPoints}</p>
      </>
    )}
    {(isAlien || isShip)  && (
    <div className="absolute bottom-0">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded bottom-0">
        Attack
      </button>
    </div>
    )}
  </div>
);
}

export default TargetingSystem;
