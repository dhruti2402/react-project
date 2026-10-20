import React from 'react'
import { useState , useRef } from 'react';
import '../components/StopWatch.css'

const StopWatch = () => {

    const [Time, setTime] = useState(0);

    //create useRef hook
    const timeRef = useRef(0)

    function handleStart(){

        // use useRef hook with current state
        timeRef.current = setInterval(() =>(
            setTime (Time => Time+1)
        ), 1000)
        
    }

    function handleStop(){

        clearInterval(timeRef.current);
        timeRef.current = null;

    }

    function handleReset(){
        handleStop();
        setTime(0);

    }
  return (
    <div className='stopwatch'>

          <h1>StopWatch : Time is {Time} Seconds</h1>

       <div className='action'>
          <button onClick={handleStart}>Start</button>

          <button onClick={handleStop}>Stop</button>

          <button onClick={handleReset}>Reset</button>

          </div>

    </div>
  )
}

export default StopWatch
