import React, { useState } from "react";

const Display = (props) =>{
    console.log(props.user)
    return(
        <>
            <fieldset>
                <legend>All Users</legend>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                                <th scope="col">comfirmed Password</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            props.user.map((one_user,i) =>{
                                return <tr>
                                            <td>{one_user.first_name}</td>
                                            <td>{one_user.last_name}</td>
                                            <td>{one_user.email}</td>
                                            <td>{one_user.password}</td>
                                            <td>{one_user.comfimed_password}</td>
                                        </tr>
                            })
                            
                        }
                        </tbody>
                    </table>
                
            </fieldset>
            
        </>

    );
}
export default Display;
