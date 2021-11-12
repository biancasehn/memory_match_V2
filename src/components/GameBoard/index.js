import { useState, useEffect } from "react";
import style from "./style.module.css";
import { useStore } from "services/store";

export function Board() {
  //UseStore
  const { cards, flippedCard, setDisplayModal, setNumberOfAttempts, setFlippedCard } = useStore();

  //UseState
  const [comparisonArray, setComparisonArray] = useState([]);
  const [blockBoard, setBlockBoard] = useState(0);

  //Constant
  const flippedCardsKeys = Object.keys(flippedCard)

  //Compares the 2 cards just turned face up
  const compareCards = () => {
    if (comparisonArray[0] === comparisonArray[1]) {
      filterMatches();
      setComparisonArray([]);
      setBlockBoard(0);
      return;
    }
    setNumberOfAttempts();
    const backToFalse = flippedCardsKeys.map((key) => {
      return comparisonArray.includes(flippedCard[key]) ? false : flippedCard[key];
    });
    setTimeout(() => {
      setFlippedCard(backToFalse);
      setBlockBoard(0);
    }, 1500);
    setComparisonArray([]);
  };

  // Checks if all the cards have been matched - if yes, display modal
  const filterMatches = () => {
    const facedDownCards = flippedCardsKeys.filter((key) => {
      return !flippedCard[key];
    })
    facedDownCards.length === 0 && setDisplayModal(true);
  };

  //Triggers comparison function everytime a card is clicked
  useEffect(() => {
    if (comparisonArray.length === 2) {
      compareCards();
    }
  }, [flippedCard]);

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        {cards.map((card, index) => {
          return (
            <div
              onClick={() => {
                if (!flippedCard[index] && blockBoard < 2) { 
                  setFlippedCard({ ...flippedCard, [index]: card });
                  setComparisonArray([...comparisonArray, card]);
                  setBlockBoard((prev) => prev + 1);
                }
              }}
              key={`card_${index}`}
              className={flippedCard[index] ? style.cardFlip : style.card}
              id={index}
            >
              {flippedCard[index] ? (
                <div className={style.back}>{card}</div>
              ) : (
                <div className={style.front}>?</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
