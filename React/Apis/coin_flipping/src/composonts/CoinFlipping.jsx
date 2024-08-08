import React, {useState} from "react";

function CoinFlipping(){
    const [result, setResult] = useState("");
    const tossCoin = () =>{
        return Math.random() > 0.5 ? "heads" : "tails";
    }
        
    const fiveHeads = () =>{
        return new Promise( (resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while(headsCount < 5 && attempts < 100){
            attempts++;
            const result = tossCoin();
            result ==="heads" ? headsCount++ : headsCount = 0;    
        }
        headsCount === 5 ? resolve(`It took ${attempts} tries to flip five "heads" in a row.`) : reject("The coin was flipped more than 100 times without getting five heads in a row.");
        
    });
    };
    fiveHeads()
        .then( res => console.log(res) )
        .catch( err => console.log(err) );
        console.log( "When does this run now?" );
        console.log(result)
    return(
        <h1>{result}salut</h1>
    );
}
export default CoinFlipping;
