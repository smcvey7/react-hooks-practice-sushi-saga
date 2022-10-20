import React, {useState} from "react";

function Sushi({roll, handlePurchase, wallet}) {

  const [isEaten, setIsEaten]=useState(false)

  return (
    <div className="sushi">
      <div className="plate" onClick={()=>{
        if (wallet >= roll.price){
          setIsEaten(true)
          handlePurchase(roll.price)
        }
        }}>
        {isEaten ? null : (
          <img
            src={roll.img_url}
            alt={roll.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {roll.name} - ${roll.price}
      </h4>
    </div>
  );
}

export default Sushi;
