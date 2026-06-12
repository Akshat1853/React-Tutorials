import React from "react";

// sbse phle iss tarike se ek context create kro  // step 1
const UserContext = React.createContext();

// jaise aapne context bnaya to context hota hai ek provider, to here usercontext bhi apne aap
// me ek provider hai. par hume ye provider bnana padta hai, jo humne bnaya hai UserContextProvider
// ke name se    // step 2

// hum kya krte hai apni aap ko wrap krayenge is context provider se, // step 3
// to jo bhi components iske child bnayege un sbko is global userContext ka access mil jayega.

// now go to UserContextProvider.jsx
export default UserContext;
