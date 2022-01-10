require("dotenv").config();

require("@nomiclabs/hardhat-ethers");


const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",
  defaultNetwork: "ropsten",
  networks: {
    hardhat: {},
    ropsten: {
      url: API_URL,
      accounts: [PRIVATE_KEY],
    }
  },
}
