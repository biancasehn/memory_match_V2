import { useState } from 'react';

import { Header } from './components/Header/index.js'
import { Tracker } from './components/Tracker/index.js'
import { Board } from './components/GameBoard/index.js'
import { Modal } from './components/Modal/index.js'

export function Home() {
    const [displayModal, setDisplayModal] = useState(false);
    const [numberOfAttempts, setNumberOfAttempts] = useState(0)
    
    console.log("displayModal home", displayModal)

    return (
        <div>
            < Header />
            < Tracker numberOfAttempts={numberOfAttempts}/>
            < Board setDisplayModal={setDisplayModal} numberOfAttempts={numberOfAttempts} setNumberOfAttempts={setNumberOfAttempts}/>
            {displayModal &&
            < Modal displayModal={displayModal} numberOfAttempts={numberOfAttempts}/>
            }
        </div>
    )
}
   