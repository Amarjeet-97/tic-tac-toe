import logo from './logo.svg';
import './App.css';
import Board from './component/board/Board';
import { useState } from 'react';
import ScoreBoard from './component/scoreBoard/ScoreBoard';

function App() {
  const [board, setBoard]= useState(Array(9).fill(null));
  const[xIsPlaying, setXIsPlaying]= useState(true);
  const [xScore,setXScore]= useState(0);
  const[oScore,setOScore]= useState(0);
  const [gameOver,setGameOver]=useState(false);
  const [tie,setTie]= useState(0);

  // winning condition
  const WIN_CONDITIONS=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];
  const handleBoxClick=(boxId)=>{
    const updateBoard= board.map((value,id)=>{
      if(id===boxId){
        return xIsPlaying===true?"X":"O"
      
      }else{
        return value;
      }
    })
    setBoard(updateBoard);
    setXIsPlaying(!xIsPlaying)
    const winner= checkWinner(updateBoard);

    if(winner){
      if(winner=="X"){
        setXScore(xScore+1);
        setGameOver(true)
      }else{
        setOScore(oScore+1);
        setGameOver(true);
      }
    }
    let filled=true;
    updateBoard.map((item)=>{
      if(item===null){
        filled=false;
      }
    })
    if(filled && winner!="X" && winner!="O"){
      filled=true;
      setTie(tie+1);
    }
  }

  const checkWinner=(updateBoard)=>{
    for(let i=0;i<WIN_CONDITIONS.length;i++){
      const [x,y,z]= WIN_CONDITIONS[i];
      if(updateBoard[x] && updateBoard[x]=== updateBoard[y] && updateBoard[y]===updateBoard[z]){
        console.log("winner");
        return updateBoard[x]
      }
    }

  }
  const reset=()=>{
    setGameOver(false)
    setBoard(Array(9).fill(null))
  }

  const restartGame=()=>{
    setGameOver(false)
    setOScore(0)
    setXScore(0)
    setBoard(Array(9).fill(null));
    setTie(0);
  }
  
  return (
    <div className="App">
    <ScoreBoard xScore= {xScore} oScore={oScore} tie={tie} playing= {xIsPlaying}/>
      <Board board={board} onClick={gameOver===true ? reset : handleBoxClick}/>
      <button className='btn' onClick={reset}>Play Again</button>
      <button className='btn' onClick={restartGame}>Restart Game</button>
    </div>
  );
}

export default App;
