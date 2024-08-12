import React, { useState } from 'react';
import styles from './MyComponent.module.css';

const MyBody = ({ getinput }) => {
    const [search, setSearch] = useState("people");
    const [id, setId] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        getinput(search, id);
    };

    return (
        <div className="d-flex justify-content-between flex-column p-2">
            <div className={styles.comment}>
                <form onSubmit={handleSubmit}>
                    <div className="w-100">
                        <div className="card-footer py-3 border-0" style={{ backgroundColor: "#f8f9fa" }}>
                            <div className="d-flex flex-start w-100 flex-column p-3 m-2">
                                <div className="head_bloc d-flex justify-content-between grid">
                                    <div className="head_bloc_left w-100 d-flex flex-column g-col-6">
                                        <div data-mdb-input-init className="form-outline w-100">
                                            <label className="form-label" htmlFor="search">Search for :</label>
                                            <select
                                                className="form-select"
                                                aria-label="Default select example"
                                                name="search"
                                                onChange={(e) => setSearch(e.target.value)}
                                                value={search} // Sets default value
                                            >
                                                <option value="people">People</option>
                                                <option value="planets">Planets</option>
                                            </select>
                                        </div>
                                        <div data-mdb-input-init className="form-outline w-100">
                                            <label className="form-label" htmlFor="id">ID :</label>
                                            <input
                                                type="number"
                                                style={{ backgroundColor: "#fff" }}
                                                className="form-control"
                                                id="id"
                                                name="id"
                                                onChange={(e) => setId(e.target.value)}
                                                value={id} // Sets default value
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="float-end mt-2 pt-1 w-25 d-flex justify-content-between">
                                    <input
                                        type="submit"
                                        data-mdb-button-init
                                        data-mdb-ripple-init
                                        className="btn btn-primary btn-sm"
                                        value="Search"
                                    />
                                    <button
                                        id="cancelButton"
                                        type="button"
                                        data-mdb-button-init
                                        data-mdb-ripple-init
                                        className="btn btn-outline-primary btn-sm"
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

export default MyBody;
