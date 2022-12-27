//SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

contract DummyOracle {
    int256 value;

    constructor(int256 _value) {
        set(_value);
    }

    function set(int256 _value) public {
        value = _value;
    }

    function latestAnswer() public view returns (int256) {
        return value;
    }
}