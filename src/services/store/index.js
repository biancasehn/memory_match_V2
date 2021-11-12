import createHook from "zustand";

import { CARDS } from "constants/cards.js";

export const useStore = createHook((set) => ({
  cards: [...CARDS].sort(() => Math.random() - 0.5),
  numberOfAttempts: 0,
  displayModal: false,
  flippedCard: CARDS.map(() => false),

  setDisplayModal: (displayModal) => set({ displayModal }),
  setNumberOfAttempts: () =>
    set((state) => ({ numberOfAttempts: state.numberOfAttempts + 1 })),
  setFlippedCard: (flippedCard) => set({ flippedCard }),

  resetGame: () =>
    set((state) => ({
      cards: state.cards.sort(() => Math.random() - 0.5),
      displayModal: false,
      numberOfAttempts: 0,
      flippedCard: CARDS.map((card) => false),
    })),
}));
