import type { NextPage } from "next";
import { SetStateAction, useState, useEffect } from 'react';
import { MetaHeader } from "~~/components/MetaHeader";
import PlanetGrid from '~~/components/universe/PlanetGrid';
import PlanetSurface from '~~/components/universe/PlanetSurface';
import ShipStats from '~~/components/universe/ShipStats';
import TargetingSystem from '~~/components/universe/TargetingSystem';
import  planets  from '~~/components/universe/PlanetGrid';


const stats = [
  { name: 'Homeworld', value: 'FRAX', deposit:true, withdraw: true },
  { name: 'AMMO', value: 6, deposit: true, withdraw: true },
  { name: 'Experience', value: '600' },
  { name: 'GALX', value: 4330, withdraw: true },
];

// Define the Planet type
interface Planet {
  name: string;
  desc: string;
  // Add other properties as needed
}

const galaxy: NextPage = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(planets[0]);
  const [selectedTarget, setSelectedTarget] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Use useEffect to set a default planet on component mount
  const handlePlanetClick = (planet: Planet) => {
    setSelectedPlanet(planet);
  };

  const handleTargetSelect = (target: any) => {
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
      <div className="planets mt-10 mb-4 bg-black grid grid-cols-3 items-baseline place-content-center gap-10">
          
          <div className="planetTitle col-start-2 text-center ">
            <h2>{selectedPlanet?.name}</h2>
            <p>{selectedPlanet?.desc}</p>
          </div>
          <div className="backButton col-start-1 justify-self-end">
          <ShipStats stats={stats}  />
          </div>
          <PlanetSurface planet={selectedPlanet} onTargetSelect={handleTargetSelect} />
          <TargetingSystem target={selectedTarget} />
        </div>
        <div className="flex flex-col items-center">
        <img src="/assets/ship3.png" alt="Ship" />
        </div>
        <PlanetGrid onPlanetClick={handlePlanetClick} />
    </>
  );
};

export default galaxy;
