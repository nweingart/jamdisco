import React, { useState } from 'react'
import '../App.css'
import { logout } from "../Spotify";

const LoggedIn = () => {
  const [side, setSide] = useState('B')
  const songs = {
    song1: 'Mariella - Khruangbin',
    song2: 'tieduprightnow - Parcels',
    song3: 'Late July - Zach Bryan',
    song4: 'Older - Parcels',
    song5: 'River - Leon Bridges',
    song6: 'Ladders - Mac Miller',
    song7: 'Arabella - Arctic Monkeys',
    song8: 'Texas Sun - Khruangbin',
    song9: 'Oklahoma Smokeshow - Zach Bryan',
    song10: 'Do I Ever Cross Your Mind - Chet Atkins',
  }

  const handleClick = () => {
    side === 'A' ? setSide('B') : setSide('A')
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="button" onClick={handleClick}>{ side === 'A' ? 'Flip to B side' : 'Flip back to A side'}</div>
        <div>
          <div className="circle1">
            <div className="text">{ side === 'A' ? songs.song1 : songs.song6 }</div>
          </div>
          <div className="circle2">
            <div className="text">{ side === 'A' ? songs.song2 : songs.song7}</div>
          </div>
          <div className="circle3">
            <div className="text">{ side === 'A' ? songs.song3 : songs.song8}</div>
          </div>
          <div className="circle4">
            <div className="text">{ side === 'A' ? songs.song4 : songs.song9}</div>
          </div>
          <div className="circle5">
            <div className="text">{ side === 'A' ? songs.song5 : songs.song10}</div>
          </div>
          <div className="circle6" />
        </div>
      </header>
    </div>
  )
}

// <button onClick={logout}>Logout</button>

export default LoggedIn
