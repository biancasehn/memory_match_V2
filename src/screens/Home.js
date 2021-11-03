import { Header } from './components/Header/index.js'
import { Tracker } from './components/Tracker/index.js'
import { Board } from './components/GameBoard/index.js'
import { Modal } from './components/Modal/index.js'

export function Home() {
    return (
        <div>
            < Header />
            < Tracker />
            < Board />
            < Modal />
        </div>
    )
}
   