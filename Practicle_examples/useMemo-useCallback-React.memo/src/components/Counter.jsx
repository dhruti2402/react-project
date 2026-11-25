
import React, { useState } from "react";

const Counter = React.memo(() => {
    const [count, setCount] = useState(0);

    console.log("Counter rendered");

    return (
        <div>
            <h2>Counter: {count}</h2>

            <button onClick={() => setCount(prev => prev + 1)}>
                Increase Counter
            </button>
        </div>
    );
});

export default Counter;
