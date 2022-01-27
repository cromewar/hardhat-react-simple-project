
import './App.css';

import { useState } from "react";

// Import ethers
import { ethers } from "ethers";

// Import contract from ABI
import SimpleStorage from "../src/artifacts/contracts/SimpleStorage.sol/SimpleStorage.json";







function App() {
  const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
  let provider = new ethers.providers.JsonRpcProvider();

  let signer = provider.getSigner();

  let contract = new ethers.Contract(contractAddress, SimpleStorage.abi, signer);

  const [number, setNewNumber] = useState();

  const getNumber = async () => {

    const retrievedNumber = await contract.retrieve();
    setNewNumber(retrievedNumber);
    console.log(retrievedNumber);

  }

  const storeNumber = async () => {
    await contract.store(number);
    setNewNumber("");
  }



  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to SimpleStorage!</h1>
        <h3>Number to storage: </h3>
        <input
          placeholder='Enter a number'
          onChange={(e) => setNewNumber(e.target.value)}
          value={number} />
        <button onClick={getNumber}>Get Number</button>
        <button onClick={storeNumber}>Store Number</button>

      </header>
    </div>
  );
}

export default App;
