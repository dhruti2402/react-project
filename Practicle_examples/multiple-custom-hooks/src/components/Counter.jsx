import React from 'react'
import useCounter from '../hooks/useCounter'

const Counter = () => {

    const { count, increment, decrement, reset } = useCounter(0)

    return (
        <section>
        
            <h2>Counter: {count}</h2>

            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
            <button onClick={reset}>Reset</button>
        
        </section>
    )
}

export default Counter