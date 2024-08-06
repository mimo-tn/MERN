import React, { useState } from "react";
import styles from './MyComponent.module.css';

const Form = (props) =>{
    const [first_name, setFirstName] = useState("");
    const [first_nameError, setFirstNameError] = useState("");
    const [last_name, setLastName] = useState("");
    const [last_nameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [comfimed_password, setComfPassword] = useState("");
    const [comfimed_passwordError, setComfPasswordError] = useState("");
    const validateFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length > 0 && e.target.value.length < 2) {
            setFirstNameError("First Name must be at least 2 characters");
        } else {
            setFirstNameError("");
        }
    };

    const validateLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length > 0 && e.target.value.length < 2) {
            setLastNameError("Last Name must be at least 2 characters");
        } else {
            setLastNameError("");
        }
    };

    const validateEmail = (e) => {
        setEmail(e.target.value);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(e.target.value) && e.target.value.length > 0) {
            setEmailError("Invalid email format");
        } else {
            setEmailError("");
        }
    };

    const validatePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8 && e.target.value.length > 0) {
            setPasswordError("Password must be at least 8 characters");
        } else {
            setPasswordError("");
        }
    };

    const validateConfirmedPassword = (e) => {
        setComfPassword(e.target.value);
        if (e.target.value !== password && e.target.value.length > 0) {
            setComfPasswordError("Passwords do not match");
        } else {
            setComfPasswordError("");
        }
    };
    const createUser = (e) => {
        e.preventDefault()
        const newUser = {
            first_name,
            last_name,
            email,
            password,
            comfimed_password
        }
        props.AddUser(newUser)
    }
    return(
        <>
        <form className={styles.form} onSubmit={createUser}>
            <div class="input-group">
                <span class="input-group-text w-25">First name</span>
                <input type="text" aria-label="First name" class="form-control" onChange={validateFirstName}/>
            </div>
            {
                first_nameError ?
                <div class="alert alert-danger" role="alert">
                {first_nameError}
                </div>:
                ''
            }
            
            <div class="input-group">
                <span class="input-group-text w-25">Last name</span>
                <input type="text" aria-label="Last name" class="form-control" onChange={validateLastName}/>
            </div>
            {
                last_nameError ?
                <div class="alert alert-danger" role="alert">
                {last_nameError}
                </div>:
                ''
            }
            <div class="input-group">
                <span class="input-group-text w-25">Email</span>
                <input type="email" aria-label="email" class="form-control" onChange={validateEmail}/>
            </div>
            {
                emailError ?
                <div class="alert alert-danger" role="alert">
                {emailError}
                </div>:
                ''
            }
            <div class="input-group">
                <span class="input-group-text w-25">Password</span>
                <input type="password" aria-label="password" class="form-control" onChange={validatePassword}/>
            </div>
            {
                passwordError ?
                <div class="alert alert-danger" role="alert">
                {passwordError}
                </div>:
                ''
            }
            <div class="input-group">
                <span class="input-group-text w-25">Comfirme Password</span>
                <input type="password" aria-label="comfpassword" class="form-control" onChange={validateConfirmedPassword}/>
            </div>
            {
                comfimed_passwordError ?
                <div class="alert alert-danger" role="alert">
                {comfimed_passwordError}
                </div>:
                ''
            }
            <input type="submit" className="btn btn-primary w-25"hidden={
                first_nameError ||
                last_nameError ||
                emailError ||
                passwordError ||
                comfimed_passwordError}/>
            {/* <button type="submit" class="btn btn-primary w-25">Submit</button> */}
        </form>
        
        </>
    );
}
export default Form;
