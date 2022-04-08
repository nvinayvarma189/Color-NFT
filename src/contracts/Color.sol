pragma solidity 0.5.0;

import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721Mintable.sol";

contract Color is ERC721Full {

    string[] public colors;
    mapping(string => bool) _colorExists;

    constructor() ERC721Full("Color", "COLOR") public{ 
        /* this function runs whenever the smart contract is deployed to blockchainf or the first time */
    }

    function mint(string memory _color) public {

        require(!_colorExists[_color]);
        uint _colorId = colors.push(_color);
        _mint(msg.sender, _colorId); // sender is the person who has called this function
        _colorExists[_color] = true;
    }
}