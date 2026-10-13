import React from 'react'
import { useState } from 'react'
import "./Counter.css";

const Counter = () =>{

    const [Count, setCount] = useState(0);

  return (
    <div className='main-container'>

        <p id='pera'>you have clicked <span>{Count}</span> times</p>

        <div className='action'>

         <button id='updateBtn' onClick={() => {setCount (Count + 1)}}>Update Count</button>

        <button id='resetBtn' onClick={() => {setCount (Count - Count)}}>Reset</button>

        </div>

        
      
    </div>
  )
}

export default Counter
