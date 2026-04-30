// React Hooks are functions that let you “hook into” React features 
// (like state and lifecycle methods) in functional components—without needing to use 
// class components.

// They were introduced in React 16.8 and are now the standard way to write modern React code..

// Before hooks:

// You had to use class components for state and lifecycle
// Functional components were mostly “dumb” (just UI)

// With hooks:

// Functional components can manage state, side effects, context, refs, etc.
// Code becomes simpler, reusable, and cleaner

// UseState - state ko manage krne ke liye

// UseEffect - side effects handle krne ke liye (jaise API call, DOM Manipulation, event listener).

// UseContext - global state ko consume krne ke liye without prop drilling.

// UseReducer - complex state management k liye (Redux jaisa chota version)

// UseRef - mutabke values hold krne k liye jo re render trigger na karein, ya DOM access krne k liye

// UseMemo & UseCallback - optimization k liye, unnecessary re-renders avoid krne k liye.

import React from 'react'
import UseState1 from './components/UseState1'

const App = () => {
  return (
    <div>
      <UseState1/>
    </div>
  )
}

export default App
