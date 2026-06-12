import { useState } from "react";
import UserContext from "./UserContext";

// ab humne kha tha provider bnake use provider se wrap krdenge baaki components ko ya puri app
// ko aur unko access mil jayega to hume yha niche return statement me sirf UserContext se wrap
// krna chaiye tha children ko , lekin isse kaam nhi chalta kyuki iski ek property access krni
// padti hai jisko Provider hi bolte hai.

// aur provide to krdiya lekin kya cheeze children access krenge to data bhi dena padega sath me,
// to hum yhape data denge by passing a prop or property named value and uss value me apna
// data pass krenge.

// step 2 : creating provider
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    // step 3: wrapping with contextProvider and passing children
    // step 4: passing data to provider that is to be used by the children components
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// now go to App.jsx
export default UserContextProvider;
