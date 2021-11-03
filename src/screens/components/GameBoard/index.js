import { useState, useEffect } from 'react';

import { CARDS } from '../../../constants/cards.js'
import style from './style.module.css'

export function Board() {

    const [flippedCard, setFlippedCard] = useState(() => CARDS.map(() => false));
    const [compareContent, setCompareContent] = useState([])
    // const [blockBoard, setBlockBoard] = useState(false)

    useEffect(() => {
        if(compareContent.length === 2) {
            compareCards()
        }
    }, [compareContent]);

    const compareCards = () => {
        if(compareContent[0] !== compareContent[1]) {                     
            const backToFalse = Object.keys(flippedCard).map((key) => {
                if(compareContent.includes(flippedCard[key])) {
                    return false
                } return flippedCard[key]
            })
            setTimeout(() => {
                setFlippedCard(backToFalse)
            }, 1500)
        }
        setCompareContent([])
    }

    return(
        <div className={style.container}>
            <div className={style.wrapper}>
                {CARDS.map((card, i) => {
                    return (
                        <div 
                            onClick={() => {
                                if (!flippedCard[i]) {
                                    setFlippedCard({...flippedCard, [i]: card});
                                    setCompareContent([...compareContent, card])
                                } 
                            }}
                            key={i} 
                            className={flippedCard[i] ? style.cardFlip : style.card} 
                            id={i}>
                                {flippedCard[i] 
                                ? <div className={style.back}>{card}</div> 
                                : <div className={style.front}>?</div>}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}