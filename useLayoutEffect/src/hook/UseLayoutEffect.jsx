import React from 'react'
import { useLayoutEffect, useRef } from 'react'

const UseLayoutEffect = () => {

    const boxRef = useRef(null);

    useLayoutEffect(() => {
        boxRef.current.style.backgroundColor = "orange"
    }, [])
    
    return (
        <div ref={boxRef}
            style={{ width: '200px', height: '200px', backgroundColor: 'lightblue' }}>

                Hello

        </div>
    )
}

export default UseLayoutEffect
