import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar';

// data is passed only from top to bottom while prop drilling, but in this way you can also
// change the data in some parent component from the child component.
const App = () => {

  const [Theme, setTheme] = useState('light');
  return (
    <div>
      <h1>Theme is {Theme}</h1>
      <Navbar Theme = {Theme} setTheme = {setTheme}/>
    </div>
  )
}

export default App
