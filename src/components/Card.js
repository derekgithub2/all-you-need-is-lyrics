import { useEffect, useState } from "react"

const Card = ({card, advanceTurn}) => {
  const [lyrics, setLyrics] = useState();

  const getLyrics = () => {
    console.log('card', card)
    const url = `https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${card.trackID}&apikey=fd99587a1fd9b84d6510e5400010448a`
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
    if(card) {
      getLyrics()
      .then(data => {
        setLyrics(data.message.body.lyrics.lyrics_body)
      })
    }
  },[card])

  return (
    <>
      <p>{lyrics}</p>
    </>
  )
}

export default Card