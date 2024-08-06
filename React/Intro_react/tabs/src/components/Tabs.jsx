import React from "react";

const Tabs = (props) =>{
    const items = Array.from({ length: props.NumTab }, (_, i) => i+1);
    const onClickHandler = (e, value) => {
        e.preventDefault();
        props.SelectTab(value);
    }
    return(
        <div className="d-flex justify-content-around">
            {
                items.map((i) => (
                <div key={i} className="btn-group">  
                    <input type="button"
                    className="btn btn-light btn-lg"
                    value={`Tab numéro ${i}`}
                    onClick={ (e) => onClickHandler(e, i) }/>
                </div>
            ))}
        </div>
    );
}
export default Tabs;

 // return(
    //         <div className="d-flex justify-content-around">
    //             {items.map((i) => (
    //             <div key={i} className="btn-group">
    //                 <input type="button" className="btn btn-light btn-lg " data-bs-toggle="dropdown" aria-expanded="false" value={`Tab numéro ${i}`}/>
    //             </div>
    //             ))}
    //         </div>
    // );