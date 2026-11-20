import React from 'react'
import { useState, useEffect, useDebugValue } from "react";

const useOnlineStatus = () => {

  const [isOnline, setIsOnline] = useState(navigator.onLine);


  useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    useDebugValue(isOnline ? "Online" : "Offline");

    return isOnline;
}

export default useOnlineStatus


