import { useState } from 'react';
import GameBoard from "./components/GameBoard";
import Player from "./components/player";
import Log from './components/Log';

export type GameTurn = {
    square: {
        row: number;
        col: number;
    }
    player: 'X' | 'O';
};

function App() {

    const [gameTurns, setGameTurns] = useState<GameTurn[]>([]);
    const [activePlayer, setActivePlayer] = useState<string>('X');

    const handleSquareButtonClick = (rowIndex: number, colInder: number) => {
        setActivePlayer((currentActivePlayer) => (currentActivePlayer === 'X') ? 'O' : 'X');
        setGameTurns((prevTurn: GameTurn[]) => {
            const currentPlayer = prevTurn[0]?.player === 'X' ? 'O' : 'X';
            return [{ square: { row: rowIndex, col: colInder }, player: currentPlayer }, ...prevTurn];
        })
    }


    return (
        <main>
            <div id="game-container">
                <ol id="players" className='highlight-player'>
                    <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
                    <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
                </ol>
                <GameBoard onSquareClick={handleSquareButtonClick} turns={gameTurns} />
            </div>
            <Log turns={gameTurns} />
        </main>
    )
}

export default App
