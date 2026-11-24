
import React, { useRef } from "react";
import UseImperativeHandle from "./hooks/useImperative";
function App() {

    const childRef = useRef(null);

    return (
        <div>
            <h2>useImperativeHandle Example</h2>

            <UseImperativeHandle ref={childRef} />

            <br /><br />

            <button onClick={() => childRef.current.focusInput()}>
                Focus Input
            </button>

            <button onClick={() => childRef.current.clearInput()}>
                Clear Input
            </button>
        </div>
    );
}

export default App;
