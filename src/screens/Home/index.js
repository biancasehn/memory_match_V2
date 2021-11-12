import { Header, Tracker, Board, Modal } from "../../components";
import {useStore} from "../../services/store";

export function Home() {
  const { displayModal } = useStore()
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
