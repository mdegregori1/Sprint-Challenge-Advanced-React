import React from "react";




const Players = (props) => {
   
    return(
        <div className = "container">
            {props.playerSearch.map(e=> (
                <div>
                    <h2>{e.name}</h2>
                    <h3> Country: {e.country}</h3>
                    <h5> Searches: {e.searches}</h5>
                    <h5>ID: {e.id}</h5>
                </div>
            ))}
        </div>
    )

}

export default Players;

