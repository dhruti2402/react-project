import { useState, memo } from "react";

const Child = memo(function Child({ name }) {
    console.log("Child component rendered");

    return <h2>Hello, {name}</h2>;
});

const AfterMemo = () => {
    const [count, setCount] = useState(0);

    console.log("Parent component rendered");

    return (
        <div>
            <h1>After Memoization</h1>

            <h2>Count: {count}</h2>

            <button onClick={() => setCount(count + 1)}>
                Increase Count
            </button>

            <Child name="Abc" />
        </div>
    );
}

export default AfterMemo;