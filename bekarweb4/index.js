
function generatePassword(length,includeLowercase,includeUppercase,includeNumbers,includeSymbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars:"";
    allowedChars += includeUppercase ? uppercaseChars:"";
    allowedChars += includeNumbers ? numberChars:"";
    allowedChars += includeSymbols ? symbolChars:"";
    
    if(length <= 0){
        return 'password length must be at least 1';
    }
    if(allowedChars.length === 0){
        return 'At least one set of chars needs to be selected';
    }

    for(let i=0;i<length;i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}

function generate() {
    const passwordLength = Number(document.getElementById("number_input").value);
    
    const includeLowercase = document.getElementById("button2")?.checked ?? true;
    const includeUppercase = document.getElementById("button1")?.checked ?? true;
    const includeNumbers = document.getElementById("button3")?.checked ?? true;
    const includeSymbols = document.getElementById("button4")?.checked ?? true;

    const password = generatePassword(passwordLength,
                                    includeLowercase,
                                    includeUppercase,
                                    includeNumbers,
                                    includeSymbols);
    
    const resultDisplay = document.getElementById("passwordResult");
    if (resultDisplay) {
        resultDisplay.textContent = `\n${password}`;
    }
}