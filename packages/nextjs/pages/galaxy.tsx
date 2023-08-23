import type { NextPage } from "next";
import { useState } from 'react';
import { MetaHeader } from "~~/components/MetaHeader";
import PlanetGrid, { planets } from '~~/components/universe/Planets';
import PlanetSurface from '~~/components/universe/PlanetSurface';
import ShipStats from '~~/components/universe/ShipStats';
import TargetingSystem from '~~/components/universe/TargetingSystem';

const galaxy: NextPage = () => {
  const homeworlds = ['Lido', 'Rocket', 'Frax'];

  const planetsData = [
    { name: homeworlds[0], color: 'red', apr: '15%' },
    { name: homeworlds[1], color: 'yellow', apr: '23%' },
    { name: homeworlds[2], color: 'blue', apr: '35%' },
  ];

  const [planets, setPlanets] = useState(planetsData);
  const [selectedPlanetIndex, setSelectedPlanetIndex] = useState(0);
  const [selectedTargetIndex, setSelectedTargetIndex] = useState(0);

  return (
    <>
      <MetaHeader
        title="Galaxy Invaders"
        description="Battle for yield and Gov tokens"
      >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
      </MetaHeader>

      <div className="galaxy mt-10 mb-4 bg-black" style={{ backgroundImage: `...` }}>
        <div className="planetTitle mb-4 text-center text-white text-2xl">
          <h2 className="text-title">Planet {planets[selectedPlanetIndex].name}</h2>
        </div>
        <div className="tri-container flex items-stretch gap-10 w-full overflow-x-auto">
          <div className="flex flex-1 justify-end">
            <div className="bg-gray-800 rounded shipStats flex-shrink-0 min-w-[275px]">
              <ShipStats />
            </div>
          </div>
          <div className="min-w-[512px] min-h-[512px] planetSurface flex-1 flex justify-center">
            <PlanetSurface 
              planets={planets} 
              selectedPlanetIndex={selectedPlanetIndex} 
              selectedTargetIndex={selectedTargetIndex}
              setSelectedTargetIndex={setSelectedTargetIndex}
            />
          </div>
          <div className="flex flex-1 justify-start">
            <div className="bg-gray-800 rounded targeting-system flex-shrink-0 min-w-[275px]">
              {selectedTargetIndex && <TargetingSystem 
                planets={planets} 
                selectedPlanetIndex={selectedPlanetIndex} 
                selectedTargetIndex={selectedTargetIndex}
              />}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-4">
        <img src="/assets/ship3.png" alt="Ship" />
      </div>

      <div className="flex mt-4 w-full overflow-x-auto ">
          <div className="flex bg-gray-800 rounded mx-auto">
            <PlanetGrid 
              planets={planets} 
              setPlanets={setPlanets}
              setSelectedPlanetIndex={setSelectedPlanetIndex} 
              selectedPlanetIndex={selectedPlanetIndex} 
            />
        </div>
      </div>
    </>
  );
};

export default galaxy;
