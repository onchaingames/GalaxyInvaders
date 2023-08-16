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
    <div className="">
      <h1 className="ml-10 block text-2xl">Targeting System</h1>
      {isAlien && (
        <>
          <p>Alien</p>
          <p>Ammo: {target.ammoCost}</p>
          <p>GALX: {target.victoryPoints}</p>
          <p>Age: {target.age}</p>
        </>
      ) || isShip && (
        <>
          <p>Human</p>
          <p>Homeworld: {target.homeworld}</p>
          <p>Ammo: {target.ammo}</p>
          <p>Experience: {target.experience}</p>
          <p>GALX: {target.victoryPoints}</p>
        </>
      )}
      {(isAlien || isShip) && (
        <div className="absolute bottom-0">
          <div className="flex justify-between items-end w-full mb-4">
          <div className="border rounded flex justify-between items-end w-full">
            <div className="ml-2" >
              <label htmlFor="attackAmount" className="text-gray-500 font-bold text-xs block">Ammo</label>
              <input type="text" id="attackAmount" name="attackAmount" defaultValue="0" className="py-2  rounded px-2 w-20 bg-transparent" />
            </div>
              <div className="text-gray-500 mb-1 mx-1 font-bold text-xs block">max</div>
            </div>
            <button className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded bottom-0">
              Attack
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TargetingSystem;
