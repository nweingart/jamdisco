import { useEffect, useState } from "react";
import LoggedOut from "./screens/LoggedOut";
import LoggedIn from "./screens/LoggedIn"
import { accessToken } from "./Spotify";
import { getProfile, getTopTracks } from "./Spotify";


function App() {
  const [token, setToken] = useState(null)
  const [profile, setProfile] = useState(null)
  const [topTracks, setTopTracks] = useState([])

  useEffect(() => {
    setToken(accessToken)

    const fetchData = async () => {
      try {
        const { data } = await getProfile()
        setProfile(data)

        const { data: trackData } = await getTopTracks()
        setTopTracks(trackData)

      } catch(err) {
        console.log(err)
      }
    }

    fetchData()
  }, [])

  console.log(profile)

  return (
    <div>
      {
        !token ? (
          <LoggedOut />
        ) : (
          <LoggedIn tracks={topTracks}/>
          )
      }
    </div>
  );
}

export default App;
