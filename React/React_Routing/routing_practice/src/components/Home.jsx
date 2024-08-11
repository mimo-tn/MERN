import React from 'react';
import styles from './MyComponent.module.css';
const Home = () => {
    return(
        <div className="d-flex justify-content-between flex-column p-2">
            <div className={styles.comment}>
                
                    <div className="w-100">
                        <div className="card-footer py-3 border-0" style={{ backgroundColor: "#f8f9fa" }}>
                            <h1 className="w-25 mx-auto">Welcome</h1>
                        </div>
                    </div>
            </div>
        </div>
    );
}
export default Home;