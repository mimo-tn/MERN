import React from 'react';
import { useParams } from 'react-router';
import Hello from './Hello';
import Number from './Number';
const Result = () => {
    const {param} = useParams();
    return(
        !isNaN(param)?<Number number = {param}/>:<Hello word = {param}/>
    );
}
export default Result;