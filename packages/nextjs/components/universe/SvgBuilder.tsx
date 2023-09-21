import React, { useState } from 'react';
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";
import { Spinner } from "~~/components/Spinner";

function SvgBuilder() {
    const [startingId, setStartingId] = useState(1);
    const [numShips, setNumShips] = useState(10);

    const ships = Array.from({ length: numShips }).map((_, index) => {
        const id = startingId + index;
        const { data: svgImage, error } = useScaffoldContractRead({
            contractName: "GalaxyTokens",
            functionName: "svg",
            args: [id.toString()],
        });

        const svgDataUrl = `data:image/svg+xml,${encodeURIComponent(svgImage)}`;

        if (!svgImage && !error) {
            // No data and no error means we're probably loading.
            return  <Spinner width="35px" height="35px" />
        }

        return (
            <div key={id} className="relative m-4 overflow-visible">
                {/* Glowing background SVG */}
                <img
                    src={svgDataUrl}
                    alt={`SVG for ID ${id}`}
                    className="z-10 relative "
                    style={{ width: '64px', height: '64px' }}
                    onLoad={(e) => e.target.style.background = 'none'}
                />
            </div>
        );
    });

    return (
        <div className="flex flex-col items-center">
            <button
                className="mb-4 p-2 bg-blue-500 text-white rounded"
                onClick={() => setStartingId(prevId => prevId + 10)}
            >
                Mint 10 Ships
            </button>
            <div className="flex justify-between items-center flex-wrap">
                {ships}
            </div>
        </div>
    );
}

export default SvgBuilder;
