import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon, RocketLaunchIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-10">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-green-600 text-6xl font-bold">Galaxy Invaders</span>
          </h1>
          <p className="text-center italic">
          Battle to save the Galaxy
          </p>
          <ul className="list-none mt-10">
            <li className="mb-2 font-bold">💰 Stake Eth to Mint a spaceship NFT and earn up to 35% 🖊Ammo rewards</li> 
            <li className="mb-2 font-bold">👾 Destroy aliens and earn 👾Galaxy Tokens and power up your Ship</li>
            <li className="mb-2 font-bold">🔫 Fly to other LP Planets and steal 🖊Ammo from other Ships</li>
          </ul>
        </div>
        <div className="flex flex-col bg-base-200 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
            <Link href="/galaxy" passHref className="text-3xl text-green-600 ">
              <span className="text-6xl font-bold">👾</span>
          <p>
              Enter the Galaxy
          </p>
            </Link>{" "}
            <span className="block text-2xl mb-2">Rules of the Galaxy</span>
        </div>
        <ul className="list-none mt-10">
          <li className="mb-2 font-bold">Staking - Choose a homeworld and mint a Shace Ship by dpositing Eth and choosing a staking service.</li> 
          <li className="mb-2 font-bold">Ships from the same homeworld cannot attack each other.
          As your staked Eth generates rewards, they are wrapped into Ammo Tokens. These Ammo tokens can be used for gameplay or withdrawn and sold or unwrapped back to Eth.Battle</li>
          <li className="mb-2 font-bold">�Destroy aliens and earn 👾Galaxy Tokens and power up your Ship</li>
          <li className="mb-2 font-bold">🔫 Fly to other LP Planets and steal 🖊Ammo from other Ships</li>
        </ul>
      </div>
    </>
  );
};

export default Home;
