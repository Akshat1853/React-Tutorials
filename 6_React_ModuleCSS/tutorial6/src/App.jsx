import React from "react";
import Header from "./components/header/Header";
import Button from "./components/button/Button";

// What is module.css (CSS Modules)?

// module.css is a way of writing CSS where styles are scoped locally to a component,
// instead of being global.

// In your example:

// Button.module.css styles apply only to Button component
// Header.module.css styles apply only to Header component


// When you write:

// import styles from './Button.module.css'
// React (actually the build tool like Vite/Webpack) converts class names into something like:
// btn → btn_abc123
// So even if another file also has .btn, they won’t clash.


// Why we use CSS Modules?

// Without modules:

// CSS is global
// Same class name → conflicts
// Hard to maintain in large apps

// With modules:

// CSS becomes component-scoped
// No naming conflicts
// Cleaner and safer code


// When NOT to use CSS Modules
//     Global styles (body, fonts, reset)
//     Use normal CSS or global stylesheet


// Alternative Styling Methods in React
// Inline CSS
// Styled Components
// Tailwind CSS
// Sass (SCSS)


// Quick Summary
// module.css = locally scoped CSS
// Prevents conflicts
// Makes code clean, modular, and scalable
// Best for component-based design (React)


const App = () => {
  return (
    <div>
      <Button />
      <Header />
    </div>
  );
};

export default App;
