import type { NextPage } from "next";
import { SetStateAction, useState } from 'react';
import { MetaHeader } from "~~/components/MetaHeader";
import PlanetGrid from '~~/components/universe/PlanetGrid';
import PlanetSurface from '~~/components/universe/PlanetSurface';
import ShipStats from '~~/components/universe/ShipStats';
import TargetingSystem from '~~/components/universe/TargetingSystem';

const stats = [
  { name: 'Homeworld (LP Type)', value: 'FraxEth/Eth', deposit:true, withdraw: true },
  { name: 'Ammo (CRV)', value: 6, deposit: true, withdraw: true },
  { name: 'Experience (veCRV)', value: '600' },
  { name: 'Victory Points (Gov tokens)', value: 4330, withdraw: true },
];

const galaxy: NextPage = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [selectedTarget, setSelectedTarget] = useState(null);

  const handlePlanetClick = (planet: SetStateAction<null>) => {
    setSelectedPlanet(planet);
    console.log(selectedPlanet); // Add this line
  };

  const handleBackClick = () => {
    setSelectedPlanet(null);
    setSelectedTarget(null); // Clear the selected target when the "Back" button is clicked
  };

  const handleTargetSelect = (target: any) => {
    setSelectedTarget(target);
  };

  return (
    <>
      <MetaHeader
        title="Planet Victory"
        description="Battle for yield and Gov tokens"
      >
        {/* We are importing the font this way to lighten the size of SE2. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
      </MetaHeader>
      {selectedPlanet ? (
        <div className="planets mt-10 mb-4 bg-black grid grid-cols-3 items-baseline place-content-center gap-10">
          
          <div className="planetTitle col-start-2 text-center ">
            <h2>{selectedPlanet.name}</h2>
            <p>{selectedPlanet.desc}</p>
          </div>
          <div className="backButton col-start-1 justify-self-end">
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleBackClick}
              >
              Back
            </button>
          </div>
          <PlanetSurface planet={selectedPlanet} onBackClick={handleBackClick} onTargetSelect={handleTargetSelect} />
          <TargetingSystem target={selectedTarget} />
        </div>
      ) : (
        <div className="planetGrid mb-40 mt-20 ">
          <PlanetGrid onPlanetClick={handlePlanetClick} />
        </div>
      )}
      <div className="shipStats mb-40 ">
        <ShipStats stats={stats} />
      </div>
    </>
  );
};

export default galaxy;
