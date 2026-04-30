import { useState, ChangeEvent } from "react";

type playerProps = {
    initialName: string;
    symbol: string;
    isActive: boolean;
}

export default function Player({ initialName, symbol, isActive }: playerProps) {
    const [playerName, setPlayerName] = useState<string>(initialName);
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const handleEditClick = () => {
        setIsEditing((editing) => !editing)
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPlayerName(e.target.value);
    }

    let playerNameTag = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        playerNameTag = <input type="text" required value={playerName} onChange={handleInputChange} />
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {playerNameTag}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}
