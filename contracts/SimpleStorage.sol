//SPDX-License-Identifier: MIT

pragma solidity ^0.8.6;

import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

contract SimpleStorage is Ownable {
    uint256 number;

    function retrieve() public view returns (uint256) {
        return number;
    }

    function store(uint256 _number) public onlyOwner {
        number = _number;
        console.log(number);
    }
}
