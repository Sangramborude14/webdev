const display = document.getElementById("div2");
let count = 0;
function increase(){
    count += 1;
    updateDisplay();
};
function decrease(){
    count -= 1;
    updateDisplay();
};
function reset(){
    count = 0;
    updateDisplay();
};
function updateDisplay(){
    display.textContent = `${count}`;
}
