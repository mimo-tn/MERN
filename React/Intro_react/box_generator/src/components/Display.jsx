import React from "react";


const Display = (props) =>{
    console.log(props.Box)
    return(
        <>
            <div className="d-flex flex-row">
                {
                    props.Box.map((oneBox, i) => {
                        return <div style={oneBox} key={i}>

                        </div>
                    })
                    
                }
                

            </div>
            
        </>

    );
}
export default Display;
