import React, { useState } from 'react'
import '../App.css'
import { logout } from "../Spotify";

const LoggedIn = (tracks) => {
  const [side, setSide] = useState('A')

  const handleClick = () => {
    side === 'A' ? setSide('B') : setSide('A')
  }

  const allTracks = tracks?.tracks?.items
  const formattedTracks = []
  const popularityScores = []

  allTracks?.map(track => {
    formattedTracks.push({ artist: track?.artists[0]?.name, name: track?.name})
    popularityScores.push(track?.popularity)
  })


  console.log(formattedTracks)
  console.log(popularityScores)

  const initialValue = 0
  const uniquenessScore =  100 - (popularityScores.reduce(
    (previousValue, currentValue) => previousValue + currentValue, initialValue
  ) / 20)

  return (
    <div className="App">
      <header className="App-header">
        <div onClick={handleClick} className="title">{side === 'A' ? `Ned's Summer A-Side` : `Ned's Summer B-Side`}</div>
        <div className="shameless-plug">See yours at spotifysongsofthesummer.com</div>
        <div>
          <div className="circle1">
            <div className="text">{ side === 'A' ? `1.) ${formattedTracks[0]?.name} - ${formattedTracks[0]?.artist}` : `6.) ${formattedTracks[5]?.name} - ${formattedTracks[5]?.artist}`}</div>
          </div>
          <div className="circle2">
            <div className="text">{ side === 'A' ? ` 2.) ${formattedTracks[1]?.name} - ${formattedTracks[1]?.artist}` : `7.) ${formattedTracks[6]?.name} - ${formattedTracks[6]?.artist}`}</div>
          </div>
          <div className="circle3">
            <div className="text">{ side === 'A' ? `3.) ${formattedTracks[2]?.name} - ${formattedTracks[2]?.artist}` : `8.) ${formattedTracks[7]?.name} - ${formattedTracks[7]?.artist}`}</div>
          </div>
          <div className="circle4">
            <div className="text">{ side === 'A' ? `4.) ${formattedTracks[3]?.name} - ${formattedTracks[3]?.artist}` : `9.) ${formattedTracks[8]?.name} - ${formattedTracks[8]?.artist}`}</div>
          </div>
          <div className="circle5">
            <div className="text">{ side === 'A' ? `5.) ${formattedTracks[4]?.name} - ${formattedTracks[4]?.artist}` : `10.) ${formattedTracks[9]?.name} - ${formattedTracks[9]?.artist}`}</div>
          </div>
          <div className="circle6">
            <div className="unique">
              {`Your summer tracks were ${uniquenessScore.toFixed(1)}% unique`}
            </div>
          </div>
        </div>
        <button className="button" onClick={logout}>
          Logout
        </button>
      </header>
    </div>
  )
}


export default LoggedIn
