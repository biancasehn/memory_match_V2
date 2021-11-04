import style from "./style.module.css";

export function Modal({ numberOfAttempts, setDisplayModal }) {
  return (
    <div id="modal" className={style.modalOpen}>
      <div className={style.modalWrap}>
        <h4>Well done!</h4>
        <h6>Number of failed attempts: {numberOfAttempts}</h6>
        <button onClick={() => setDisplayModal(false)}>Play again</button>
      </div>
    </div>
  );
}
