import React from 'react'
import Card from './components/Card';
import Navbar from './components/Navbar';

// Component-Based Architecture in React is the core design approach where the UI is built by 
// breaking it into independent, reusable pieces called components.

// Instead of writing one large HTML/JS file, React lets you divide your UI 
// into small building blocks.

// A component is a reusable piece of UI.

// 👉 Example:

// Navbar
// Sidebar
// Button
// Card
// Footer

// Each of these can be created as a separate component and reused anywhere..

// There are two types of components in react 

// 1. Functional based component
// 2. Class based component

const App = () => {
  const user = "Harsh";
  const age = 80;

  return (
    <div>
      <Navbar/>
      <h1>Hello, Guys I am {user}</h1>
      <h2>and I am {age} years old</h2>
      <Card/>
    </div>
  )
}

export default App;