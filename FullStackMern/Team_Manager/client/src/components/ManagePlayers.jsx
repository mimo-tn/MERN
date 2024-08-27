import React, { useState, useEffect } from 'react';
import styles from './MyComponent.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ManagePlayers = () => {
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/players/list")
            .then(res => {
                console.log(res.data);
                setPlayers(res.data.Players);
                setLoaded(true);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const handleButtonClick = (index, status) => {
        setPlayers(players.map((player, i) => {
            if (i === index) {
                return { ...player, status }; // Update the selected status for this player
            }
            return player;
        }));
    };

    const getButtonStyle = (player, currentStatus) => {
        switch (currentStatus) {
            case 'Playing':
                return player.status === 'Playing' ? 'btn-success' : 'btn-secondary';
            case 'Not Playing':
                return player.status === 'Not Playing' ? 'btn-danger' : 'btn-secondary';
            case 'Undecided':
                return player.status === 'Undecided' ? 'btn-warning' : 'btn-secondary';
            default:
                return 'btn-secondary';
        }
    };

    return (
        <div className="d-flex justify-content-between flex-column p-2">
            <div className={styles.comment} style={{ backgroundColor: "#f8f9fa", height: "500px" }}>
                <div className="d-flex justify-content-between flex-column p-2">
                    <div className={styles.comment}>
                        <h2>Player Status - Game 1</h2>
                        <div className='d-flex justify-content-between w-50'>
                            <Link to={`#`}><h4>Game 1</h4></Link>|
                            <Link to={`#`}><h4>Game 2</h4></Link>|
                            <Link to={`#`}><h4>Game 3</h4></Link>
                        </div>
                        {!loaded ? (
                            <p>Loading players...</p>
                        ) : players.length > 0 ? (
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Team Name</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {players.map((player, i) => (
                                        <tr key={i}>
                                            <td>{player.name}</td>
                                            <td className='d-flex justify-content-between w-100'>
                                                <button
                                                    className={`btn w-25 ${getButtonStyle(player, 'Playing')}`}
                                                    onClick={() => handleButtonClick(i, 'Playing')}>
                                                    Playing
                                                </button>
                                                <button
                                                    className={`btn w-25 ${getButtonStyle(player, 'Not Playing')}`}
                                                    onClick={() => handleButtonClick(i, 'Not Playing')}>
                                                    Not Playing
                                                </button>
                                                <button
                                                    className={`btn w-25 ${getButtonStyle(player, 'Undecided')}`}
                                                    onClick={() => handleButtonClick(i, 'Undecided')}>
                                                    Undecided
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p>No players available.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagePlayers;
