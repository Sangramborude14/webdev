const H1 = document.getElementById("H1");
const hexValues = [1,2,3,3,4,5,7,8,9,0,"A","B","C","D","E","F"];
const fontFamilies = [
    "Arial", 
    "Verdana", 
    "Georgia", 
    "Times New Roman", 
    "Courier New", 
    "Lucida Console", 
    "Impact", 
    "Comic Sans MS", 
    "Trebuchet MS", 
    "Arial Black"
];

function ranNum(){
    return Math.floor(Math.random() * hexValues.length);
}
function ranColor(){
    hexColor = "#";
    for(let i=0;i<6;i++){
        hexColor += hexValues[ranNum()];
    }
    return hexColor;
}
function updateBackground(){
    const newColor = ranColor();
    document.body.style.backgroundColor = newColor;
    H1.style.fontFamily = randomFont();
}

function randomFont(){
    const index = Math.floor(Math.random()*fontFamilies.length);
    return fontFamilies[index];
}


setInterval(updateBackground,500);
