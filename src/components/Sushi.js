import React from "react";

function Sushi({sushi, handleEatSushi}) {
  const {name, img_url, price, eaten, id} = sushi



  return (
    <div className="sushi">
      <div className="plate" onClick={() => handleEatSushi(sushi)}>
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
