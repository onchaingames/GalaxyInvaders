import type { NextPage } from "next";
import { useState } from 'react';
import { MetaHeader } from "~~/components/MetaHeader";
import PlanetGrid, { planets } from '~~/components/universe/PlanetGrid';
import PlanetSurface from '~~/components/universe/PlanetSurface';
import ShipStats from '~~/components/universe/ShipStats';
import TargetingSystem from '~~/components/universe/TargetingSystem';

const stats = [
  { name: 'Homeworld', value: 'FRAX', deposit: false, withdraw: false },
  { name: 'AMMO', value: 6, deposit: true, withdraw: true },
  { name: 'Experience', value: '600' },
  { name: 'GALX', value: 4330, withdraw: true },
];

const galaxy: NextPage = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(planets[0]);
  const [selectedTarget, setSelectedTarget] = useState(null);

  const handlePlanetClick = (planet) => {
    setSelectedPlanet(planet);
  };

  const handleTargetSelect = (target) => {
    setSelectedTarget(target);
  };

  return (
    <>
      <MetaHeader
        title="Galaxy Invaders"
        description="Battle for yield and Gov tokens"
      >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
      </MetaHeader>

      <div className="planets mt-10 mb-4 bg-black">
        <div className="planetTitle mb-4 text-center text-white text-2xl">
          <h2>{selectedPlanet.name}</h2>
        </div>
        <div className="flex justify-center items-start gap-10 w-full">
          <div className="flex flex-1 justify-end">
            <div className="shipStats flex-shrink-0">
              <ShipStats stats={stats} />
            </div>
          </div>
          <div className="planetSurface flex-1 flex justify-center">
            <PlanetSurface planet={selectedPlanet} onTargetSelect={handleTargetSelect} />
          </div>
          <div className="flex flex-1 justify-start">
            <div className="targeting-system flex-shrink-0">
              {selectedTarget && <TargetingSystem target={selectedTarget} />}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-4">
        <img src="/assets/ship3.png" alt="Ship" />
      </div>

      <div className="mt-4">
        <PlanetGrid onPlanetClick={handlePlanetClick} />
      </div>
    </>
  );
};

export default galaxy;
