import createHook from "zustand";

import { CARDS } from "./constants/cards.js";

const useStore = createHook((set) => ({
  cards: [...CARDS].sort(() => Math.random() - 0.5),

  displayModal: false,
  setDisplayModal: (displayModal) => set({ displayModal }),

  numberOfAttempts: 0,
  setNumberOfAttempts: () =>
    set((state) => ({ numberOfAttempts: state.numberOfAttempts + 1 })),

  flippedCard: CARDS.map(() => false),
  setFlippedCard: (flippedCard) => set({ flippedCard }),

  resetGame: () =>
    set((state) => ({
      cards: state.cards.sort(() => Math.random() - 0.5),
      displayModal: false,
      numberOfAttempts: 0,
      flippedCard: CARDS.map((card) => false),
    })),
}));

export default useStore;
