import React from 'react'
import './App.css'

const LoggedOut = () => {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="http://localhost:8888/login"
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
