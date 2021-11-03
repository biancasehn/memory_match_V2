import style from './style.module.css';

export function Modal() {
    return(
        <div id="modal" className={style.modalOpen}>
            <div className={style.modalWrap}>
                <h4>Well done!</h4>
                    <h6>Number of attempts: 4</h6>
            </div>
        </div>
    )
}