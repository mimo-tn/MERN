import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './MyComponent.module.css';

const MyResults = ({ select, id }) => {
    const [results, setResults] = useState(null);
    const [error, setError] = useState(null);
    const [home, setHome] = useState(null);

    useEffect(() => {
        if (select && id) {
            axios.get(`https://swapi.dev/api/${select}/${id}`)
                .then(response => {
                    setResults(response.data);
                    setError(null);

                    if (select === "people" && response.data.homeworld) {
                        axios.get(response.data.homeworld)
                            .then(response => {
                                setHome(response.data);
                            })
                            .catch(err => {
                                console.error(err);
                                setError("Une erreur s'est produite lors de la récupération des données du monde d'origine.");
                            });
                    }
                })
                .catch(err => {
                    console.error(err);
                    setError("These aren't the droids you're looking for");
                });
        }
    }, [select, id]);

    if (error) {
        return <div className="d-flex justify-content-between flex-column p-2">
                    <div className={styles.comment}>
                        <div className="w-100">
                            <div className="card-footer py-3 border-0" style={{ backgroundColor: "#f8f9fa" }}>
                                <div className="d-flex flex-start w-100 flex-column p-3 m-2">
                                    <div data-mdb-input-init className="form-outline w-100">
                                        <p>{error}</p>
                                        <img src="/img/obione.webp" className="img-thumbnail" alt="Obi-Wan Kenobi saying 'These aren't the droids you're looking for.'" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>;
    }

    if (!results) {
        return <div className="alert alert-danger">Select your Search and enter the ID</div>;
    }

    return (
        <div className="d-flex justify-content-between flex-column p-2">
            <div className={styles.comment}>
                <div className="w-100">
                    <div className="card-footer py-3 border-0" style={{ backgroundColor: "#f8f9fa" }}>
                        <div className="d-flex flex-start w-100 flex-column p-3 m-2">
                            <div data-mdb-input-init className="form-outline w-100">
                                <label className="form-label" htmlFor="comments">{results.name}</label>
                                <textarea 
                                    className="form-control" 
                                    style={{ backgroundColor: "#fff" }} 
                                    id="comments" 
                                    rows="7" 
                                    name="comments"
                                    value={
                                        select === "people"
                                            ? `Height: ${results.height} cm\nMass: ${results.mass} kg\nHair Color: ${results.hair_color}\nSkin Color: ${results.skin_color}\nHomeworld: ${home ? home.name : 'Loading...'}` 
                                            : `Climate: ${results.climate}\nTerrain: ${results.terrain}\nSurface Water: ${results.surface_water}%\nPopulation: ${results.population}`
                                    }
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyResults;
