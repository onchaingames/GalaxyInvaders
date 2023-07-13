import type { NextPage } from "next";
import { SetStateAction, useState } from 'react';
import { MetaHeader } from "~~/components/MetaHeader";
import PlanetGrid from '~~/components/universe/PlanetGrid';
import PlanetSurface from '~~/components/universe/PlanetSurface';
import ShipStats from '~~/components/universe/ShipStats';
import TargetingSystem from '~~/components/universe/TargetingSystem';

const stats = [
  { name: 'Homeworld (LP Type)', value: 'FraxEth/Eth', withdraw: true },
  { name: 'Ammo (CRV)', value: 6, deposit: true, withdraw: true },
  { name: 'Experience (veCRV)', value: '600' },
  { name: 'Victory Points (Gov tokens)', value: 4330, withdraw: true },
];

const ExampleUI: NextPage = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [selectedTarget, setSelectedTarget] = useState(null);

  const handlePlanetClick = (planet: SetStateAction<null>) => {
    setSelectedPlanet(planet);
    console.log(selectedPlanet); // Add this line
  };

  const handleBackClick = () => {
    setSelectedPlanet(null);
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
        <div className="planets mb-4 bg-black flex">
          <PlanetSurface planet={selectedPlanet} onBackClick={handleBackClick} onTargetSelect={handleTargetSelect} />
          <TargetingSystem target={selectedTarget} />
        </div>
      ) : (
        <div className="planets mb-40 bg-black">
          <PlanetGrid onPlanetClick={handlePlanetClick} />
        </div>
      )}
      <div className="planets mb-40 bg-black">
        <ShipStats stats={stats} />
      </div>
    </>
  );
};

export default ExampleUI;
