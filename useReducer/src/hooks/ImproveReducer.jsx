import React, { useReducer } from 'react'

const ImproveReducer = () => {

    const initialState = {
        count: 0,
        inc: 2,
        dec: 2,
    }

    const reducer = (state, action) => {
        console.log(state, action);

        switch (action.type) {
            case "INCREMENT":
                return {
                    ...state,
                    count: state.count + 1
                }


            case "DECREMENT":
                return {
                    ...state,
                    count: state.count - 1
                }

            case "RESET":
                return {
                    ...state,
                    count: 0
                }


            default:
               return state;

    }
}

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className='flex flex-col justify-center items-center gap-3 h-lvh'>

            <h1 className='font-bold text-2xl'>
                {state.count}
            </h1>

            <button onClick={() => dispatch({ type: "INCREMENT" })}
                className='bg-cyan-600 hover:bg-cyan-700 text-white p-4 rounded-2xl'>
                INCREMENT
            </button>

            <button onClick={() => dispatch({ type: "DECREMENT" })}
                className='bg-red-600 hover:bg-red-700 text-white p-4  rounded-2xl'>
                DECREMENT
            </button>

            <button onClick={() => dispatch({ type: "RESET" })}
                className='bg-gray-600 hover:bg-gray-700 text-white p-4 rounded-2xl'>
                RESET
            </button>

        </div>
    )

}

export default ImproveReducer
