import { useState, useEffect } from 'react';
import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import styles from './MyComponent.module.css';

const Edit = () => {
    const { id } = useParams();
    const [like, setLike] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [likerate, setLikeRate] = useState('');
    const [thing, setThing] = useState('');
    const [likerateError, setLikeRateError] = useState('');
    const [thingError, setThingError] = useState('');
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const updateLike = (e) => {
        e.preventDefault();

        // Reset errors
        setThingError('');
        setLikeRateError('');
        setErrors([]);
        let isValid = true;

        // Validation
        if (thing.trim() === '') {
            setThingError('Thing is required: error from Front');
            isValid = false;
        }
        if (likerate === '') {
            setLikeRateError('Like rate is required: error from Front');
            isValid = false;
        }

        if (isValid) {
            const newObject = { thing, likes: likerate  };
            axios.patch(`http://localhost:8000/Likes/edit/${id}`, newObject)
                .then((res) => {
                    setThing('');
                    setLikeRate('');
                    navigate("/");
                })
                .catch(err => {
                    const errorResponse = err.response.data.errors;
                    const errorArr = [];
                    for (const key of Object.keys(errorResponse)) {
                        errorArr.push(errorResponse[key].message);
                    }
                    setErrors(errorArr);
                });
        }
    };

    useEffect(() => {
        axios.get(`http://localhost:8000/likes/${id}`)
        .then(res => {
            setLike(res.data.Like);
            setThing(res.data.Like[0].thing);
            setLikeRate(res.data.Like[0].likes);
            setLoaded(true);
        })
        .catch((err) => {
            console.error(err);
            setLoaded(true);
        });
    }, [id]);

    return (
        <div className="d-flex justify-content-between flex-column p-2">
            <div className={styles.comment} style={{ backgroundColor: "#f8f9fa", height: "500px" }}>
                <div className="d-flex justify-content-between flex-column p-2">
                    <div className={styles.comment}>
                        <div className='d-flex justify-content-between'>
                            <h3>Change Name</h3>
                            <Link to="/">go back home</Link>
                        </div>
                        <form onSubmit={updateLike}>
                            <div className="w-100">
                                <div className="card-footer py-3 border-0" style={{ backgroundColor: "#f8f9fa" }}>
                                    {!loaded ? (
                                        <p>Loading like...</p>
                                    ) : like ? (
                                        <div className="d-flex flex-start w-100 flex-column p-3 m-2">
                                            <div className="head_bloc d-flex justify-content-between grid">
                                                <div className="head_bloc_left w-100 d-flex flex-column g-col-6">
                                                    <div data-mdb-input-init className="form-outline w-100">
                                                        <input
                                                            type="text"
                                                            style={{ backgroundColor: "#fff" }}
                                                            className="form-control w-50"
                                                            id="thing"
                                                            name="thing"
                                                            value={thing}
                                                            onChange={(e) => setThing(e.target.value)}
                                                        />
                                                    </div>
                                                    {thingError && (
                                                        <div className="alert alert-danger" role="alert">
                                                            {thingError}
                                                        </div>
                                                    )}
                                                    <div data-mdb-input-init className="form-outline w-100">
                                                        <input
                                                            type="number"
                                                            style={{ backgroundColor: "#fff" }}
                                                            className="form-control w-50"
                                                            id="likerate"
                                                            name="likerate"
                                                            value={likerate}
                                                            onChange={(e) => setLikeRate(e.target.value)}
                                                        />
                                                    </div>
                                                    {likerateError && (
                                                        <div className="alert alert-danger" role="alert">
                                                            {likerateError}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div>
                                                {errors.map((err, i) => (
                                                    <p key={i} style={{ color: "red" }}>{err}</p>
                                                ))}
                                            </div>   
                                            <div className="float-end mt-2 pt-1 w-25 d-flex justify-content-between">
                                                <input
                                                    type="submit"
                                                    className="btn btn-primary btn-sm"
                                                    value="Confirm"
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <p>No like found.</p>
                                    )}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edit;
