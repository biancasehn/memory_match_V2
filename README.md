# Memory Matching Game

The classic game we all have played as kids.

## Stack
This game has been built with the following stack:
* React.js
* CSS
* Zustand - for global state management

## Functionality
- Every time a card is clicked, it will flip so the user can see what image it shows. <br/>

- When 2 cards are clicked, under the hood they will be compared: <br/>
:heavy_check_mark: If it is a match, the cards will remain face up.<br/>
:x: Otherwise, the cards will be turned face down and the failed attempts at the scoreboard will be increased.<br/>

:arrows_counterclockwise: At any time the user can reset the game by clicking "Reset" in the scoreboard.<br/>

- At the end, a modal will show up, showing the user's score. Here the user has 2 options: <br/>
  :back:"Close" will simply close the modal and the user will be back to be finished game <br/>
  :arrows_counterclockwise: "Play again" the game will be resetted and the user can start playing again <br/>
