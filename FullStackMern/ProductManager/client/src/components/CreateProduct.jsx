import React, { useState } from 'react';
import styles from './MyComponent.module.css';
import axios from 'axios';

const CreateProduct = ({ fetchProducts }) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [titleError, setTitleError] = useState('');
    const [priceError, setPriceError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');

    const createProduct = (e) => {
        e.preventDefault();

        // Reset errors
        setTitleError('');
        setPriceError('');
        setDescriptionError('');

        let isValid = true;

        // Title validation
        if (title.length < 3) {
            setTitleError('Title must be at least 3 characters');
            isValid = false;
        }

        // Price validation
        if (price < 3) {
            setPriceError('The price must be more than $3');
            isValid = false;
        }

        // Description validation
        if (description.length < 10) {
            setDescriptionError('The description must be at least 10 characters');
            isValid = false;
        }

        // If all validations pass, send the request
        if (isValid) {
            axios.post('http://localhost:8000/api/Products', {
                title,
                price,
                description,
            })
                .then((res) => {
                    console.log(res);
                    // Reset form fields
                    setTitle('');
                    setPrice(0);
                    setDescription('');
                    // Fetch updated products list
                    fetchProducts();
                })
                .catch((err) => console.log(err));
        }
    };

    const handleCancel = () => {
        // Reset form fields and error messages
        setTitle('');
        setPrice(0);
        setDescription('');
        setTitleError('');
        setPriceError('');
        setDescriptionError('');
    };

    return (
        <div className="d-flex justify-content-between flex-column p-2">
            <div className={styles.comment}>
                <form onSubmit={createProduct}>
                    <div className="w-100">
                        <div className="card-footer py-3 border-0" style={{ backgroundColor: "#f8f9fa" }}>
                            <div className="d-flex flex-start w-100 flex-column p-3 m-2">
                                <div className="head_bloc d-flex justify-content-between grid">
                                    <div className="head_bloc_left w-100 d-flex flex-column g-col-6">
                                        <div data-mdb-input-init className="form-outline w-100">
                                            <label className="form-label" htmlFor="title">Title:</label>
                                            <input
                                                type="text"
                                                style={{ backgroundColor: "#fff" }}
                                                className="form-control w-50"
                                                id="title"
                                                name="title"
                                                value={title}
                                                onChange={(e) => setTitle(e.target.value)}
                                            />
                                        </div>
                                        {titleError && (
                                            <div className="alert alert-danger" role="alert">
                                                {titleError}
                                            </div>
                                        )}
                                        <div data-mdb-input-init className="form-outline w-100">
                                            <label className="form-label" htmlFor="price">Price:</label>
                                            <input
                                                type="number"
                                                style={{ backgroundColor: "#fff" }}
                                                className="form-control w-50"
                                                id="price"
                                                name="price"
                                                value={price}
                                                onChange={(e) => setPrice(Number(e.target.value))}
                                            />
                                        </div>
                                        {priceError && (
                                            <div className="alert alert-danger" role="alert">
                                                {priceError}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div data-mdb-input-init className="form-outline w-100">
                                    <label className="form-label" htmlFor="description">Description:</label>
                                    <textarea
                                        className="form-control"
                                        style={{ backgroundColor: "#fff" }}
                                        id="description"
                                        rows="7"
                                        name="description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    ></textarea>
                                </div>
                                {descriptionError && (
                                    <div className="alert alert-danger" role="alert">
                                        {descriptionError}
                                    </div>
                                )}
                                <div className="float-end mt-2 pt-1 w-25 d-flex justify-content-between">
                                    <input
                                        type="submit"
                                        className="btn btn-primary btn-sm"
                                        value="Create"
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
    );
};

export default CreateProduct;
