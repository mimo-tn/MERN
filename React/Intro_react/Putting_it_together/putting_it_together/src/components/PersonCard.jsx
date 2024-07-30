import React, { useState } from 'react';

const PersonCard = props => {
    const [age , setAge] = useState(props.age);
    const addAge = () => {
        setAge(age + 1);
    }

    return (
        <div>
            <h2>{props.first_name}, {props.last_name}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {props.hair_color}</p>
            <button onClick={addAge}>Birthday Button for {props.first_name} {props.last_name}</button>
        </div>
    );
}

export default PersonCard;
