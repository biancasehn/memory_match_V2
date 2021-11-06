import useStore from "../../../store";
import style from "./style.module.css";

export function ResetButton({ content, background, boxShadow }) {
  const resetGame = useStore((state) => state.resetGame);

  return (
    <button
      className={style.resetButton}
      style={{ background: background, boxShadow: boxShadow }}
      onClick={resetGame}
    >
      {content}
    </button>
  );
}
