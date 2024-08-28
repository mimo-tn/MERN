import React, { useState, useEffect } from 'react';
import styles from './MyComponent.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LikesList = () => {
    const [likes, setLikes] = useState(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/")
            .then(res => {
                console.log(res.data)
                setLikes(res.data.Likes)
                setLoaded(true);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div className="d-flex justify-content-between flex-column p-2">
            <div className={styles.comment} style={{ backgroundColor: "#f8f9fa", height:"500px" }}> 
                <div className="d-flex justify-content-between flex-column p-2">
                    <div className={styles.comment}>
                        <div className='d-flex justify-content-between flex-column'>
                            <h3>Like Dashboard</h3>
                            <p>Like these things!</p>
                        </div>
                        {/* use of ternary conditional for black Belt Multiple uses of Conditional Styling (x2)*/}
                        {!loaded ? (
                            <p>Loading Likes...</p>
                        ) : likes.length > 0 ? (
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">N°</th>
                                        <th scope="col">Thing</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Likes</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {likes.map((like, i) => (
                                        <tr key={i}>
                                            <th scope="row">{i + 1}</th>
                                            <td>{like.thing}</td>
                                            <td>{like.category}</td>
                                            <td>{like.likes}</td>
                                            <td><Link to={`/likes/${like._id}`}>
                                                <button>Show</button>
                                                </Link>
                                                </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        //use of ternary conditional for black Belt Multiple uses of Conditional Styling (x2)
                        ) : (
                            <p>No likes available.</p>
                        )}
                    <Link to={`/likes/new`}><p>Don't see what you like? Add your own!</p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LikesList;
