import { useEffect, useState } from "react"
import { useRouter } from "next/router";


const Quiz = ({trackIDs}) => {
  const [tracks, setTracks] = useState();
  const [turn, setTurn] = useState();
  const [error, setError] = useState();

  const router = useRouter()
  
  const getTracks = () => {
    const url = 'https://api.musixmatch.com/ws/1.1/album.tracks.get?album_id=21119938&page_size=30&apikey=fd99587a1fd9b84d6510e5400010448a'
    return fetch(url)
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error(err)
      }
    })
    .catch(err => {
      setError(err)
    })
  }

  useEffect(() => {
    getTracks()
    .then(data => {
      const trackArr = data.message.body.track_list.map(track => {
        return track.track.track_id
      })
      setTracks(trackArr)
    })
    console.log('Current pathname:', router.query.id);
  },[]) 


  return <h1>Test</h1>
}

export default Quiz