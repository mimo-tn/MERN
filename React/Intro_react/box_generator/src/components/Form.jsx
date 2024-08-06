import React, { useState } from "react";
import styles from './MyComponent.module.css';

const Form = (props) =>{
    const [color, setColor] = useState("");
    

    const input_color = (e) => {
        setColor(e.target.value);
    };

    const createBox = (e) => {
        e.preventDefault();
        const boxStyle = {
            width: '100px',
            height: '100px',
            backgroundColor: color, // Changed from 'color' to 'backgroundColor'
        };
        props.AddBox(boxStyle);
        setColor(""); // Clear input field after submission
    };
    
    return(
        <>
        <form className={styles.form} onSubmit={createBox}>
            <div className="input-group d-flex justify-content-between">
                <span className="input-group-text w-25">Color</span>
                <input
                type="text"
                aria-label="Color"
                className="form-control"
                value={color}
                onChange={input_color}
                />
                <input
                type="submit"
                className="btn btn-primary w-25"
                value="Add Box"
                />
            </div>
        </form>
        
        </>
    );
}
export default Form;
