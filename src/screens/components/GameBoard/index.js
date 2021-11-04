import { useState, useEffect } from "react";

import { CARDS } from "../../../constants/cards.js";
import style from "./style.module.css";

export function Board({
  setDisplayModal,
  numberOfAttempts,
  setNumberOfAttempts,
}) {
  const [flippedCard, setFlippedCard] = useState(() => CARDS.map(() => false));
  const [comparisonArray, setComparisonArray] = useState([]);
  const [blockBoard, setBlockBoard] = useState(0);

  useEffect(() => {
    //Everytime a card is clicked, comparisonArray receives it as an element, and this effect is triggered.
    if (comparisonArray.length === 2) {
      //comparisonArray length is 2? Time to compare the cards
      compareCards();
    }
  }, [comparisonArray]);

  const compareCards = () => {
    if (comparisonArray[0] === comparisonArray[1]) {
      //if the cards as not a match
      filterMatches(); //if the cards flipped are match, go to filterMatches to check if all the cards have been matched
      setComparisonArray([]); // Cleaning comparisonArray for the next round of comparison
      setBlockBoard(0);
      return;
    }
    setNumberOfAttempts(++numberOfAttempts); // +1 failed attempt
    const backToFalse = Object.keys(flippedCard).map((key) => {
      //this function iterates through the flippedCard obj
      if (comparisonArray.includes(flippedCard[key])) {
        //looking for the cards not matched (comparisonArray)
        return false; //if the card is found, it returns "false" to replace the animal
      }
      return flippedCard[key];
    });
    setTimeout(() => {
      //time for the user check the cards before flipping them back
      setFlippedCard(backToFalse);
      setBlockBoard(0);
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
        {CARDS.map((card, i) => {
          return (
            <div
              onClick={() => {
                if (!flippedCard[i] && blockBoard < 2) {
                  // the states change only if the card was not flipped yet
                  setFlippedCard({ ...flippedCard, [i]: card }); //setting flippedCard state of the specific card to the respective animal
                  setComparisonArray([...comparisonArray, card]); // pushing the card to comparisonArray
                  setBlockBoard((prev) => prev + 1);
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
