import React from "react";

const App = () => {
  return (
    // Fragments are empty tags used to contain items in react, they are not present in the DOM tree
    // They act as wrappers
    <> 
      <div id="dad">
        <h1 id="child1">Hello</h1>
        <h2 id="child2">Hello</h2>
      </div>
      <div id="chacha"></div>
    </>
  );
};

export default App;
