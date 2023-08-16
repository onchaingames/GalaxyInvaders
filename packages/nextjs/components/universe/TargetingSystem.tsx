import React from 'react';

function TargetingSystem({ target }) {

  const isShip = target && target.type === 'rocket';
  const isAlien =target &&  target.type === 'alien';

  return (
      <div className=" bg-gray-800 rounded p-2 ">
      <h1 className="text-white text-center text-2xl">Targeting System</h1>
      <div className=' px-1 mb-1'>
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
        </>
      )}
      </div>
      {(isAlien || isShip) && (
        <div className="">
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
