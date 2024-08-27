import React, { useEffect, useState } from 'react';
import styles from './MyComponent.module.css';
import { useParams , Link , useNavigate} from 'react-router-dom';
import axios from 'axios';

const OneAuthor = () => {
    const { id } = useParams();
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    
    useEffect(() => {
        axios.get(`http://localhost:8000/Authors/${id}`)
        .then(res => {
            setAuthor(res.data.Author); 
            setLoaded(true);
            console.log(res.data.Author);
        })
        .catch((err) => {
            console.error(err);
            setLoaded(true); // Set to true to avoid infinite loading state
        });
    }, [id]);
    const deleteAuthor = (authorId) => {
        axios.delete(`http://localhost:8000/Authors/${authorId}/delete`)
            .then(res => {
                navigate("/");
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="d-flex justify-content-between flex-column p-2">
            <div className={styles.comment}>
                <div className="w-100">
                    <div className="card-footer py-3 border-0" style={{ backgroundColor: "#f8f9fa" }}>
                        <div className="d-flex flex-start w-100 flex-column p-3 m-2">
                            <div className="head_bloc d-flex flex-column">
                                {!loaded ? (
                                    <p>Loading author...</p>
                                ) : author ? (
                                    <>
                                        <label>Name:</label>
                                        <p>{author[0].name || 'N/A'}</p>
                                        <label>Created At:</label>
                                        <p>{new Date(author[0].createdAt).toLocaleString() || 'N/A'}</p>
                                        <label>Updated At:</label>
                                        <p>{new Date(author[0].updatedAt).toLocaleString() || 'N/A'}</p>
                                    </>
                                ) : (
                                    <p>No author found.</p>
                                )}
                                <div className="d-flex flex-start w-50 justify-content-between">
                                    <Link to="/" className='btn btn-dark w-25'>Back</Link>
                                    <button className='btn btn-dark w-25' onClick={(e)=>{deleteAuthor(author[0]._id)}}>Delete</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>      
    );
}

export default OneAuthor;
