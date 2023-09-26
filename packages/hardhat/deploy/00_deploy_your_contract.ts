import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
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

  await deploy("GalaxyTokens", {
    from: deployer,
    // Contract constructor arguments
    args: [deployer],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  // Get the deployed contract
  // const GalaxyTokens = await hre.ethers.getContract("GalaxyTokens", deployer);
  // ABI for the ERC6551Registry contract
  const ERC6551RegistryABI = [
    {"inputs":[],"name":"InitializationFailed","type":"error"},
    {"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"address","name":"implementation","type":"address"},{"indexed":false,"internalType":"uint256","name":"chainId","type":"uint256"},{"indexed":false,"internalType":"address","name":"tokenContract","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"salt","type":"uint256"}],"name":"AccountCreated","type":"event"},
    {"inputs":[{"internalType":"address","name":"implementation","type":"address"},{"internalType":"uint256","name":"chainId","type":"uint256"},{"internalType":"address","name":"tokenContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"}],"name":"account","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
    {"inputs":[{"internalType":"address","name":"implementation","type":"address"},{"internalType":"uint256","name":"chainId","type":"uint256"},{"internalType":"address","name":"tokenContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"bytes","name":"initData","type":"bytes"}],"name":"createAccount","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"}
  ]; 

  // Create a contract instance using the ABI
  const erc6551Registry = new hre.ethers.Contract("0x02101dfB77FDE026414827Fdc604ddAF224F0921", ERC6551RegistryABI, hre.ethers.provider);
  console.log("Registry: ", erc6551Registry.address);
  // Replace these dummy values with your actual parameters
  const implementation = "0x2d25602551487c3f3354dd80d76d54383a243358";
  const chainId = 1; // Ethereum Mainnet; adjust if you're on a different chain
  const tokenContract = "0x1c410e4c1701f88A2A504f4506251624e8166419";
  const tokenId = 40; // The specific tokenId you're interested in
  const salt = 0; // Your specific salt value

  const result = await erc6551Registry.account(implementation, chainId, tokenContract, tokenId, salt);
  console.log("Account address:", result);

};

export default deployYourContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployYourContract.tags = ["GalaxyTokens"];
