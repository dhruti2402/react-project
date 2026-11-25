import React from 'react'
import { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [count, setCount] = useState(0)

  return (

    <div>

        <h1>Count : {count}</h1>

        <button onClick={() => setCount (count + 1)}> Increment</button>

        <Child name = 'john' />
        
    </div>

      
  )
}

export default Parent