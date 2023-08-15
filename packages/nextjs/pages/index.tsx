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
            <li className="mb-2 font-bold">💰 Stake Eth to Mint a spaceship NFT on a LP Planet and earn AMMO rewards</li> 
            <li className="mb-2 font-bold">👾 Fire AMMO to save the Galaxy from aliens and earn GALX Tokens and Experience</li>
            <li className="mb-2 font-bold">🔫 Fly to other LP Planets and steal AMMO from less Experienced pilots</li>
          </ul>
        </div>

        <div className="flex-grow bg-base-200 w-full mt-5 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-200 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
                <Link href="/galaxy" passHref className="text-3xl text-green-600 ">
                  <span className="text-6xl font-bold">👾</span>
              <p>
                  Enter the Galaxy
              </p>
                </Link>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
