import React from 'react';
import {
  useScaffoldContractRead,
} from "~~/hooks/scaffold-eth";

function SvgBuilder({ numShips = 10 }) {
  const ships = Array.from({ length: numShips }).map((_, index) => {
    const id = index + 1;
    const { data: svgImage } = useScaffoldContractRead({
      contractName: "GalaxyTokens",
      functionName: "svg", 
      args: [id.toString()],
    });

    // Convert the SVG string to a Data URL
    const svgDataUrl = `data:image/svg+xml,${encodeURIComponent(svgImage)}`;

    //return <img src={svgDataUrl} alt={`SVG for ID ${id}`} style={{ width: '200px', height: '200px' }} />;
    //return <img key={id} src={svgDataUrl} alt={`SVG for ID ${id}`} style={{ width: '200px', height: '200px', animation: "spin 20s linear infinite"  }} className="animate-spin duration-10000" />;
    return <img key={id} src={svgDataUrl} alt={`SVG for ID ${id}`} style={{ animation: "spin 20s linear infinite"  }} className="animate-spin duration-10000" />;
  });

  return (
    <div className="flex justify-between items-center">
      {ships}
    </div>
  );
}

export default SvgBuilder;
