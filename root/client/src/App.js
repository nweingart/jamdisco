import { useEffect, useState } from "react";
import LoggedOut from "./LoggedOut";

import { accessToken, logout } from "./Spotify";

function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    setToken(accessToken)
  }, [])

  return (
    <div>
      {
        !token ? (
          <LoggedOut />
        ) : (
          <div>
            <h1>
              Logged In!
            </h1>
            <button onClick={logout}>Log Out</button>
          </div>
          )
      }
    </div>
  );
}

export default App;
