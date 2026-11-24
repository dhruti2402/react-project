import React from 'react'
import useCounter from '../hooks/UseCounter';

export const CounterExample = () => {

    const [count , increment, decrement, reset] = useCounter(0);

  return (
    
        <div>
            <h2>Custom Hook: useCounter</h2>

            <h1>Count: {count}</h1>

            <button onClick={increment}>
                Increment
            </button>

            <button onClick={decrement}>
                Decrement
            </button>

            <button onClick={reset}>
                Reset
            </button>
        </div>
    );
};
