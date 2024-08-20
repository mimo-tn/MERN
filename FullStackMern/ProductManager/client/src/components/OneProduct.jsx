import React, { useEffect, useState } from 'react';
import styles from './MyComponent.module.css';
import { useParams , Link } from 'react-router-dom';
import axios from 'axios';

const OneProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/Products/${id}`)
        .then(res => {
            setProduct(res.data.Product); 
            setLoaded(true);
            console.log(res.data.Product);
        })
        .catch((err) => {
            console.error(err);
            setLoaded(true); // Set to true to avoid infinite loading state
        });
    }, [id]);

    // Extract the first product item if available
    const productItem = product.length > 0 ? product[0] : null;

    return (
        <div className="d-flex justify-content-between flex-column p-2">
            <div className={styles.comment}>
                <div className="w-100">
                    <div className="card-footer py-3 border-0" style={{ backgroundColor: "#f8f9fa" }}>
                        <div className="d-flex flex-start w-100 flex-column p-3 m-2">
                            <div className="head_bloc d-flex flex-column">
                                {!loaded ? (
                                    <p>Loading product...</p>
                                ) : productItem ? (
                                    <>
                                        <label>Title:</label>
                                        <p>{productItem.title || 'N/A'}</p>
                                        <label>Price:</label>
                                        <p>{productItem.price || 'N/A'}</p>
                                        <label>Description:</label>
                                        <p>{productItem.description || 'N/A'}</p>
                                        <label>Created At:</label>
                                        <p>{new Date(productItem.createdAt).toLocaleString() || 'N/A'}</p>
                                        <label>Updated At:</label>
                                        <p>{new Date(productItem.updatedAt).toLocaleString() || 'N/A'}</p>
                                    </>
                                ) : (
                                    <p>No product found.</p>
                                )}
                                <Link to="/products" className='btn btn-dark w-25'>Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>      
    );
}

export default OneProduct;
