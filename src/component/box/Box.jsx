import React from "react";
import "./Box.css"
export default function ({value,id,onClick}){
    return(
        <button className={`box ${value==="X"?"x":"O"}`} key={id} onClick={onClick}>{value} </button>    
    )
}