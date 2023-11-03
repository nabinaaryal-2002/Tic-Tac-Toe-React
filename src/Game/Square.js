import React from 'react'
import "./Tictactoe"

const Square = ({value, clickBtn, index}) => {
  return (
    <>
      <button onClick={()=>{clickBtn(index)}}>{value}</button>
      
    </>
  )
}

export default Square
