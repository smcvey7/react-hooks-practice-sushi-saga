import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [remainingSushi, setRemainingSushi]=useState([])
  const [wallet, setWallet]=useState(100)
  const [plates, setPlates]=useState([])

  useEffect(()=>{
    fetch(API, {
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    })
    .then(res=>res.json())
    .then(data=>setRemainingSushi(data))
  }, [])

  function handlePurchase(price){
    const newWallet = wallet-price
    setWallet(newWallet) 
    const newPlates = [...plates, price]
    setPlates(newPlates)
  }

  return (
    <div className="app">
      <SushiContainer wallet={wallet} handlePurchase={handlePurchase} remainingSushi={remainingSushi}/>
      <Table wallet={wallet} plates={plates}/>
    </div>
  );
}

export default App;
