require("dotenv").config();
const { ethers } = require("ethers");

const contract = require("../artifacts/contracts/CatsBase.sol/CatsBase.json");
const contractInterface = contract.abi;

// https://docs.ethers.io/v5/api/providers
const provider = ethers.getDefaultProvider("ropsten", {
  alchemy: process.env.ALCHEMY_KEY,
});

// https://docs.ethers.io/v5/api/signer/#Wallet
const wallet = new ethers.Wallet(process.env.METAMASK_KEY, provider);

//https://docs.ethers.io/v5/api/contract/contract
const catsBase = new ethers.Contract(
  $YOUR_NFT_ADDRESS$,
  contractInterface,
  wallet
);

const main = () => {
  catsBase
    .mint(process.env.METAMASK_ADDRESS)
    .then((transaction) => console.log(transaction))
    .catch((e) => console.log("something went wrong", e));
};

main();