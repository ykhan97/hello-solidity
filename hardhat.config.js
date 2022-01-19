//hardhat.config.js
//https://forum.openzeppelin.com/t/unable-to-verify-a-contract-on-hardhat/6759/9

require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
  solidity: "0.7.3",
  defaultNetwork: "ropsten",
  networks: {
    hardhat: {},
    ropsten: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  }
};
