import { ResetButton } from "../ResetButton";
import style from "./style.module.css";
import {useStore} from "../../services/store";

export function Modal() {
  const numberOfAttempts = useStore((state) => state.numberOfAttempts);
  const { setDisplayModal } = useStore();

  return (
    <div id="modal" className={style.modalOpen}>
      <div className={style.modalWrap}>
        <h4>Well done!</h4>
        <h6>Number of failed attempts: {numberOfAttempts}</h6>
        <div className={style.button}>
          <ResetButton
            background="rgba(132, 219, 186, 0.788)"
            boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
            content="Play again"
          />
          <button
            className={style.closeButton}
            onClick={() => setDisplayModal(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
