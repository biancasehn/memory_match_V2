import { useState } from "react";

import { Header, Tracker, Board, Modal } from "./components";

export function Home() {
  const [displayModal, setDisplayModal] = useState(false);
  const [numberOfAttempts, setNumberOfAttempts] = useState(0);

  return (
    <div>
      <Header />
      {displayModal ? (
        <Modal
          displayModal={displayModal}
          setDisplayModal={setDisplayModal}
          numberOfAttempts={numberOfAttempts}
        />
      ) : (
        <Tracker numberOfAttempts={numberOfAttempts} />
      )}
      <Board
        setDisplayModal={setDisplayModal}
        numberOfAttempts={numberOfAttempts}
        setNumberOfAttempts={setNumberOfAttempts}
      />
    </div>
  );
}
