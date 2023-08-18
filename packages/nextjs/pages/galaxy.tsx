import type { NextPage } from "next";
import { useState } from 'react';
import { MetaHeader } from "~~/components/MetaHeader";
import PlanetGrid, { planets } from '~~/components/universe/PlanetGrid';
import PlanetSurface from '~~/components/universe/PlanetSurface';
import ShipStats from '~~/components/universe/ShipStats';
import TargetingSystem from '~~/components/universe/TargetingSystem';



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

      <div className="planets mt-10 mb-4 bg-black" style={{
        backgroundImage: `
        url("data:image/svg+xml,%3Csvg width='300' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='starry-pattern' x='0' y='0' width='1' height='1' viewBox='0 0 300 300' fill='%23ffffff'%3E%3Ccircle cx='30' cy='30' r='1' /%3E%3Ccircle cx='150' cy='150' r='2' /%3E%3Ccircle cx='270' cy='30' r='1' /%3E%3Ccircle cx='30' cy='270' r='1' /%3E%3Ccircle cx='270' cy='270' r='1' /%3E%3Ccircle cx='90' cy='120' r='0.5' /%3E%3Ccircle cx='210' cy='60' r='0.5' /%3E%3Ccircle cx='60' cy='210' r='0.5' /%3E%3Ccircle cx='240' cy='180' r='0.5' /%3E%3Ccircle cx='120' cy='240' r='1.5' /%3E%3Ccircle cx='180' cy='90' r='0.7' /%3E%3Ccircle cx='45' cy='165' r='0.6' /%3E%3Ccircle cx='255' cy='105' r='0.8' /%3E%3Ccircle cx='75' cy='75' r='0.9' /%3E%3Ccircle cx='225' cy='225' r='0.4' /%3E%3Ccircle cx='105' cy='45' r='1.2' /%3E%3Ccircle cx='195' cy='255' r='0.3' /%3E%3Ccircle cx='135' cy='195' r='0.6' /%3E%3Ccircle cx='165' cy='15' r='0.7' /%3E%3C/pattern%3E%3C/defs%3E%3Crect width='300' height='300' fill='url(%23starry-pattern)' /%3E%3C/svg%3E")
        `
      }}>
        <div className="planetTitle mb-4 text-center text-white text-2xl">
          <h2>Planet {selectedPlanet.name}</h2>
        </div>
        <div className="flex justify-center items-stretch gap-10 w-full">
          <div className="flex flex-1 justify-end">
            <div className="bg-gray-800 rounded shipStats flex-shrink-0 min-w-[275px]">
              <ShipStats />
            </div>
          </div>
          <div className="min-w-[512px] min-h-[512px] planetSurface flex-1 flex justify-center">
            <PlanetSurface 
              key={selectedPlanet.name}  // <-- Add this line
              planet={selectedPlanet} 
              onTargetSelect={handleTargetSelect} 
            />
          </div>
          <div className="flex flex-1 justify-start">
            <div className="bg-gray-800 rounded targeting-system flex-shrink-0 min-w-[275px]"> {/* min-w-[233px] sets the minimum width */}
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
