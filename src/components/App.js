//End of coding challenge

import React, {useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

const [sushis, setSushis] = useState([])
const [money, setMoney] = useState(100)

useEffect(() => {
  fetch(API)
  .then(res => res.json())
  .then(data => {
    const updatedData = data.map((sushi) => { 
      return {...sushi, eaten: false};
    });
     setSushis(updatedData)
})
},[])


function setEaten(piece) {

  const remainingMoney = money - piece.price;
  if (remainingMoney >=0 && piece.eaten === false) {
setMoney(money - piece.price);

  setSushis(
    sushis.map((sushi)=>
    sushi.id === piece.id ? {...sushi, eaten: true}: sushi)
  )
}
}
// console.log(sushis)

  return (
    <div className="app">
      <SushiContainer sushis={sushis} handleEatSushi={setEaten}/>
      <Table money={money} plates={sushis.filter(sushi => sushi.eaten)}/>
    </div>
  );
}

export default App;
