import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./GlobalLoader.css";
import gvs from "./gvs.png"

const GlobalLoader = () => {
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleStart = () => setLoading(true);
        const handleStop = () => setTimeout(() => setLoading(false), 2000); // Show for 3 seconds

        handleStart(); // Start loading on route change
        handleStop();  // Stop loading after a delay
    }, [location]); // Run whenever the route changes

    return loading ? (
        <div className="loader-overlay bg-white">
            <div className="loader-image">
                <img
                    src={gvs} // Replace with your image
                    alt="Loading"
                />
            </div>
        </div>
    ) : null;
};

export default GlobalLoader;
