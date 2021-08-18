import React from "react";

function Sushi({sushi}) {
  const {name, img_url, price, eaten, id} = sushi

function handleClick(){
 
  console.log(`change property of sushi # ${id} to eaten`)
 sushi.eaten = !sushi.eaten
 console.log(sushi.eaten)
}

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
