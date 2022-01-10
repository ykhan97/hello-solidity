pragma solidity ^0.8.11;

contract HelloWorld {
  string myName = "Yusuf";
  
  // Add this function:
  function getMyName() public view returns(string memory) {
    return myName;
  }
  
  function changeMyName(string memory _newName) public {
    myName = _newName;
  }
}