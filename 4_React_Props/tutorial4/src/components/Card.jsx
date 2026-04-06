import React from "react";

// Important Rules of Props
// 1. Props are Read-Only
// You cannot modify props inside the child

// 2. Data flows one way (Unidirectional)
// 👉 Parent ➝ Child only

// 3. Props make components reusable
// Same component, different data:

// You can also pass functions as props 👇

// Receiving Props Object
const Card = (props) => {
  return (
    <>
      <div className="card">
        <img
          src={props.img}
          alt=""
        />
        <h1>{props.user}, {props.age}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <button>View Profile</button>
      </div>
    </>
  );
};

export default Card;
