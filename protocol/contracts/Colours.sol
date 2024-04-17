// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

contract Colours {
    mapping(address => string) public colour;

    event ColourUpdated(address indexed user, string newColour);

    constructor() {}

    function changeColour(string memory newColour) public {
        require(bytes(newColour).length > 0, "empty colour");
        colour[msg.sender] = newColour;
        emit ColourUpdated(msg.sender, newColour);
    }
}
