import useToggle from "../hooks/UseToggle";

const ToggleExample = () => {

    const [value, toggleValue, setValue] = useToggle(true);

    return (
        <div>
            <h2>Custom Hook: useToggle</h2>

            <button onClick={toggleValue}>
                Toggle Button
            </button>

            <br /><br />

            <button onClick={() => setValue(true)}>
                Show Message
            </button>

            <br /><br />

            <button onClick={() => setValue(false)}>
                Hide Message
            </button>

            <br /><br />

            {value && <h1>Custom hook in React.js</h1>}
        </div>
    );
};

export default ToggleExample;