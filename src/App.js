
import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./App.css";

async function itemCall(item){
  axios.get(`https://www.garlandtools.org/db/doc/item/ja/3/${item}.json`).then(
    (response) => response.data)
}

async function equipCall(){
  const data = axios.get(`https://www.garlandtools.org/db/doc/equip/ja/2/leveling-drk.json`
  ).then((response) => response.data)
  return data;
}

function App() {
  const [lists, setLists] = useState([]);

  useEffect(()=>{
    equipCall().then((response) => {
      console.log(response);
      const helmatList = response.equip.map((data) => {
        console.log(data)
        const itemName = itemCall(data[3][0].id);
        console.log(itemName)
        return itemName.item.name;
      });
      setLists(helmatList);
    });;
  }, [])

  console.log(lists)
  

  return (<div className="App">
    <button>test</button>
    <div>{ lists.map((t,k) => <div><text key={k}>{t} </text></div>) }</div>
  </div>);
}

export default App;
