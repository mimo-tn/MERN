import React from 'react';
import styles from './MyComponent.module.css';
import { Link } from 'react-router-dom';

const ProductList = ({ products, loaded }) => {
    return (
        <div className="d-flex justify-content-between flex-column p-2">
            <div className={styles.comment}>
                {!loaded ? (
                    <p>Loading products...</p>
                ) : products.length > 0 ? (
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">N°</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Description</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, i) => (
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                    <td><Link to={`/${product._id}/edit`}>Edit</Link> | <Link to={`/products/${product._id}`}>Details</Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No products available.</p>
                )}
            </div>
        </div>
    );
};

export default ProductList;
