import React, { useState } from "react";
import styles from './MyComponent.module.css';

const Form = (props) =>{
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [comfimed_password, setComfPassword] = useState("")
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
                <input type="text" aria-label="First name" class="form-control" onChange={(e)=>{setFirstName(e.target.value)}}/>
            </div>
            <div class="input-group">
                <span class="input-group-text w-25">Last name</span>
                <input type="text" aria-label="Last name" class="form-control" onChange={(e)=>{setLastName(e.target.value)}}/>
            </div>
            <div class="input-group">
                <span class="input-group-text w-25">Email</span>
                <input type="email" aria-label="email" class="form-control" onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div class="input-group">
                <span class="input-group-text w-25">Password</span>
                <input type="password" aria-label="password" class="form-control" onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <div class="input-group">
                <span class="input-group-text w-25">Comfirme Password</span>
                <input type="password" aria-label="comfpassword" class="form-control" onChange={(e)=>{setComfPassword(e.target.value)}}/>
            </div>

            <button type="submit" class="btn btn-primary w-25">Submit</button>
        </form>
        
        </>
    );
}
export default Form;
