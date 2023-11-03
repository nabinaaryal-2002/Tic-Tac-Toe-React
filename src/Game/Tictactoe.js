import React, { useState } from 'react'
import Square from './Square'

const Tictactoe = () => {
  const[board, setBoard] = useState(Array(9).fill(null));
  const[player, setPlayer] = useState('X');
  const[gameOver, setGameOver] = useState(false);

  const handleClick = (index)=>{
    // console.log('click to button yes', index);

    if(board[index] || gameOver){
      return;
    }
    let newBoard = [...board];
    newBoard[index]= player;
    setBoard(newBoard);
    let winner = calculationWiner (newBoard);
    if(winner){
      setGameOver(true);
      alert(`Player ${winner} has won the game`);
    }else if(!newBoard.includes(null)){
      setGameOver(true);
      alert(`The game is Draw`);
    }else{
      setPlayer(player === 'X' ? '0' : 'X');
    }
   // setPlayer(player === 'X'? 'O':'X');

  }
  const calculationWiner = (square)=>{
    const lines= [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],

    ];
    for(let i=0; i<lines.length; i++){
      const [a,b,c] = lines[i];
      if(square[a] && square[a] === square[b]&&square[a] === square[c]){
        return square[a];
      }
    }
    return null;
  }
  const resetGame = ()=>{
    setBoard(Array(9).fill(null));
    // setPlayer('X')
    setGameOver(false)
  }
  return (
    <>
      <h1>oiii</h1>
      <div className="board">
      {board.map((item, index)=>{
        return <Square clickBtn ={handleClick} key = {index} value={item} index={index}/>
      })}
      
      </div>
      <button onClick={resetGame}>Reset Game</button>
    </>
  )
}

export default Tictactoe;
