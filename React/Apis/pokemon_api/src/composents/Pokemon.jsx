import React, {useState} from "react";

const Pokemon = (props) => {
    const [names,setName] = useState([])
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response =>{
        return response.json();
    }).then(response =>{
        const name = response.results.map(pokemon => pokemon.name);
        setName(name);
        
    }) 
    return(
        props.statbutton?
        <ul>
            {names.map((name, index) => <li key={index}>{name}</li>)}
        </ul>
        :<ul>
            <li>cliquer pour afficher tous les noms</li>
        </ul>
    );
}
export default Pokemon;