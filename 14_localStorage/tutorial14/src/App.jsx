import React from 'react'

const App = () => {
  localStorage.setItem('user', 'Sarthak');

  const user = localStorage.getItem('user');

  console.log(user);

  localStorage.removeItem('user');

  localStorage.clear();


  const user2 = {
    username : 'Sarthak',
    age: 19,
    city: "Bhopal"
  }

  localStorage.setItem('user2', JSON.stringify(user2));

  console.log(JSON.parse(localStorage.getItem('user2')))

  return (
    <div>
      Hello
    </div>
  )
}

export default App
