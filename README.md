# Color-NFT
An attempt to understand ERC-721 tokens by building one.

## Tech stack
1. [Ganche](https://trufflesuite.com/ganache/) - Ethereum testnet. Ganche creates a block chain network locally with some dummy accounts with some ETH (to spend gas fees for transactions and to mint tokens)
2. [Truffle](https://trufflesuite.com/truffle/) - To compile solidity smart contracts, test the smart contracts and deploy them to the local blockchain network
3. [Chai.js](https://www.chaijs.com/) - JS library to test assertions
4. [Web3.js](https://web3js.readthedocs.io/) - JS library to let the smart contract interacts with the user's wallet on the browser
5. [Metamask](https://metamask.io/) ([Brave extension](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn)) - A crypto wallet to hold Ethereum tokens
6. [React.js](https://reactjs.org/) - A Js fraeowrk to build front-end applications.

## Requirements
1. node.js >= 8.9.4
## Notes

- A Dapp is a smart contract (deployed on some block chain) combined with a frontend. The idfference between Dapp and a regualr app is the backend (decentralised in the case of Dapp)
- NFTs are created with the help of smart contracts
- Smart contract that power NFTs follow the ERC-721 standard. Fungible Tokens follow the ERC-20 standard
- The ERC-721 standard is basically a specification that says how the smart contract is supposed to work. What functions need to be implemented and what do they return.
    - If we follow this standard, our smart contract will be compatible with majority of the wallets. exchanges, marketplaces, etc out there