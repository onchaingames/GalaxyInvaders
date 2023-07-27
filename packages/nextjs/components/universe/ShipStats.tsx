// ShipStats.tsx
import React from 'react';

interface Stat {
  name: string;
  value: string | number;
  deposit?: boolean;
  withdraw?: boolean;
}

interface ShipStatsProps {
  stats: Stat[];
}

const ShipStats: React.FC<ShipStatsProps> = ({ stats }) => (
  <div className="flex flex-col items-center">
    <img src="/assets/ship3.png" alt="Ship" />
    <h2 className="text-2xl font-bold my-4 hidden">Ship Stats</h2>
    <table className="table-auto mt-5 border border-slate-500 border-spacing-10 space-x-4">
      <tbody>
        {stats.map((stat, index) => (
          <tr key={index} className="">
            <td className="border px-4 border-slate-700">{stat.name}</td>
            <td className="border px-4 border-slate-700">{stat.value}</td>
            <td className="border px-4 border-slate-700">{stat.deposit ? <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Deposit</button> : ''}</td>
            <td className="border py-2 px-4 border-slate-700">{stat.withdraw ? <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Withdraw</button> : ''}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ShipStats;
