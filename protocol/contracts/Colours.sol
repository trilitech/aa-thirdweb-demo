// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

contract Colours {
    mapping(address => string) public color;

    event ColorUpdated(address indexed user, string newColor);

    constructor() {}

    function changeColor(string memory newColor) public {
        require(bytes(newColor).length > 0, "empty color");
        color[msg.sender] = newColor;
        emit ColorUpdated(msg.sender, newColor);
    }
}
