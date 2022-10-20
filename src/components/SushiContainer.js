import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({remainingSushi, handlePurchase, wallet}) {
  const [toShow, setToShow]=useState([1, 4])
  const sushiComponent = remainingSushi.map(roll=>{
    if (roll.id >= toShow[0] && roll.id <= toShow[1]){
      return <Sushi key={roll.id} roll={roll} handlePurchase={handlePurchase} wallet={wallet} />
    }
  })

  function moreSushi(){
    if (toShow[1]<100){
      const newShow = toShow.map(num=>num+4)
      setToShow(newShow)
      console.log(toShow)
  }
  }

  return (
    <div className="belt">
      {sushiComponent}
      <MoreButton moreSushi={moreSushi} />
    </div>
  );
}

export default SushiContainer;
