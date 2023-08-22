import Link from "next/link";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import { TITLE, API_URL, UTILITY_TOKEN, GOV_TOKEN } from '~~/constants';

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-10">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-title text-6xl font-bold">{TITLE}</span>
          </h1>
          <p className="text-center italic">
          A Defi Game | Battle For Staked Eth Yield
          </p>
          <ul className="list-disc mt-10">
            <li className="mb-2 font-bold">💰 Stake stEth to Mint a spaceship NFT and earn boosted yield up to <span className = "text-purple-500">35%</span> in {UTILITY_TOKEN.emoji}{UTILITY_TOKEN.symbol}</li> 
            <li className="mb-2 font-bold">🔫 Earn Exp, Battle other ships for yield by firing {UTILITY_TOKEN.emoji}{UTILITY_TOKEN.symbol} Tokens entirely on chain</li>
            <li className="mb-2 font-bold">👾 Destroy Aliens and earn {GOV_TOKEN.emoji}{GOV_TOKEN.title} Gov Tokens which can be staked to earn fees</li>
          </ul>
        </div>
        <div className="flex flex-col bg-base-200 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
          <Link href="/galaxy" passHref className="text-purple-500 ">
          <h2 className="text-3xl mb-4 text-center font-bold ">
              Enter the Galaxy
          </h2>
            <span className="text-6xl font-bold">👾</span>
            </Link>{" "}
        </div>
        <div className="mt-10 w-[800px] ">
            <h2 className="text-title text-3xl mb-4 text-center font-bold">Rules of the Galaxy</h2>
            <h3 className="text-xl font-bold mb-2 text-title">STAKING</h3>
            <ul className="list-disc mb-4">
                <li>Mint a Space Ship on a homeworld by choosing a staking service and depositing Eth.</li>
                <li>As your staked Eth generates rewards, they are wrapped into Ammo Tokens.</li>
                <li>These Ammo tokens can be used for gameplay, withdrawn, or unwrapped back to Eth.</li>
                <li>You can travel to other planet homeworlds, but beware foreign fighters who may attack you!</li>
            </ul>
            <h3 className="text-xl font-bold mb-2 text-title">ALIEN BATTLE</h3>
            <ul className="list-disc mb-4">
                <li>Aliens are NPCs that randomly attack the planets. They try and steal ammo.</li>
                <li>Under their stats is how much Ammo they require to be destroyed as well as how much Exp and Gov Tokens you will win for defeating them.</li>
                <li>They also have a time limit before they respawn elsewhere. Gaining Exp helps you attack and defend attacks from foreign ships.</li>
            </ul>
            <h3 className="text-xl font-bold mb-2 text-title">SHIP BATTLE</h3>
            <ul className="list-disc">
                <li>You may attack or be attacked by foreign ships.</li>
                <li>To attack another ship you fire Ammo at them. If you are successful, you win double the amount that you fired from your target.</li>
                <li>If you miss, the ammo is distributed out to all stakers on the planet.</li>
                <li>Your odds of hitting are based on your Exp level relative to theirs.</li>
            </ul>
            <h2 className="text-2xl mt-10 text-center font-bold text-title">Galaxy Tokenomics</h2>
            <h3 className="text-xl text-title font-bold mb-2">AMMO TOKEN</h3>
            <ul className="list-disc mb-4">
                <li>Ammo tokens are utility tokens.</li>
                <li>Ammo represent players staked ETH yield and can be redeemed for their underlying ETH at anytime. </li>
                <li>Ammo can be withdrawn and traded or transferred.</li>
                <li>Ammo tokens that are shot at aliens in the game are burned and their underlying Eth will be added to protocol owned Treasury.
                   This liquidity will be put to use earning yield either by staking 
                  in a LP pool or staking in a validator service such as Rocket Pool.
                </li>
            </ul>
            <h3 className="text-xl font-bold mb-2 text-title">GALAXY TOKEN</h3>
            <ul className="list-disc mb-4">
                <li>Galaxy tokens are the governance tokens for the {TITLE} game.</li>
                <li>Earn Galaxy Tokens by destroying Aliens.</li>
                <li>Galaxy Tokens will control the DAO and earn protocol fees</li>
            </ul>
            <h3 className="text-xl font-bold mb-2 text-title">TOKEN ALLOCATION</h3>
            Galaxy Token Distribution:
              <ul className="list-disc ml-8 mb-2">
                <li>10% -{">"} Developers - locked for 1 year.</li>
                <li>85% -{">"} Players via normal gameplay mechanics.</li>
                <li> ~5%  -{">"} Protocol owned LP pool.</li>
                <li> 0%  -{">"} VC's & Insiders :)</li>
              </ul>
            <ul className="mb-2">
                <li>The treasury funds will be used for activities like funding audits, marketing, rewarding community ect.</li>
                <li>Emissions rate of Galaxy tokens will be scheduled to decrease over time with a hard cap, subject to DAO votes.</li>
            </ul>
            <h3 className="text-xl font-bold mb-2 text-title">SHIP NFT</h3>
        <img src="/assets/ship3.png" alt="Ship" />
            <ul className="list-disc mb-2">
                <li>Your ship NFT utilizes a new type of smart contract standard (EIP-6551) aka <Link href="https://tokenbound.org/" className="text-link">Token Bound NFTs</Link> that allows the NFT itself to act as a smart wallet and OWN
                  other tokens. This new functionality is leveraged to allow your ship to own its staked ETH, AMMO and GALAXY TOKENS and to interact with the smart contract on your behalf.
                  Beware this means that if you sell your ship, you sell all your game inventory and charactieristics. As owner of your ship you can always transfer tokens between your 
                  ship NFT and your wallet. However traits like Exp remain attributed to your wallet permanently.
                </li>
            </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
