import React from 'react';
import { useParams } from 'react-router';
import styles from './MyComponent.module.css';
const ThreeParam = () => {
    const {word, color, backgroundcolor} = useParams();
    return(
        <div className="d-flex justify-content-between flex-column p-2">
            <div className={styles.comment}>
                
                    <div className="w-100">
                        <div className="card-footer py-3 border-0" style={{ backgroundColor: `${backgroundcolor}` }}>
                            <h1 className="w-50 mx-auto" style={{ color: `${color}` }}>The word is : {word}</h1>
                        </div>
                    </div>
            </div>
        </div>
    );
}
export default ThreeParam;