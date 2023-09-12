import React, { useState } from 'react';
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

function SvgBuilder() {
  const [startingId, setStartingId] = useState(1);
  const [numShips, setNumShips] = useState(10);

  const hullHeight = 32 + 3;

  const ships = Array.from({ length: numShips }).map((_, index) => {
    const id = startingId + index;
    const { data: svgImage } = useScaffoldContractRead({
      contractName: "GalaxyTokens",
      functionName: "svg",
      args: [id.toString()],
    });

    const svgDataUrl = `data:image/svg+xml,${encodeURIComponent(svgImage)}`;
    const pretendAmmo = "25%";  // Sample percentage, adjust as needed

    return (
      <div key={id} className="relative m-4 overflow-visible">
        {/* Glowing background SVG */}
        <svg className="absolute top-0 left-0 animate-pulse w-full h-full" viewBox="0 0 340 340">
          <defs>
            <radialGradient id="glowGradient" cx="50%" cy="50%" r="35%">
              <stop offset="0%" stopColor="white" />
              <stop offset="100%" stopColor="black" />
            </radialGradient>
          </defs>
        </svg>
        {/* Hull of the ship */}
        <svg className="absolute top-0 left-0 w-full h-full z-20" viewBox="0 0 340 340">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="100%" x2="0%" y2={pretendAmmo}>
              <stop offset="0%" stopColor="white" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
            </linearGradient>
          </defs>
        </svg>
        {/* Ship SVG */}
        <img
          src={svgDataUrl}
          alt={`SVG for ID ${id}`}
          className="z-10 relative "
          style={{ width: '30px', height: '30px' }}
        />
      </div>
    );
  });
          //<circle cx="170" cy="170" r="250" fill="url(#glowGradient)" />

          //<rect x="160" y="10" width="21" height={hullHeight * 10} fill="url(#gradient)" />
  return (
    <div className="flex flex-col items-center">
      <button
        className="mb-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => setStartingId(prevId => prevId + 10)}
      >
        Next 10 Ships
      </button>
      <div className="flex justify-between items-center flex-wrap">
        {ships}
      </div>
    </div>
  );
}

export default SvgBuilder;
