//End of coding challenge

import React, {useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

const [sushis, setSushis] = useState([])

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

// console.log(sushis)

  return (
    <div className="app">
      <SushiContainer sushis={sushis} />
      <Table />
    </div>
  );
}

export default App;
