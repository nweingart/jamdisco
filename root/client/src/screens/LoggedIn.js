import React, { useState } from 'react'
import '../App.css'
import { logout } from "../Spotify";

const LoggedIn = () => {
  const [side, setSide] = useState('A')

  return (
    <div className="App">
      <header className="App-header">
        <div className="circle1" />
        <div className="circle2" />
        <div className="circle3" />
        <div className="circle4" />
        <div className="circle5" />
        <div className="circle6" />
      </header>
    </div>
  )
}

// <button onClick={logout}>Logout</button>

export default LoggedIn
