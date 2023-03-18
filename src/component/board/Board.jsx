import React from "react";
import "./Board.css"
import Box from "../box/Box";
export default function Board({board,onClick, id}){
    return(
        <>
            <div className="board">
                {
                    board.map((item,id)=>(
                        <Box key={id} value={item} onClick={()=>item ==null && onClick(id)}/>
                    ))
                }
                
            </div>
        </>
    )
}