import { useEffect, useState } from "react";
import LoggedOut from "./screens/LoggedOut";
import LoggedIn from "./screens/LoggedIn"

import { accessToken } from "./Spotify";

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
          <LoggedIn />
          )
      }
    </div>
  );
}

export default App;
