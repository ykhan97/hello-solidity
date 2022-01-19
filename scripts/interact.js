const API_KEY = process.env.API_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const PRIVATE_KEY = process.env.PRIVATE_KEY;


const { ethers } = require("hardhat");
const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");
console.log(JSON.stringify(contract.abi));


//provider - Alchemy
const alchemyProvider = new ethers.providers.AlchemyProvider(network="ropsten", API_KEY);

//signer - you
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

//contract instance
const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    const message = await helloWorldContract.message();
    console.log("The message is: " + message);

    console.log("Updating the message...");
    const tx = await helloWorldContract.update("Hello World (again)!");
    await tx.wait();

    const newMessage = await helloWorldContract.message();
    console.log("The new message is: " + newMessage);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });