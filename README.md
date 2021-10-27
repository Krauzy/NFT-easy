<div align="center">

 [![GitHub stars](https://img.shields.io/static/v1?label=&message=Ethereum&color=7b2cbf&logo=ethereum&logoColor=9d6bfa)](https://ethereum.org/en/)

 [![GitHub stars](https://img.shields.io/static/v1?label=Solidity&message=^0.8.0&color=blue&logo=solidity&logoColor=9e8576)](https://docs.soliditylang.org/en/v0.8.0/)
 [![GitHub stars](https://img.shields.io/static/v1?label=HardHat&message=^2.6.7&color=yellow)](https://hardhat.org/)
 [![GitHub stars](https://img.shields.io/static/v1?label=NFT%20contract&message=ERC-721&color=orange)](http://erc721.org/)
 [![GitHub stars](https://img.shields.io/static/v1?label=@openzeppelin&message=^4.3.2&color=blue)](https://openzeppelin.com/)
 
 <br/>
 
 # 💠 NFT ``easy``
 
 A simple and easy method to deploy a NFT
 
 <br/>
 
 [![Nyan Nyan Cat](https://i.imgur.com/MjeqeUP.gif)](https://i.imgur.com/8ZFoIJA.gif)
</div>

<br/>

# Instructions
 🔹 You must have an active app on [Alchemy](https://www.alchemy.com/)
 > Get and save the ``app key``
 
 🔹 You must have a crypto wallet, ``recommended`` [Metamask](https://metamask.io/)
 > Get and save the ``private key`` and ``public address key``
 
 🔹 Host front-end API ([ngrok](https://ngrok.com/), [vercel](https://vercel.com/), etc)
 > Get and save the ``URL`` api endpoint
 
 🔹 Change the Solidity Contract `baseURI` value with ``URL`` of API
 
 ```js
  function _baseURI() internal pure override returns (string memory) {
         return "<URL>/api/erc721/";
  }
 ```
 
 🔹 Compile with HardHat to generate the artifacts
 
 ```sh
 npx hardhat compile
 ```
 
 ```sh
  > artifacts/
       > @openzeppelin/contracts/
       > build-info/
       > contracts/Contract.sol
 ```
 
 🔹 Change the `hardhat.config.js` value KEYs to Alchemy and Metamask keys
 
 ```js
  require("@nomiclabs/hardhat-ethers");
  module.exports = {
    solidity: "0.8.0",
    defaultNetwork: "ropsten",
    networks: {
      hardhat: {},
      ropsten: {
        url: <ALCHEMY_KEY>,
        accounts: [`0x${<METAMASK_PRIVATE_KEY>}`]
      }
    }
  };
 ```
 
 🔹 Run `npm deploy` and see the magic happen 🌟
 
 <br/>
