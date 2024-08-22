import { useState, useEffect } from 'react';
import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import styles from './MyComponent.module.css';

const Edit = () => {
    const { id } = useParams();
    const [author, setAuthor] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();

    const updateAuthor = (e) => {
        e.preventDefault();

          // Reset errors
        setNameError('');
        setErrors([]);
        let isValid = true;
          // Name validation
        if (name.trim() === '') {
            setNameError('Name Require : error from Front');
            isValid = false;
        }
          // If all validations pass, send the request
        if (isValid) {
            const newObject = { name };
            console.log(newObject);
            axios.patch(`http://localhost:8000/Authors/${id}/edit`, newObject)
                .then((res) => {
                    console.log(res.data);
                      // Reset form fields
                    setName('');
                    navigate("/");
                })
                .catch(err => {
                      const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                      const errorArr = []; // Define a temp error array to push the messages in
                      for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                        errorArr.push(errorResponse[key].message)
                    }
                    // Set Errors
                    setErrors(errorArr);
                })
        }
    };

    useEffect(() => {
        axios.get(`http://localhost:8000/Authors/${id}`)
        .then(res => {
            setAuthor(res.data.Author);
            setName(res.data.Author[0].name); 
            setLoaded(true);
            console.log(res.data.Author);
        })
        .catch((err) => {
            console.error(err);
            setLoaded(true); // Set to true to avoid infinite loading state
        });
    }, [id]);

    return (
        <div className="d-flex justify-content-between flex-column p-2">
            <div className={styles.comment}>
                <form onSubmit={updateAuthor}>
                    <div className="w-100">
                        <div className="card-footer py-3 border-0" style={{ backgroundColor: "#f8f9fa" }}>
                            {!loaded ? (
                                <p>Loading author...</p>
                            ) : author ? (
                                <div className="d-flex flex-start w-100 flex-column p-3 m-2">
                                    <div className="head_bloc d-flex justify-content-between grid">
                                        <div className="head_bloc_left w-100 d-flex flex-column g-col-6">
                                            <div data-mdb-input-init className="form-outline w-100">
                                                <label className="form-label" htmlFor="name">Name:</label>
                                                <input
                                                    type="text"
                                                    style={{ backgroundColor: "#fff" }}
                                                    className="form-control w-50"
                                                    id="name"
                                                    name="name"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>
                                            {nameError && (
                                                <div className="alert alert-danger" role="alert">
                                                    {nameError}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        {errors.map((err, i) => {
                                            return <p key={i} style={{ color: "red" }}>{err}</p>
                                        })}
                                    </div>   
                                    <div className="float-end mt-2 pt-1 w-25 d-flex justify-content-between">
                                        <input
                                            type="submit"
                                            className="btn btn-primary btn-sm"
                                            value="Update"
                                        />
                                        <Link 
                                            to="/"
                                            className="btn btn-outline-primary btn-sm"
                                        >
                                            Back
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                <p>No author found.</p>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Edit;
