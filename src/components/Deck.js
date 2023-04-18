import React, { useEffect, useState } from "react"
import Card from "./Card";

const Deck = ({tracks}) => {
  const [cardDeck, setCardDeck] = useState();
  const [currentCard, setCurrentCard] = useState();
  const [turn, setTurn] = useState(0);

  const advanceTurn = () => {
    setTurn(turn + 1)
  }

  useEffect(() => {
    if(tracks) {
      const newCards = tracks.slice(0, 5)
      setCardDeck(newCards)
      setCurrentCard(newCards[turn])
    }
  },[tracks])

  return (
    <Card card={currentCard} advanceTurn={advanceTurn} />
  )
}

export default Deck