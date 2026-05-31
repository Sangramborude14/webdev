import React, { useState, useEffect, useRef } from 'react';

function Stopwatch() {
    
    // State to track if the stopwatch is active
    const [isRunning, setIsRunning] = useState(false);
    
    // State to track how much time has passed in milliseconds
    const [elapsedTime, setElapsedTime] = useState(0);
    
    // useRef is used here to hold the Interval ID so it persists between renders
    // without causing re-renders when changed.
    const intervalIdRef = useRef(null); // Renamed for clarity (was intervaId)
    
    // Stores the timestamp of when the start button was pressed
    const startTimeRef = useRef(0);

    useEffect(() => {
        // If the stopwatch is running, start the interval
        if (isRunning) {
            // FIX 1: You must assign to '.current' when using useRef
            intervalIdRef.current = setInterval(() => {
                // Update elapsed time: Current Time - Start Time
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        // Cleanup function: runs when component unmounts or isRunning changes
        return () => {
            clearInterval(intervalIdRef.current);
        };
    }, [isRunning]);

    function start() {
        setIsRunning(true);
        // Calculate the new start time by subtracting the time already elapsed.
        // This allows the timer to resume from where it left off, rather than 0.
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setElapsedTime(0);
        setIsRunning(false); // FIX 2: Fixed typo (was 'flase')
    }

    function formatTime() {
        // FIX 3: Corrected Math logic
        // (1000ms * 60s * 60m) = Hours (Not used in return, but kept for logic)
        // let hours = Math.floor(elapsedTime / (1000 * 60 * 60)); 
        
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / 1000 % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        // FIX 4: Corrected variable mapping. 
        // Previously, you were padding 'hours' for every variable.
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${minutes}:${seconds}:${milliseconds}`;
    }

    return (
        <div className='stopwatch'>
            <div className='display'>{formatTime()}</div>
            <div className='controls'>
                <button className='start-button' onClick={start}>Start</button>
                <button className='stop-button' onClick={stop}>Stop</button>
                <button className='reset-button' onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

export default Stopwatch;