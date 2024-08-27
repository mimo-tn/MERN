import React, { useState, useEffect } from 'react';
import styles from './MyComponent.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PlayerList = () => {
    const [players, setPlayers] = useState(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/players/list")
            .then(res => {
                console.log(res.data)
                setPlayers(res.data.Players)
                setLoaded(true);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    const deletePlayer = (playerId) => {
        axios.delete(`http://localhost:8000/players/${playerId}/delete`)
            .then(res => {
                console.log(res.data)
                setPlayers(players.filter(players => players._id !== playerId));
            })
            .catch(err => console.error(err));
    }
    return (
        <div className="d-flex justify-content-between flex-column p-2">
            <div className={styles.comment} style={{ backgroundColor: "#f8f9fa", height:"500px" }}> 
                <div className="d-flex justify-content-between flex-column p-2">
                    <div className={styles.comment}>
                        <div className='d-flex justify-content-between w-25'>
                            <Link to={`/players/list`}><h3>List</h3></Link>
                            <Link to={`/players/addplayer`}><h3>Add Player</h3></Link>
                        </div>
                        {!loaded ? (
                            <p>Loading players...</p>
                        ) : players.length > 0 ? (
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">N°</th>
                                        <th scope="col">Team Name</th>
                                        <th scope="col">Preferred Position</th>
                                        <th scope="col">Action available</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {players.map((player, i) => (
                                        <tr key={i}>
                                            <th scope="row">{i + 1}</th>
                                            <td>{player.name}</td>
                                            <td>{player.preferred_position}</td>
                                            <td>
                                                <button    className='btn btn-danger'
                                                        onClick={(e)=>{deletePlayer(player._id)}}>
                                                        Delete</button></td>
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

export default PlayerList;
