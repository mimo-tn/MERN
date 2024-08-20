import { useState, useEffect } from 'react';
import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import styles from './MyComponent.module.css';

const Edit = ({ fetchProducts }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [titleError, setTitleError] = useState('');
    const [priceError, setPriceError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const navigate = useNavigate();

    const updateProduct = (e) => {
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
            axios.patch(`http://localhost:8000/api/Products/${id}`, {
                title,
                price,
                description,
            })
                .then((res) => {
                    console.log(res);
                    fetchProducts();
                    navigate("/products");
                })
                .catch((err) => console.log(err));
        }
    };

    useEffect(() => {
        axios.get(`http://localhost:8000/api/Products/${id}`)
            .then(res => {
                const productData = res.data.Product;
                setProduct(productData[0]);
                setTitle(productData[0].title);
                setPrice(productData[0].price);
                setDescription(productData[0].description);
                setLoaded(true);
            })
            .catch(err => {
                console.error(err);
                setLoaded(true);
            });
    }, [id]);

    return (
        <div className="d-flex justify-content-between flex-column p-2">
            <div className={styles.comment}>
                <form onSubmit={updateProduct}>
                    <div className="w-100">
                        <div className="card-footer py-3 border-0" style={{ backgroundColor: "#f8f9fa" }}>
                            {!loaded ? (
                                <p>Loading product...</p>
                            ) : product ? (
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
                                            value="Update"
                                        />
                                        <Link 
                                            to="/products"
                                            className="btn btn-outline-primary btn-sm"
                                        >
                                            Back
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                <p>No product found.</p>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Edit;
