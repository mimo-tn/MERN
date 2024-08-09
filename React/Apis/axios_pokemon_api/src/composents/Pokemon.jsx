import React, {useState} from "react";
import axios from 'axios';

const Pokemon = (props) => {
    const [names,setName] = useState([])
    axios.get("https://pokeapi.co/api/v2/pokemon")
    .then(response =>{
        console.log(response.data.results)
        const name = response.data.results.map(pokemon => pokemon.name);
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