import React from 'react';
import styles from './MyComponent.module.css';

const MyBody = () => {
    return(
        <div className="d-flex justify-content-between flex-column p-2">
            <div className={styles.comment}>
                <form action="/create/recommands/new" method="POST">
                    <div className="w-100">
                        <div className="card-footer py-3 border-0" style={{ backgroundColor: "#f8f9fa" }}>
                            <div className="d-flex flex-start w-100 flex-column p-3 m-2">
                                <div className ="head_bloc d-flex justify-content-between grid">
                                    <div className ="head_bloc_left w-100 d-flex flex-column g-col-6">
                                        <div data-mdb-input-init className="form-outline w-100">
                                            <label className="form-label" for="title">Title:</label>
                                            <input type="text" style={{ backgroundColor: "#fff" }} className="form-control" id="title" rows="4" name="title" />
                                        </div>
                                        <div data-mdb-input-init className="form-outline w-100">
                                            <label className="form-label" for="network">Network:</label>
                                            <input type="text" style={{ backgroundColor: "#fff" }} className="form-control" id="network" rows="4" name="network" />
                                        </div>
                                    </div>
                                    <div className ="head_bloc_right w-100 d-flex flex-column g-col-6 justify-content-between">
                                        <div data-mdb-input-init className="form-outline w-100">
                                            <label className="form-label" for="release_date">Release Date:</label>
                                            <input type="date" style={{ backgroundColor: "#fff" }} className="form-control" id="release_date" name="release_date" />
                                        </div>
                                    </div>
                                </div>
                                <div data-mdb-input-init className="form-outline w-100">
                                    <label className="form-label" for="comments">Comment:</label>
                                    <textarea className="form-control" style={{ backgroundColor: "#fff" }} id="comments" rows="7" name="comments"></textarea>
                                </div>
                            </div>
                            <div className="float-end mt-2 pt-1 w-25 d-flex justify-content-between">
                                <input  type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-sm" value="Submit"/>
                                <button id="cancelButton" type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-primary btn-sm">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default MyBody;