// Creates an array containing the three possible choices for the game
const choices = ["rock", "paper", "scissors"]; 

// Grabs the HTML element where the player's choice will be shown
const playerDisplay = document.getElementById("playerDisplay"); 

// Grabs the HTML element where the computer's choice will be shown
const computerDisplay = document.getElementById("computerDisplay"); 

// Grabs the HTML element where the win/loss/tie message will be shown
const resultDisplay = document.getElementById("resultDisplay"); 

// Grabs the HTML element where the numerical player score is displayed
const playerScoreDisplay = document.getElementById("playerScoreDisplay"); 

// Initializes a variable to keep track of the player's score starting at zero
let playerScore = 0; 

// Defines the main function that runs every time a player clicks a button
function playGame(playerChoice) { 

    // Randomly selects an item from the 'choices' array (index 0, 1, or 2)
    const computerChoice = choices[Math.floor(Math.random() * 3)]; 
    
    // Creates an empty string variable to hold the outcome message later
    let result = ""; 

    // Checks if both choices are the same; if so, it's a tie
    if (playerChoice === computerChoice) { 
         result = "IT's A TIE!"; 
    } 
    else { 
        // If it's not a tie, use a switch to check the player's specific choice
        switch (playerChoice) { 
            case "rock": 
                // Uses a ternary operator: if computer picked scissors, win; else, lose
                result = (computerChoice === "scissors") ? "you Win" : "you lose"; 
                break; 
            case "paper": 
                // If player picked paper, they win only if computer picked rock
                result = (computerChoice === "rock") ? "you Win" : "you lose"; 
                break; 
            case "scissors": 
                // If player picked scissors, they win only if computer picked paper
                result = (computerChoice === "paper") ? "you Win" : "you lose"; 
                break; 
        } 
    } 

    // Updates the webpage text to show what the player chose
    playerDisplay.textContent = `PLAYER: ${playerChoice}`; 
    
    // Updates the webpage text to show what the computer chose
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`; 
    
    // Updates the webpage text to show the final result (Win/Lose/Tie)
    resultDisplay.textContent = result; 

    // Removes any existing color classes so they don't stack or conflict
    resultDisplay.classList.remove("greenText", "redText");   

    // Checks the result string to apply styling and update the score
    switch (result) { 
        case "you Win": 
            // Adds the green CSS class for a victory look
            resultDisplay.classList.add("greenText"); 
            // Increases the score variable by 1
            playerScore += 1; 
            // Updates the score display on the webpage with the new number
            playerScoreDisplay.textContent = playerScore; 
            break; 
        case "you lose": 
            // Adds the red CSS class for a defeat look
            resultDisplay.classList.add("redText"); 
            break; 
    } 
}