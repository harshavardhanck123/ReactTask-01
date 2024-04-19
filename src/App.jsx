import React from 'react'
import Card from './Card';
import './App.css'


const App = () => {
  const user=[
    {
      id:0,
      head:"Free",
      price:0,
      user:"Single",
    },
    {
      id:1,
      head:"Plus",
      price:9,
      user:5,
    },
    {
      id:2,
      head:"Pro",
      price:49,
      user:"Unlimited",
    }
  ]

  return (
    <div className="card-container">
      <Card user={user[0]}/>
      <Card user={user[1]}/>
      <Card user={user[2]}/>
    </div>
    
    
    
  )
}

export default App;