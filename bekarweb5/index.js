// Reference to the HTML element where the time string will be displayed
const display = document.getElementById("display");

// Variable to store the ID of the setInterval timer (needed to stop/clear it)
let timer = null;

// Stores the timestamp (in ms) of when the stopwatch was effectively started
let startTime = 0;

// Tracks the total milliseconds passed while the stopwatch was running
let elapsedTime = 0;

// Boolean flag to track state and prevent overlapping intervals (double-clicks)
let isRunning = false;

function start() {
    // Only proceed if the timer isn't already running (logical guard)
    if (!isRunning) {
        // Adjust startTime to account for previously elapsed time (allows Resuming)
        startTime = Date.now() - elapsedTime;
        
        // Start a recurring loop that calls 'update' every 10 milliseconds
        timer = setInterval(update, 10);
        
        // Update state to reflect that the timer is active
        isRunning = true;
    }
}

function stop() {
    // Only proceed if the timer is currently active
    if (isRunning) {
        // Stop the recurring execution of the 'update' function
        clearInterval(timer);
        
        // Capture final time passed to ensure resume starts at the correct point
        elapsedTime = Date.now() - startTime;
        
        // Update state to reflect that the timer has paused
        isRunning = false;
    }
}

function reset() {
    // Stop any active interval to prevent memory leaks or logic errors
    clearInterval(timer);
    
    // Wipe all tracking variables back to their initial state
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    
    // Manually refresh the UI to show the starting zeros
    display.textContent = "00:00:00:00";
}

function update() {
    // Get the exact current timestamp in milliseconds
    const currentTime = Date.now();
    
    // Calculate the difference between 'now' and the 'start' point
    elapsedTime = currentTime - startTime;

    // Convert milliseconds into hours (1000ms * 60s * 60m)
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    
    // Get remaining minutes after subtracting hours, limited to 60
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    
    // Get remaining seconds after subtracting minutes, limited to 60
    let seconds = Math.floor(elapsedTime / (1000) % 60);
    
    // Get remainder of 1s (1000ms), then divide by 10 to show only 2 digits
    let miliseconds = Math.floor(elapsedTime % 1000 / 10);

    // Format all numbers to be at least 2 digits (e.g., '5' becomes '05')
    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");
    miliseconds = miliseconds.toString().padStart(2, "0");

    // Inject the formatted time string into the display element's text
    display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
}       