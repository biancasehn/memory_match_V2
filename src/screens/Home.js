import useStore from '../store'

import { Header, Tracker, Board, Modal } from "./components";

export function Home() {
  const displayModal = useStore(state => state.displayModal)
  return (
    <div>
      <Header />
      {displayModal ? (
        <Modal />
      ) : (
        <Tracker />
      )}
      <Board />
    </div>
  );
}
