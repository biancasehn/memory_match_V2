import style from './style.module.css';

export function Tracker() {
    return(
        <div className={style.board}>
            <p>Number of attempts: 0</p>
        </div>
    )
}