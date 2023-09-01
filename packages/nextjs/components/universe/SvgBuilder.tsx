import React from 'react';
import {
  useScaffoldContractRead,
} from "~~/hooks/scaffold-eth";

function SvgBuilder({ id }) {
    const { data: svgImage } = useScaffoldContractRead({
      contractName: "GalaxyTokens",
      functionName: "svg", 
      args: [id.toString()],
      //args: ["5"],
    });
  
    // Convert the SVG string to a Data URL
    const svgDataUrl = `data:image/svg+xml,${encodeURIComponent(svgImage)}`;
  
    return <img src={svgDataUrl} alt={`SVG for ID ${id}`} style={{ width: '200px', height: '200px' }} />;
}

export default SvgBuilder;
