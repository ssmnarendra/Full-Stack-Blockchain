pragma solidity ^0.8.0;

contract RemoveFromArray {
    uint[] myArray = [1, 2, 3, 4, 5];

    function removeElement(uint elementIndex) public returns (uint[] memory) {
        for (uint i = elementIndex; i < myArray.length - 1; i++) {
            myArray[i] = myArray[i + 1];
        }
        myArray.pop();
        return myArray;
    }
}