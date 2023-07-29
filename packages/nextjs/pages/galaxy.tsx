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
  const [showModal, setShowModal] = useState(false);

  const handlePlanetClick = (planet: SetStateAction<null>) => {
    setSelectedPlanet(planet);
  };

  const handleTargetSelect = (target: any) => {
    setSelectedTarget(target);
  };

  const handleDepositWithdrawClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <MetaHeader
        title="Planet Victory"
        description="Battle for yield and Gov tokens"
      >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
      </MetaHeader>
      <div className="flex flex-col items-center">
        <PlanetSurface planet={selectedPlanet} onTargetSelect={handleTargetSelect} />
        <ShipStats stats={stats}  />
        <TargetingSystem target={selectedTarget} />
        <PlanetGrid onPlanetClick={handlePlanetClick} />
      </div>
      {showModal && <DepositWithdrawModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default galaxy;
