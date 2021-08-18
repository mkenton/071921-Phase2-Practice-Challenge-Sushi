import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"




function SushiContainer({sushis, handleEatSushi}) {

const [sushiNo, setSushiNo] = useState(0);

  const allSushi = sushis.map((sushi) => (
    <Sushi
    key={sushi.id}
    sushi={sushi}
    handleEatSushi={handleEatSushi}
    // name={sushi.name}
    // img_url={sushi.img_url}
    // price={sushi.price}
  // created_at={sushi.created_at}
    />
  ))

  function handleClickMoreSushi() {
setSushiNo((sushiNo + 4) % sushis.length)
console.log(sushiNo)
  }
  
  return (
    <div className="belt">
      {allSushi.slice(sushiNo,sushiNo+4)}
        < MoreButton  onClickMoreSushi={handleClickMoreSushi} />  

    </div>
  );
}

export default SushiContainer;
