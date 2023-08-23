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
            <li className="mb-2 font-bold">🚀 Battle other ships for yield by firing {UTILITY_TOKEN.emoji}{UTILITY_TOKEN.symbol} Tokens entirely on chain</li>
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
        <div className="mt-10 max-w-[800px] px-8 w-full">
            <h2 className="text-title text-3xl mb-4 text-center font-bold">Rules of the Galaxy</h2>
            <h3 className="text-xl font-bold mb-2 text-title">💰STAKING</h3>
            <ul className="list-disc mb-4">
                <li>Mint a Space Ship on a homeworld by choosing a staking service and depositing Eth.</li>
                <li>As your staked Eth generates rewards, they are wrapped into Ammo Tokens.</li>
                <li>Your Yield can be higher or lower depending on gameplay events, but your stake is never at risk</li>
                <li>These Ammo tokens can be used for gameplay, withdrawn, or unwrapped back to Eth.</li>
                <li>You can travel to other planet homeworlds, but beware foreign fighters who may attack you!</li>
            </ul>
            <h3 className="text-xl font-bold mb-2 text-title">{GOV_TOKEN.emoji}ALIEN BATTLE</h3>
            <ul className="list-disc mb-4">
                <li>Aliens are NPCs that randomly attack the planets. They may try and steal ammo.</li>
                <li>They differ in their reward value and the Amount of Ammo required to defeat them.</li>
                <li>Your Exp earned is equal to the amount of Ammo you fired to successfully defeat an alien.</li>
                <li>Each alien has a lifecyle before they respawn elsewhere. </li>
            </ul>
            <h3 className="text-xl font-bold mb-2 text-title">🚀SHIP BATTLE</h3>
            <ul className="list-disc">
                <li>You may attack or be attacked by foreign ships.</li>
                <li>To attack another ship you fire Ammo at them. If you are successful, you win double the amount that you fired from your target.</li>
                <li>If you miss, the ammo is distributed out to all stakers on the planet.</li>
                <li>Your odds of winning the battle are based on your ships relative Exp level.</li>
            </ul>
            <h2 className="text-2xl mt-10 text-center font-bold text-title">Galaxy Tokenomics</h2>
            <h3 className="text-xl text-title font-bold mb-2">{UTILITY_TOKEN.emoji}AMMO TOKEN</h3>
            <ul className="list-disc mb-4">
                <li>Ammo tokens are utility tokens.</li>
                <li>Ammo tokens represents your staked ETH's yield and can be redeemed for their underlying ETH at anytime. </li>
                <li>Each Ammo represents 1/(1 x 10^7) Eth, making the shot size easier to comprehend vs 0.0000001 Eth  </li>
                <li>Ammo can be withdrawn and traded or transferred.</li>
                <li>Ammo tokens that are shot at aliens in the game are burned and their underlying Eth will be added to protocol owned Treasury.
                   This liquidity will be put to use earning yield either by staking 
                  in a LP pool or staking in a validator service such as Rocket Pool.
                </li>
            </ul>
            <h3 className="text-xl font-bold mb-2 text-title">{GOV_TOKEN.emoji}GALAXY TOKEN</h3>
            <ul className="list-disc mb-4">
                <li>Galaxy tokens are the governance tokens for the {TITLE} game.</li>
                <li>Earn Galaxy Tokens by destroying Aliens.</li>
                <li>Galaxy Tokens will control the DAO and earn protocol fees</li>
                <li>Emissions rate of Galaxy tokens will be scheduled to decrease over time with a hard cap, subject to DAO votes.</li>
            </ul>
            <h3 className="text-xl font-bold mb-2 text-title">TOKEN ALLOCATION</h3>
            Galaxy Token Distribution:
              <ul className="list-disc ml-8 mb-2">
                <li>10% -{">"} Developers - locked for 1 year.</li>
                <li>85% -{">"} Players via normal gameplay mechanics.</li hidden>
                <li> ~5%  -{">"} Protocol owned LP pool.</li>
                <li>Cap not yet decided.</li>
              </ul>
            <ul className="mb-2">
                <li>The treasury funds will be used for activities like funding audits, marketing, rewarding community ect.</li>
            </ul>
            <h3 className="text-xl font-bold mb-2 text-title">SHIP NFT</h3>
        <img className="text-center self-center items-center" src="/assets/ship3.png" alt="Ship" />
            <ul className="list-disc mb-2">
                <li>Your ship NFT utilizes a new type of smart contract standard (EIP-6551) aka <Link href="https://tokenbound.org/" className="text-link">Token Bound NFTs </Link>  
                that allows the NFT itself to act as a smart wallet and OWN other tokens.</li>
                <li> This new functionality is leveraged to allow your ship to own its staked ETH, AMMO and GALAXY TOKENS and to interact with the smart contract on your behalf.</li>
                <li>Beware this means that if you sell your ship, you sell all your game inventory and characteristics.</li>
                <li> As owner of your ship you can always transfer tokens between your ship NFT and your wallet. However traits like Exp remain attributed to your wallet permanently.
                </li>
            </ul>
            <h2 className="text-2xl mt-10 text-center font-bold text-red-600">Risks</h2>
            <ul className="list-disc mb-4">
                <li className = "text-red-600">This Game is currently unaudited, you may lose what you put in. Once funds are available an audit will be completed.</li>
                <li>Barring a smart contract bug, your Eth stake and {GOV_TOKEN.symbol}s should be safe, but your ships Ammo is always at risk.</li>
                <li>If you sell your ship, all your coins and Exp will be transferred.</li>
                <li>If you buy a ship on a public market beware that the tokens held in the ship may be withdrawn right before the transfer is complete. 
                  The Exp points will remain associated to the ship. Markets are currently working on a solution to this new issue introduced by the new Token Bound account contracts.</li>
            </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
