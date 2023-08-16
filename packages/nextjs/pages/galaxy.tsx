import type { NextPage } from "next";
import { useState, useEffect } from 'react';
import { MetaHeader } from "~~/components/MetaHeader";
import PlanetGrid, { planets } from '~~/components/universe/PlanetGrid';
import PlanetSurface from '~~/components/universe/PlanetSurface';
import ShipStats from '~~/components/universe/ShipStats';
import TargetingSystem from '~~/components/universe/TargetingSystem';

const stats = [
  { name: 'Homeworld', value: 'FRAX', deposit: true, withdraw: true },
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
      <div className="planets mt-10 mb-4 bg-black flex items-baseline gap-10">
        <div className="backButton justify-self-end">
          <ShipStats stats={stats} />
        </div>

        <div className="planetSection flex flex-col items-center flex-1 flex-shrink-0">
          <div className="planetTitle text-center mb-4">
            {selectedPlanet ? (
              <>
                <h2>{selectedPlanet.name}</h2>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div className="planetSurface">
            <PlanetSurface planet={selectedPlanet} onTargetSelect={handleTargetSelect} />
          </div>
        </div>

        <div className="targeting-system h-full relative">
          <TargetingSystem target={selectedTarget} />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <img src="/assets/ship3.png" alt="Ship" />
      </div>
      <div className="">
        <PlanetGrid onPlanetClick={handlePlanetClick} />
      </div>
    </>
  );
};

export default galaxy;
