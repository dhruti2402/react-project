
import useOnlineStatus from "./hook/useOnlineStatus";

function App() {
    const isOnline = useOnlineStatus();

    return (
        <div>
            <h1>
                {isOnline ? "You are Online" : "You are Offline"}
            </h1>
        </div>
    );
}

export default App;
