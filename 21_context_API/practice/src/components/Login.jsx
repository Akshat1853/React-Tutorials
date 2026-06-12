import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // data us krne ke liye bs hume btana hoga ki konse provider se data use kr rhe hai 
  // kyuki bahot sare provider ho skte hai agar bahot sare context ho alag alag,
  // to use context me apne provider ka name dalo bs aur data use krlo

  // useContext me pass kra hai vo context jo hum use krna cahate hai and us context se hume
  // mil rha hai setUser() function jo hum yhape us krenge, to directly ek global store se
  // data ko use kr skte hai hum context API ki help se
  const {setUser} = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // sending data to context
    setUser({username,password})
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="UserName"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
