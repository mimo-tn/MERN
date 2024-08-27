import React, { useState, useEffect } from 'react';
import styles from './MyComponent.module.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const CreatePlayer = () => {
    const [name, setName] = useState('');
    const [preferred_position, setPreferred_Position] = useState('');
    const [nameError, setNameError] = useState('');
    const [preferred_positionError, setPreferred_PositionError] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        const isNameValid = name.trim() !== '';
        const isPositionValid = preferred_position.trim() !== '';

        setIsFormValid(isNameValid && isPositionValid);
    }, [name, preferred_position]);
    const createPlayer = (e) => {
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
        if (preferred_position.trim() === '') {
            setPreferred_PositionError('Preferred position is required.');
            isValid = false;
        }



        // If all validations pass, send the request
        if (isValid) {
            const newObject = { 
                                name,
                                preferred_position
                                };
            console.log(newObject);
            axios.post('http://localhost:8000/players/addplayer', newObject)
                .then((res) => {
                    console.log(res.data);
                    // Reset form fields
                    setName('');
                    navigate("/players/list");
                    
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

    const handleCancel = () => {
        // Reset form fields and error messages
        setName('');
        setNameError('');
        setErrors([]);
    };

    return (
        <div className="d-flex justify-content-between flex-column p-2">
            <div className={styles.comment} style={{ backgroundColor: "#f8f9fa", height:"500px" }}> 
                <div className="d-flex justify-content-between flex-column p-2">
                    <div className={styles.comment}>
                        <h2>Add player</h2>
                    {/* <Link to={`/`}>Home</Link> */}
                        <form onSubmit={createPlayer}>
                            <div className="w-100">
                                <div className="card-footer py-3 border-0" style={{ backgroundColor: "#f8f9fa" }}>
                                    <div className="d-flex flex-start w-100 flex-column p-3 m-2">
                                        <div className="head_bloc d-flex justify-content-between grid">
                                            <div className="head_bloc_left w-100 d-flex flex-column g-col-6">
                                                <div data-mdb-input-init className="form-outline w-100">
                                                    <label className="form-label" htmlFor="name">Player Name:</label>
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
                                                <div data-mdb-input-init className="form-outline w-100">
                                                    <label className="form-label" htmlFor="preferred_position">Prefferred Position:</label>
                                                    <input
                                                        type="text"
                                                        style={{ backgroundColor: "#fff" }}
                                                        className="form-control w-50"
                                                        id="preferred_position"
                                                        name="preferred_position"
                                                        value={preferred_position}
                                                        onChange={(e) => setPreferred_Position(e.target.value)}
                                                    />
                                                </div>
                                                {preferred_positionError && (
                                                    <div className="alert alert-danger" role="alert">
                                                        {preferred_positionError}
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
                                                value="ADD"
                                                disabled={!isFormValid}
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

export default CreatePlayer;
