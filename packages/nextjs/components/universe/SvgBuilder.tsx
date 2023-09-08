import React, { useState } from 'react';
import {
  useScaffoldContractRead,
} from "~~/hooks/scaffold-eth";

function SvgBuilder() {
  const [startingId, setStartingId] = useState(1);
  const [numShips, setNumShips] = useState(10);

  const ships = Array.from({ length: numShips }).map((_, index) => {
    const id = startingId + index;
    const { data: svgImage } = useScaffoldContractRead({
      contractName: "GalaxyTokens",
      functionName: "svg", 
      args: [id.toString()],
    });

    const svgDataUrl = `data:image/svg+xml,${encodeURIComponent(svgImage)}`;

    return (
      <img 
        key={id} 
        src={svgDataUrl} 
        alt={`SVG for ID ${id}`} 
        style={{ width: '200px', height: '200px', animation: "spin 20s linear infinite" }} 
        className="animate-spin duration-10000" 
      />
    );
  });

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
