import React, { useState } from 'react';

function TargetingSystem({ planets, selectedPlanetIndex, selectedTargetIndex }) {
  const planet = planets[selectedPlanetIndex];
  const target = planet.grid[selectedTargetIndex.i][selectedTargetIndex.j];

  const isShip = target && target.type === 'rocket';
  const isAlien = target && target.type === 'alien';
  const myExperience = 600;
  const targetExperience = target.experience;

  const adjustedOdds = (myExperience + 1) / (myExperience + targetExperience + 2) * 100;

  return (
    <div className="bg-gray-800 rounded p-2 relative">
      <div className="bg-gray-800 rounded p-2">
        <h1 className="text-white text-center text-2xl">Targeting System</h1>
        <div className="px-1 mb-1">
          <table className="bg-gray-800 rounded p-2 table-auto space-x-4">
            <tbody>
              {isAlien && (
                <>
                  <tr>
                    <td className="mx-4">
                      <span className="tooltip tooltip-info" data-tip="A Scary alien! Kill it!">👾 Alien</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="mx-4">
                      <span className="tooltip tooltip-info" data-tip="Amount of Ammo Required to take him out">🖊 AMMO Req</span>
                    </td>
                    <td className="text-white mx-4 p-2">{target.ammoCost}</td>
                  </tr>
                  <tr>
                    <td className="mx-4">
                      <span className="tooltip tooltip-info" data-tip="Amount of Galaxy Tokens you can win">👾 GALX</span>
                    </td>
                    <td className="text-white mx-4 p-2">{target.victoryPoints}</td>
                  </tr>
                  <tr>
                    <td className="mx-4">
                      <span className="tooltip tooltip-info" data-tip="Amount of time (in blocks) left before this target expires">Lifecycle</span>
                    </td>
                    <td className="text-white mx-4 p-2">{target.age}/10</td>
                  </tr>
                  <tr>
                    <td className="mx-4">
                      <span className="tooltip tooltip-info" data-tip="Amount of Exp you will gain for a Win. Depends on Ammo Req">Exp Gain</span>
                    </td>
                    <td className="text-white mx-4 p-2">{target.ammoCost}</td>
                  </tr>
                </>
              )}
              {isShip && (
                <>
                  <tr>
                    <td className="mx-4">
                      <span className="tooltip tooltip-info" data-tip="Beware vindictive Humans">🚀 Human</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="mx-4">
                      <span className="tooltip tooltip-info" data-tip="If you are 'hommies', you can't fire">Homeworld</span>
                    </td>
                    <td className="text-white mx-4 p-2">{target.homeworld}</td>
                  </tr>
                  <tr>
                    <td className="mx-4">
                      <span className="tooltip tooltip-info" data-tip="The max Ammo you can steal by fireing an equal amount">🖊 AMMO</span>
                    </td>
                    <td className="text-white mx-4 p-2">{target.ammo}</td>
                  </tr>
                  <tr>
                    <td className="mx-4">
                      <span className="tooltip tooltip-info" data-tip="This Ships Exp Level">EXP</span>
                    </td>
                    <td className="text-white mx-4 p-2">{target.experience}</td>
                  </tr>
                  <tr>
                    <td className="mx-4">
                      <span className="tooltip tooltip-info" data-tip="These are your odds of a successful heist">Odds</span>
                    </td>
                    <td className="text-white mx-4 p-2">{adjustedOdds.toFixed(2)}%</td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
        {(isAlien || isShip) && (
          <div className="flex justify-between items-end w-full mb-4">
            <div className="border rounded flex justify-between items-end w-full">
              <div className="ml-2">
                <label htmlFor="attackAmount" className="text-gray-500 font-bold text-xs block">Ammo</label>
                <input type="text" id="attackAmount" name="attackAmount" defaultValue="0" className="py-2 rounded px-2 w-20 bg-transparent" />
              </div>
              <div className="text-gray-500 mb-1 mx-1 font-bold text-xs block">max</div>
            </div>
            <button
              className="ml-2 text-white font-bold py-2 px-2 w-16 h-16 rounded-full flex items-center justify-center transition duration-150 ease-in-out transform active:scale-95 drop-shadow-2xl flex-shrink-0"
              style={{
                background: 'radial-gradient(circle at center, rgba(0, 0, 0, 0.4), transparent), rgba(0, 255, 0, 1)',
                border: '4px solid rgba(255, 255, 255, 1)',
              }}
            >
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TargetingSystem;
