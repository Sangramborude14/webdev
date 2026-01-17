


function rollDice(){
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i=0;i<document.getElementById("numOfDice").value;i++){
        const value = Math.floor(Math.random() *6) + 1;
        values.push(value);
        images.push(`<img src="dice/${value}.png">`);
        diceResult.textContent = `dice ${values.join(', ')}`;
        diceImages.innerHTML = images.join(' ');
    }

}
rollDice();