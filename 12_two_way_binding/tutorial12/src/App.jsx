// React doesn’t have “true” two-way data binding like Angular (ngModel).
// Instead, it follows a one-way data flow, but you can achieve two-way binding behavior
// using state + event handlers.

// 🔁 How it works in React

// You:

// Store data in state
// Display it in the input (value)
// Update state on user input (onChange)

// That loop = “two-way binding”

import React, { useState } from "react";

const App = () => {
  // State to store input value (this is the "single source of truth")
  const [title, setTitle] = useState("");

  // Function to handle form submission
  const submitHandler = (e) => {
    e.preventDefault(); // Prevents page reload on form submit

    console.log(title); // Access current input value from state

    setTitle(""); // Reset input field (since it's controlled by state)
  };

  return (
    <div>
      {/* Form submission handled here */}
      <form onSubmit={submitHandler}>
        {/* Controlled Input Field */}
        <input
          type="text"
          placeholder="Enter your name"
          // State → UI (input value comes from state)
          value={title}
          // UI → State (update state when user types)
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Button to trigger form submit */}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
