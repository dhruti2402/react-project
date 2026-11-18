import React from 'react'
import { useLayoutEffect, useRef, useState } from 'react';


const UseLayoutEffectTwo = () => {
    const divRef = useRef(null);
    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
        const divHeight = divRef.current.getBoundingClientRect().height;

        setHeight(divHeight);
    }, []);

    return (
        <div>
            <div
                ref={divRef}
                style={{
                    backgroundColor: 'lightblue',
                    padding: '20px',
                    width: '300px'
                }}
            >
                
                <p>This is useLayoutEffect second example.</p>
            </div>

            <h3>Div Height: {height}px</h3>
        </div>
    );

}

export default UseLayoutEffectTwo
