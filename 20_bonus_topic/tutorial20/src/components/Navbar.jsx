import React from "react";

const Navbar = (props) => {

  function changeTheme() {
    props.setTheme("Dark");
  }

  return (
    <div>
      <p>{props.Theme}</p>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
};

export default Navbar;
