import { useEffect, useState } from "react"
import { useRouter } from "next/router";
import Deck from "@/components/Deck";


const Quiz = ({trackIDs}) => {
  const [tracks, setTracks] = useState();
  const [turn, setTurn] = useState();
  const [error, setError] = useState();
  const [albumID, setAlbumID] = useState();

  const router = useRouter()
  
  const getTracks = (id) => {
    const url = `https://api.musixmatch.com/ws/1.1/album.tracks.get?album_id=${id}&page_size=30&apikey=fd99587a1fd9b84d6510e5400010448a`
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
    if(router.query.id) {
      setAlbumID(router.query.id)
    }
  },[])

  useEffect(() => {
    if(!albumID) {
      return
    }
    getTracks(albumID)
    .then(data => {
      const trackArr = data.message.body.track_list.map(track => {
        return {trackID: track.track.track_id, trackName: track.track.track_name}
      })
      setTracks(trackArr)
    })
  },[albumID]) 


  return <Deck tracks={tracks}/>
}

export default Quiz