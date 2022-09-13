import React from 'react'
import '../App.css'

const LoggedOut = () => {

  const LOGIN_URI = process.env.NODE_ENV !== 'production' ? 'http://localhost:8888/login' : 'https://songs-of-the-summer.herokuapp.com/login'

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href={LOGIN_URI}
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to connect your Spotify
        </a>
      </header>
    </div>
  );
}

export default LoggedOut
