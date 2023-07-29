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
    !showModal ? setShowModal(true) :setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold my-4 hidden">Ship Stats</h2>
      <table className="table-auto mt-5 border border-slate-500 border-spacing-10 space-x-4">
        <tbody>
          {stats.map((stat, index) => (
            <>
              <tr key={index} className="">
                <td className="border px-4 border-slate-700">{stat.name}</td>
                <td className="border px-4 border-slate-700">{stat.value}</td>
              </tr>
              <tr>
                <td className="">{stat.deposit ? <button className="px-4 border-slate-700 bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={handleButtonClick}>Deposit</button> : ''}</td>
                <td className="">{stat.withdraw ? <button className="px-4 border-slate-700 bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={handleButtonClick}>Withdraw</button> : ''}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>

      <dialog id="my_modal" className={`modal ${showModal ? 'modal-open' : ''}`}>
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleButtonClick}>✕</button>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </form>
      </dialog>
    </div>
  );
};

export default ShipStats;
