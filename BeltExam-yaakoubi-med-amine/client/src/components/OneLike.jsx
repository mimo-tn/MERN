import React, { useEffect, useState } from 'react';
import styles from './MyComponent.module.css';
import { useParams , Link , useNavigate} from 'react-router-dom';
import axios from 'axios';

const OneLike = () => {
    const { id } = useParams();
    const [like, setLike] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    
    useEffect(() => {
        axios.get(`http://localhost:8000/likes/${id}`)
        .then(res => {
            setLike(res.data.Like); 
            setLoaded(true);
            console.log(res.data.Like);
        })
        .catch((err) => {
            console.error(err);
            setLoaded(true); // Set to true to avoid infinite loading state
        });
    }, [id]);
    const deleteLike = (likeId) => {
        axios.delete(`http://localhost:8000/Likes/${likeId}/delete`)
            .then(res => {
                navigate("/");
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="d-flex justify-content-between flex-column p-2">
            <div className={styles.comment} style={{ backgroundColor: "#f8f9fa", height:"500px" }}> 
                <div className="d-flex justify-content-between flex-column p-2">
                    <div className={styles.comment}>
                        <div className='d-flex justify-content-between'>
                            <h3>Like Item</h3>
                            <Link to="/">go back home</Link>
                        </div>
                        <div className="w-100">
                            <div className="card-footer py-3 border-0" style={{ backgroundColor: "#f8f9fa" }}>
                                <div className="d-flex flex-start w-100 flex-column p-3 m-2">
                                    <div className="head_bloc d-flex flex-column">
                                        {/* use of ternary conditional for black Belt Multiple uses of Conditional Styling (x2)*/}
                                        {!loaded ? (
                                            <p>Loading like...</p>
                                        ) : like ? (
                                            <>
                                                <p>{like[0].thing || 'N/A'}</p>
                                                <p>{like[0].description || 'N/A'}</p>
                                                <label>Likes:</label>
                                                <p>{like[0].likes || 'N/A'}</p>
                                                <div className="d-flex flex-start w-100 justify-content-between">
                                                    <button className='btn btn-primary btn-sm' onClick={(e)=>{deleteLike(like[0]._id)}}>Delete this thing</button>
                                                    <Link to={`/likes/edit/${like[0]._id}`} className='btn btn-primary btn-sm'>Edit Name and Like</Link>
                                                </div>
                                            </>
                                        ) : (
                                            <p>No like found.</p>
                                        )}
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>      
    );
}

export default OneLike;
