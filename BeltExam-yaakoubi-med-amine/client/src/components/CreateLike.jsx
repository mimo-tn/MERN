import React, { useState } from 'react';
import styles from './MyComponent.module.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const CreateLike = () => {
    // React II Single-state ObjectReact Black belt
    const [like, setLike] = useState({
        thing: '',
        description: '',
        category: '',
        likes: 0
    });
    // React II Single-state ObjectReact Black belt
    const [errors, setErrors] = useState({
        thingError: '',
        descriptionError: '',
        categoryError: ''
    });

    const navigate = useNavigate();

    const createLike = (e) => {
        e.preventDefault();
        setErrors({
            thingError: '',
            descriptionError: '',
            categoryError: ''
        });

        let isValid = true;

        // React 1 Multiple uses of Conditional Styling (x2) Black bellt
        //MERN II - Front-end Validation Black bellt
        if (like.thing.trim() === '') {
            setErrors(prevErrors => ({ ...prevErrors, thingError: 'Thing is required: error from Front.' }));
            isValid = false;
        }
        if (like.description.trim() === '') {
            setErrors(prevErrors => ({ ...prevErrors, descriptionError: 'Description is required: error from Front.' }));
            isValid = false;
        }
        if (like.category.trim() === '') {
            setErrors(prevErrors => ({ ...prevErrors, categoryError: 'Category is required: error from Front.' }));
            isValid = false;
        }

        if (isValid) {
            axios.post('http://localhost:8000/likes/new', like)
                .then((res) => {
                    console.log(res.data);
                    setLike({
                        thing: '',
                        description: '',
                        category: '',
                        likes: 0
                    });
                    navigate("/");
                })
                .catch(err => {
                    const errorResponse = err.response.data.errors;
                    const errorArr = [];
                    for (const key of Object.keys(errorResponse)) {
                        errorArr.push(errorResponse[key].message);
                    }
                    setErrors(prevErrors => ({ ...prevErrors, generalErrors: errorArr }));
                });
        }
    };

    const handleCancel = () => {
        // React II Single-state ObjectReact Black belt
        setLike({
            thing: '',
            description: '',
            category: '',
            likes: 0
        });
        // React II Single-state ObjectReact Black belt
        setErrors({
            thingError: '',
            descriptionError: '',
            categoryError: ''
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLike(prevLike => ({
            ...prevLike,
            [name]: value
        }));
    };

    return (
        <div className="d-flex justify-content-between flex-column p-2">
            <div className={styles.comment} style={{ backgroundColor: "#f8f9fa", height: "500px" }}>
                <div className="d-flex justify-content-between flex-column p-2">
                    <div className={styles.comment}>
                        <div className='d-flex justify-content-between'>
                            <h3>New Like</h3>
                            <Link to="/">Go back home</Link>
                        </div>
                        <form onSubmit={createLike}>
                            <div className="w-100">
                                <div className="card-footer py-3 border-0" style={{ backgroundColor: "#f8f9fa" }}>
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
                                                        value={like.thing}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                                {/* MERN II - Front-end Validation Black bellt */}
                                                {errors.thingError && (
                                                    <div className="alert alert-danger" role="alert">
                                                        {errors.thingError}
                                                    </div>
                                                )}
                                                <div data-mdb-input-init className="form-outline w-100">
                                                    <select
                                                        className="form-select"
                                                        id="floatingSelect"
                                                        name="category"
                                                        aria-label="Floating label select example"
                                                        value={like.category}
                                                        onChange={handleInputChange}
                                                    >
                                                        <option value="" disabled>Select category</option>
                                                        <option value="Person">Person</option>
                                                        <option value="Place">Place</option>
                                                        <option value="Thing">Thing</option>
                                                        <option value="Idea">Idea</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                </div>
                                                {/* MERN II - Front-end Validation Black bellt */}
                                                {errors.categoryError && (
                                                    <div className="alert alert-danger" role="alert">
                                                        {errors.categoryError}
                                                    </div>
                                                )}
                                                <div data-mdb-input-init className="form-outline w-100">
                                                    <textarea
                                                        className="form-control"
                                                        id="exampleFormControlTextarea1"
                                                        name="description"
                                                        rows="3"
                                                        value={like.description}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                                {/* MERN II - Front-end Validation Black bellt */}
                                                {errors.descriptionError && (
                                                    <div className="alert alert-danger" role="alert">
                                                        {errors.descriptionError}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div>
                                            {errors.generalErrors && errors.generalErrors.map((err, i) => (
                                                <p key={i} style={{ color: "red" }}>{err}</p>
                                            ))}
                                        </div>
                                        <div className="float-end mt-2 pt-1 w-50 d-flex justify-content-between">
                                            <input
                                                type="submit"
                                                className="btn btn-primary btn-sm"
                                                value="I like this!"
                                            />
                                            <button
                                                id="cancelButton"
                                                type="button"
                                                className="btn btn-outline-primary btn-sm"
                                                onClick={handleCancel}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateLike;
