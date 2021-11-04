import style from "./style.module.css";

export function Tracker({ numberOfAttempts }) {
  return (
    <div className={style.board}>
      <p>Number of failed attempts: {numberOfAttempts}</p>
    </div>
  );
}
