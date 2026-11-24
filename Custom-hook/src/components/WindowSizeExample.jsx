
import useWindowSize from "../hooks/useWindowSize";

const WindowSizeExample = () => {

    const { width, height } = useWindowSize();

    return (
        <div>
            <h2>Custom Hook: useWindowSize</h2>

            <h3>Window Width: {width}px</h3>

            <h3>Window Height: {height}px</h3>
        </div>
    );
};

export default WindowSizeExample;
