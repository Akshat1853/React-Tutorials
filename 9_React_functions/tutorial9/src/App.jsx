import React from "react";

const App = () => {
  function btnClicked() {
    console.log("Clicked");
  }

  const pageScrolling = (elem) => {
    console.log("Page Scrolling.... at speed", elem);
  };

  return (
    <div>
      <button onClick={btnClicked}>Click Here</button>
      <button
        onClick={() => {
          console.log("Hello Guys");
        }}
      >
        Explore this
      </button>

      <input
        type="text"
        placeholder="Enter Name"
        onChange={(elem) => {
          console.log(elem.target.value);
        }}
      />

      <div
        className="box"
        onMouseMove={(elem) => {
          console.log(elem.clientX);
        }}
      ></div>

      <div
        onWheel={(elem) => {
          pageScrolling(elem.deltaY);
        }}
      >
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>
    </div>
  );
};

export default App;
