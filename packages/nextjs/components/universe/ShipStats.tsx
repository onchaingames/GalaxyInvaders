import React, { useState } from 'react';

interface Stat {
  name: string;
  value: string | number;
  deposit?: boolean;
  withdraw?: boolean;
}

interface ShipStatsProps {
  stats: Stat[];
}

const ShipStats: React.FC<ShipStatsProps> = ({ stats }) => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(!showModal);
  };

  return (
    <div >
      <h2 className="text-2xl font-bold my-4 hidden">Ship Stats</h2>
      <table className="table-auto mt-5 border border-slate-500 border-spacing-10 space-x-4">
        <tbody>
          {stats.map((stat, index) => (
            <>
              <tr key={index}>
                <td className="border px-4 border-slate-700">{stat.name}</td>
                <td className="border px-4 border-slate-700">{stat.value}</td>
              </tr>
              <tr>
                <td className="">{stat.deposit ? <button className="border-slate-700 bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={handleButtonClick}>Deposit</button> : ''}</td>
                <td className="">{stat.withdraw ? <button className="border-slate-700 bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={handleButtonClick}>Withdraw</button> : ''}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>

      <dialog id="my_modal" className={`modal flex items-center justify-center bg-transparent ${showModal ? 'modal-open' : ''}`} style={{padding: 0, border: 'none'}}>
          <form method="dialog" className="modal-box bg-gray-800 p-4 rounded-lg flex flex-col items-center" style={{width: 'auto', maxWidth: '90vw'}}>
              <div className="flex justify-between items-center w-full mb-4">
                  <label htmlFor="amount" className="text-white font-bold">Amount</label>
                  <input type="text" id="amount" name="amount" className="border rounded px-2 py-1 w-20" />
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
