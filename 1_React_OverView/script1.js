// What is React JS ?

// React.js (commonly called React) is a JavaScript library used to build user interfaces (UI), 
// especially for web applications. It was developed and maintained by Meta Platforms 
// (formerly Facebook).

// React helps you create interactive and dynamic web pages—like:

// Forms
// Dashboards
// Social media apps
// Single-page applications (SPA)

// Instead of reloading the whole page, React updates only the parts that change.

// React is a library, not a full framework.
// Libraries are used to give a feature to a website like gsap, Lenis, React JS.
// Framework means a complete structure to build apps
// Framework examples include NEXT JS, Angular.

// 👉 That means:

// It mainly handles the view layer (UI)
// You can combine it with other tools for routing, state management, etc.

// Library → You call the library when you need it
// Framework → The framework calls your code

// React applications are built using components.

// 👉 A component is:

// A reusable piece of UI
// Like a function that returns HTML (via JSX)

// Example idea:

// Navbar → one component
// Footer → another component
// Button → reusable component

// React uses JSX (JavaScript XML).

// 👉 JSX allows you to write HTML-like code inside JavaScript:
// Example: const element = <h1>Hello, World!</h1>;
// It makes UI code easier to read and write.

// React uses a Virtual DOM:

// It creates a copy of the real DOM
// Compares changes
// Updates only what is necessary

// 👉 This improves performance.






// Import and export

// import and export are used to share code(components, functions, variables) between different 
// files using ES6 Modules.

// There are two types of export
// 1. Default export - a file can only have one default export
// 2. Named export - A file can have MULTIPLE named exports

// importing a named export from app.js
// names must match exactly
import { a } from "./app.js";
console.log(a);

// importing a default export from app.js
// No {} needed
// you can use any name of th deafult export, names do not match exactly
import array from "./app.js";
console.log(array);





// Real DOM and Virtual DOM 

// The Real DOM (Document Object Model) is the actual tree structure of your 
// webpage created by the browser.

// 👉 Example:

{/* <body>
  <h1>Hello</h1>
  <p>Text</p>
</body> */}

// This gets converted into a tree of objects (nodes) in memory.

// Limitations of Real DOM ❌

// Every change updates the entire DOM tree
// Even small changes can trigger heavy re-rendering

// DOM manipulation is costly (time + memory)
// Reflow (layout recalculation) + repaint happen frequently

// Frequent updates (like typing, animations) cause lag

// Manual DOM manipulation becomes messy in large apps



// The Virtual DOM (VDOM) is a lightweight copy of the Real DOM kept in memory by React.
// 👉 It is just a JavaScript object representation of the UI.

// How React Uses Virtual DOM
// React creates Virtual DOM
// When state changes → creates a new Virtual DOM
// Compares old vs new (Diffing)
// Updates only changed parts (Reconciliation)

// React updates only text, not entire DOM

// Why Virtual DOM is Faster ⚡

// Works in memory (fast)
// Minimizes direct DOM operations
// Updates only required nodes

// 👉 Result: Better performance