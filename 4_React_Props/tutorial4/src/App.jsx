import React from "react";
import Card from "./components/Card";

// Props (short for Properties) are used to pass data from a parent component to a child component.
// 👉 They make components dynamic and reusable.
// Think of props like function arguments.

// How Props Work ?

// Parent sends data → Child receives it
// Props are passed as attributes in JSX
// Inside component, accessed using props

// Data hamesha upar se niche ki taraf jata hai parent se child ki taraf
// App is a parent and Card is a child
const App = () => {
  return (
    <>
      <div className="parent">
        {/* sending Props */}
        <Card
          user="Aman"
          age={18}
          img={
            "https://images.unsplash.com/photo-1763503836825-97f5450d155a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <Card
          user="Sarthak"
          age={21}
          img={
            "https://images.unsplash.com/photo-1773497007741-b0348d3ad123?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </div>
    </>
  );
};

export default App;
