import React from "react";
import axios from "axios";
import { useState } from "react";

const App = () => {

  const [data, setData] = useState([]);

  async function getData1() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    const data = await response.json();
    console.log(data);
  }

  const getData2 = async () => {
    const response2 = await axios.get("https://picsum.photos/v2/list");
    setData(response2.data);
  };

  return (
    <div>
      <button onClick={getData1}>Get Data1</button>
      <button onClick={getData2}>Get Data2</button>

      <div>
        {data.map(function (elem, idx) {
          return (
            <h3>
              Hello, {elem.author} {idx}
            </h3>
          );
        })}
      </div>
      
    </div>
  );
};

export default App;
