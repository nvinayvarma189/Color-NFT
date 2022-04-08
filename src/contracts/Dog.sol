pragma solidity 0.5.0;

import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721Mintable.sol";

contract Dog is ERC721Full {
    constructor() ERC721Full("Dog", "DOG") public{ 
        /* this function runs whenever the smart contract is deployed to blockchainf or the first time */
    }
}