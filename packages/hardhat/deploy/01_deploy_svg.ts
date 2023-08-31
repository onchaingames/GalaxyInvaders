import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployGalaxyTokens: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network goerli`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("SvgBuilder", {
    from: deployer,
    // Contract constructor arguments
    //args: [deployer],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  // Get the deployed contract
  const SvgBuilder = await hre.ethers.getContract("SvgBuilder", deployer);
  const tokens = await hre.ethers.getContract("GalaxyTokens", deployer);
  await tokens.setSvgAddress(SvgBuilder.address).then((tx) => tx.wait());
  console.log("Set svg contract address in token contract to: ", SvgBuilder.address);
  //await tokens.mint("0x5299Ac329356d10360FB22089748c505625aeEeE", "We are Minting you a Message!").then((tx) => tx.wait());;
  //const owner = await Messenger.ownerOf(1);
  //console.log("Owner of the first minted NFT is:", owner);
};

export default deployGalaxyTokens;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployGalaxyTokens.tags = ["YourContract"];
