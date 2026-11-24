
import React, { useSyncExternalStore } from "react";

const subscribe = (callback) => {

    window.addEventListener("online", callback);
    window.addEventListener("offline", callback);

    return () => {
        window.removeEventListener("online", callback);
        window.removeEventListener("offline", callback);
    };
};

const getSnapshot = () => {
    return navigator.onLine;
};

const UseSyncExternalStore = () => {

    const isOnline = useSyncExternalStore(
        subscribe,
        getSnapshot
    );

    return (
        <div>
            <h2>Internet Status</h2>

            {isOnline ? (
                <h3 style={{ color: "green" }}>
                    You are Online
                </h3>
            ) : (
                <h3 style={{ color: "red" }}>
                    You are Offline
                </h3>
            )}
        </div>
    );
};

export default UseSyncExternalStore;
