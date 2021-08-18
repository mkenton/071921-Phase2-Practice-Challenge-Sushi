import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"




function SushiContainer({sushis}) {

const [sushiNo, setSushiNo] = useState(4);

  const allSushi = sushis.map((sushi) => (
    <Sushi
    key={sushi.id}
    sushi={sushi}
    // name={sushi.name}
    // img_url={sushi.img_url}
    // price={sushi.price}
  // created_at={sushi.created_at}
    />
  ))

  function handleClickMoreSushi() {
setSushiNo(sushiNo + 4)
console.log(sushiNo)
  }
  
  return (
    <div className="belt">
      {allSushi.slice(sushiNo-4,sushiNo)}
        < MoreButton  onClickMoreSushi={handleClickMoreSushi}/>  

    </div>
  );
}

export default SushiContainer;
