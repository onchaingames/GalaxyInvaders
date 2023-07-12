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
    <h2 className="text-2xl font-bold my-4">Ship Stats</h2>
    <table className="table-auto">
      <tbody>
        {stats.map((stat, index) => (
          <tr key={index} className={index % 2 ? 'bg-gray-200' : ''}>
            <td className="border px-4 py-2">{stat.name}</td>
            <td className="border px-4 py-2">{stat.value}</td>
            <td className="border px-4 py-2">{stat.deposit ? <button className="btn btn-primary">Deposit</button> : ''}</td>
            <td className="border px-4 py-2">{stat.withdraw ? <button className="btn btn-primary">Withdraw</button> : ''}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ShipStats;
