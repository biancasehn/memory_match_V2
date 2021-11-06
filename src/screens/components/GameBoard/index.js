import useStore from '../../../store'
import { useState, useEffect } from "react";

import style from "./style.module.css";

export function Board() {
  //UseStore
  const setNumberOfAttempts = useStore(state => state.setNumberOfAttempts);
  const { setDisplayModal } = useStore();
  const cards = useStore((state) => state.cards)
  const { setFlippedCard } = useStore();
  const flippedCard = useStore(state => state.flippedCard)

  //UseState
  const [comparisonArray, setComparisonArray] = useState([]);
  const [blockBoard, setBlockBoard] = useState(0);

  useEffect(() => {
    //Everytime a card is clicked, comparisonArray receives it as an element, and this effect is triggered.
    if (comparisonArray.length === 2) {
      //comparisonArray length is 2? Time to compare the cards
      compareCards();
    }
  }, [flippedCard]);

  const compareCards = () => {
    if (comparisonArray[0] === comparisonArray[1]) { //if the cards flipped are match, 
      filterMatches(); //go to filterMatches to check if all the cards have been matched
      setComparisonArray([]); // Cleaning comparisonArray for the next round of comparison
      setBlockBoard(0); //The user can click again
      return;
    }
    //if the cards flipped are not a match:
    setNumberOfAttempts(); // +1 failed attempt
    const backToFalse = Object.keys(flippedCard).map((key) => {
      //this function iterates through the flippedCard obj
      if (comparisonArray.includes(flippedCard[key])) {
        //looking for the cards not matched (comparisonArray)
        return false; //if the card is found, it returns "false" replacing the animal
      }
      return flippedCard[key];
    });
    setTimeout(() => {
      //time for the user to check the cards before they are flipped back
      setFlippedCard(backToFalse);
      setBlockBoard(0); //The user can click again
    }, 1500);
    setComparisonArray([]); // Cleaning comparisonArray for the next round of comparison
  };

  const filterMatches = () => {
    // this function iterates through the flippedCard obj and return an array, filtering all the animals (matches)
    Object.keys(flippedCard).filter((key) => {
      // therefore remaining only the falses (the cards not yet matched)
      return !flippedCard[key]; //removing the cards already matched
    }).length === 0 && setDisplayModal(true); // All the cards have been matched? Display modal!
  };

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        {cards.map((card, i) => {
          return (
            <div
              onClick={() => {
                if (!flippedCard[i] && blockBoard < 2) { 
                  // the states change only if the card was not flipped yet and the blockboard state is less than 2
                  setFlippedCard({ ...flippedCard, [i]: card }); //setting flippedCard state of the specific card to the respective animal
                  setComparisonArray([...comparisonArray, card]); // pushing the card to comparisonArray
                  setBlockBoard((prev) => prev + 1); //The user is blocked from clicking when blockBoard === 2
                }
              }}
              key={i}
              className={flippedCard[i] ? style.cardFlip : style.card}
              id={i}
            >
              {flippedCard[i] ? (
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
