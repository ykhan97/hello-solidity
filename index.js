const Web3 = require('web3');
const fs = require('fs'); // Built-in dependency for file streaming.
const solc = require('solc'); // Our Solidity compiler

const content = fs.readFileSync('HelloWorld.sol', 'utf-8'); // Read the file...

// Format the input for solc compiler:
const input = {
  language: 'Solidity',
  sources: {
    'HelloWorld.sol' : {
      content, // The imported content
    }
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*']
      }
    }
  }
}; 

const output = JSON.parse(solc.compile(JSON.stringify(input)));

//set up a provider
const provider = new Web3.providers.HttpProvider("http://localhost:8545");

//connect to the network and save it as "web3"
const web3 = new Web3(provider);

//Get the compiled contract's abi (interface)
const { HelloWorld } = output.contracts["HelloWorld.sol"]
const { abi, evm } = HelloWorld

//Initialize a new contract onject:
const contract = new web3.eth.Contract(abi);

console.log(contract);

const deployAndRunContract = async () => {
  //Get address of Ganache fake wallet:
  const addresses = await web3.eth.getAccounts();

  //Get current price of gas
  const gasPrice = await web3.eth.getGasPrice();
}