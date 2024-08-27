import React from 'react'
import styles from './MyComponent.module.css';

function Main() {
    return (
        <div className="d-flex justify-content-between flex-column p-2">
            <div className={styles.comment} style={{ backgroundColor: "#f8f9fa", height:"500px" }}> 
            </div>
        </div>
    )
}

export default Main