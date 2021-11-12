import { ResetButton } from "../ResetButton";
import style from "./style.module.css";
import {useStore} from "../../services/store";

export function Tracker() {
  const numberOfAttempts = useStore((state) => state.numberOfAttempts);
  return (
    <div className={style.board}>
      <p>Number of failed attempts: {numberOfAttempts}</p>
      <ResetButton
        content="Reset game"
        boxShadow="rgba(50, 50, 93, 0.3) 0px 5px 27px -5px"
      />
    </div>
  );
}
