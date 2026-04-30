import { GameTurn } from "../App";

interface GameBoardProps {
    onSquareClick: (row: number, col: number) => void;
    turns: GameTurn[];
}

type playerSymbol = 'X' | 'O' | null;

const INITIAL_GAME_BOARD: playerSymbol[][] = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({ onSquareClick, turns }: GameBoardProps) {

    let gameBoard = INITIAL_GAME_BOARD;

    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
    }

    return (
        <ol id='game-board'>
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <button key={colIndex} onClick={() => onSquareClick(rowIndex, colIndex)}>{playerSymbol}</button>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}
