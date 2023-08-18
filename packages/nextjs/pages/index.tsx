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
        </div>
        <div className="px-5 mt-10">
            <h2 className="text-2xl mb-4 font-bold">Rules of the Galaxy</h2>
            <h3 className="text-xl mb-2">STAKING</h3>
            <ul className="list-none mb-4">
                <li>Mint a Space Ship on a homeworld by choosing a staking service and depositing Eth.</li>
                <li>As your staked Eth generates rewards, they are wrapped into Ammo Tokens.</li>
                <li>These Ammo tokens can be used for gameplay, withdrawn, or unwrapped back to Eth.</li>
                <li>You can travel to other planet homeworlds, but beware foreign fighters who may attack you!</li>
            </ul>
            <h3 className="text-xl mb-2">ALIEN BATTLE</h3>
            <ul className="list-none mb-4">
                <li>Aliens are NPCs that randomly attack the planets. They try and steal ammo.</li>
                <li>Under their stats is how much Ammo they require to be destroyed as well as how much Exp and Gov Tokens you will win for defeating them.</li>
                <li>They also have a time limit before they respawn elsewhere. Gaining Exp helps you attack and defend attacks from foreign ships.</li>
            </ul>
            <h3 className="text-xl mb-2">SHIP BATTLE</h3>
            <ul className="list-none">
                <li>You may attack or be attacked by foreign ships.</li>
                <li>To attack another ship you fire Ammo at them. If you are successful, you win double the amount that you fired from your target.</li>
                <li>If you miss, the ammo is distributed out to all stakers on the planet.</li>
                <li>Your odds of hitting are based on your Exp level relative to theirs.</li>
            </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
