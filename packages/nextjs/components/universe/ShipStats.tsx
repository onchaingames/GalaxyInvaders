import React, { useState } from 'react';

interface Stat {
  name: string;
  value: string | number;
  tooltip?: string;
  deposit?: boolean;
  withdraw?: boolean;
}

interface ShipStatsProps {
  stats: Stat[];
}

const ShipStats: React.FC<ShipStatsProps> = () => {
  const [showModal, setShowModal] = useState(false);
  const stats = [
    { name: 'Homeworld', value: 'Frax', tooltip: 'Your home planet. You cannot be attacked here for your first hour.'},
    { name: 'On World', value: 'Lido', tooltip: 'The current world you are on.'},
    { name: '🖊 AMMO', value: '1500 ($569)', tooltip: 'Your ETH generates Ammo at a rate 1000x your ETH APY. Use Ammo to defeat aliens or withdraw to your wallet.'},
    { name: 'APR', value: '35%', tooltip: 'Annual Percentage Rate for Ammo generation.'},
    { name: 'EXP', value: '600', tooltip: 'Your experience level. Gain experience by defeating aliens and other players.' },
    { name: '👾 GALX', value: '35 ($3400)', tooltip: 'Galaxy Tokens you can win. Stake to vote on game proposals and earn protocol fees.'},
  ];

  const handleButtonClick = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <div className="bg-gray-800 rounded p-2">
        <h2 className="text-center text-white text-2xl">Ship Stats</h2>
        <table className="table-auto space-x-4">
          <tbody>
            {stats.map((stat, index) => (
              <tr key={index}>
                <td className="mx-4">
                  <span className="tooltip tooltip-info" data-tip={stat.tooltip}>
                    {stat.name}
                  </span>
                </td>
                <td className="text-white mx-4 p-2">{stat.value}</td>
              </tr>
            ))}
            <tr>
              <td className="mx-4 p-2">
                <button onClick={handleButtonClick} className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded bottom-0 tooltip tooltip-info" data-tip="Deposit Ammo to strengthen your ship and prepare for battles.">
                  Deposit
                </button>
              </td>
              <td>
                <button onClick={handleButtonClick} className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded bottom-0 tooltip tooltip-info" data-tip="Withdraw Ammo to redeem for underlying ETH or use in other strategies.">
                  Withdraw
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <dialog id="my_modal" className={`modal flex items-center justify-center bg-transparent ${showModal ? 'modal-open' : ''}`} style={{ padding: 0, border: 'none' }}>
        <form method="dialog" className="modal-box bg-gray-800 p-4 rounded-lg flex flex-col items-center" style={{ width: 'auto', maxWidth: '90vw' }}>
          <div className="flex justify-between items-center w-full mb-4">
            <label htmlFor="amount" className="text-white font-bold">Amount</label>
            <input type="text" id="amount" name="amount" className="border rounded px-2 py-1 w-20" />
          </div>
          <div className="flex justify-between items-center w-full mb-4">
            <label htmlFor="amount" className="text-white font-bold">Type</label>
            <input type="text" defaultValue="Ammo" id="amount" name="amount" className="border rounded px-2 py-1 w-20" />
          </div>
          <div className="flex justify-between items-center w-full">
            <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={handleButtonClick}>Cancel</button>
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 ml-2 rounded" onClick={handleButtonClick}>Confirm</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default ShipStats;
