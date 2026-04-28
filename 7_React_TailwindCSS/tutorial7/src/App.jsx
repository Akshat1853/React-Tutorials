// Tailwind CSS is a utility-first CSS framework where you style elements by writing small 
// utility classes directly in your HTML/JSX instead of writing separate CSS files.

// Basic Idea

// Instead of writing:

// .btn {
//   background-color: red;
//   padding: 10px;
// }

// You write directly in JSX:

// <button className="bg-red-500 px-4 py-2 rounded">
//   Click me
// </button>

//  No separate CSS file needed.


// Why Tailwind CSS is Used

// 1. No CSS File Needed, Everything is written in JSX → faster development
// 2. Utility-First Approach, Instead of writing custom classes You build UI like LEGO blocks.
// 3. No Naming Problems
// 4. Faster Development, You don’t switch between: JSX file, CSS file
// 5. Responsive Design Made Easy


// CSS Modules → better for structured, scalable styling
// Tailwind CSS → better for speed and rapid UI building


import React from 'react'

const App = () => {
  return (
    <div className='h-screen w-full bg-gray-500'>
      Hello
    </div>
  )
}

export default App;
