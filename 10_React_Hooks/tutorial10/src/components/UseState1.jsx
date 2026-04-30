// IMP :: Set function of use state works asynchronously 

import React from "react";
import { useState } from "react";

const UseState1 = () => {
  
  let a = 20;

  // Wrong way
  function changeA() {
    a = 30;
    console.log(a);
  }

  // Right way
  const [b, setB] = useState(0);

  function changeB(){
    setB(40);
  }

  const [num, setNum] = useState(0);
  const [jump5, setJump5] = useState(false);

  function increaseNum(){
    if(jump5){
      setNum(num + 5)
    }
    else setNum(num + 1)
  }

  function decreaseNum(){
    if(jump5){
      setNum(num - 5)
    }
    else setNum(num - 1)
  }

  function jump5Num(){
    setJump5(!jump5)
  }

  const [num1, setNum1] = useState({user : 'Sarthak', age: 20})

  const btnClicked = () => {
    const newNum = {...num1};
    newNum.user = 'Aman'
    newNum.age = 29
    setNum1(newNum)
  }

  return (
    <div>
      {/* Value will not change on screen like this for this you have to use react states */}
      <h1>Value of a is {a}</h1>
      <button onClick={changeA}>Click</button>

      <h1>Value of b is {b}</h1>
      <button onClick={changeB}>Click</button>

      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jump5Num}>Jump by 5</button>

      <h1>{num1.user}, {num1.age}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  );
};

export default UseState1;
