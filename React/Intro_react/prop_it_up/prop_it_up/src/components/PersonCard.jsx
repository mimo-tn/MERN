import React from 'react';

const PersonCard = ({ person }) => {
    const { first_name, second_name, age, hair_color } = person;

    return (
        <div>
            <h2>{first_name}, {second_name}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {hair_color}</p>
        </div>
    );
}

export default PersonCard;
