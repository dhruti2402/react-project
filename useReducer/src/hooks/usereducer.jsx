import React, { useReducer } from 'react'

const Usereducer = () => {

    const reducer = (state, action) => {
        if (action.type === "INCREMENT") {
            return state + 1;
        }

        if (action.type === "DECREMENT") {
            return state - 1;
        }
    }

    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div className='flex flex-col justify-center items-center gap-3 h-lvh'>

            <h1 className='font-bold text-2xl'>
                {count}
            </h1>

            <button onClick={() => dispatch({ type: "INCREMENT" })}
                className='bg-cyan-600 hover:bg-cyan-700 text-white p-4 rounded-2xl'>
                INCREMENT
            </button>

            <button onClick={() => dispatch({ type: "DECREMENT" })}
                className='bg-red-600 hover:bg-red-700 text-white p-4  rounded-2xl'>
                DECREMENT
            </button>


        </div>
    )
}

export default Usereducer
