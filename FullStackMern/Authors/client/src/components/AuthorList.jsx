import React, { useState, useEffect } from 'react';
import styles from './MyComponent.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AuthorList = () => {
    const [authors, setAuthors] = useState(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/Authors")
            .then(res => {
                console.log(res.data)
                setAuthors(res.data.Authors)
                setLoaded(true);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    const deleteAuthor = (authorId) => {
        axios.delete(`http://localhost:8000/Authors/${authorId}/delete`)
            .then(res => {
                console.log(res.data)
                setAuthors(authors.filter(authors => authors._id !== authorId));
            })
            .catch(err => console.error(err));
    }
    return (
        <div className="d-flex justify-content-between flex-column p-2">
            <div className={styles.comment}>
                <Link to={`/Authors/new/`}>Add Author</Link>
                <p>We have quotes by :</p>
                {!loaded ? (
                    <p>Loading authors...</p>
                ) : authors.length > 0 ? (
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">N°</th>
                                <th scope="col">Author</th>
                                <th scope="col">Action available</th>
                            </tr>
                        </thead>
                        <tbody>
                            {authors.map((author, i) => (
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{author.name}</td>
                                    <td><Link to={`/Authors/${author._id}/edit`}>Edit  </Link>
                                    | <Link to={`/Authors/${author._id}`}>Details  </Link> 
                                    |<button    className='btn btn-link'
                                                onClick={(e)=>{deleteAuthor(author._id)}}>
                                                Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No authors available.</p>
                )}
            </div>
        </div>
    );
};

export default AuthorList;
