

const myBox = document.getElementById("myBox");

const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keyup", event=>{
    myBox.textContent = "😃";
    myBox.style.backgroundColor = "lightblue";
});


document.addEventListener("keydown",event =>{
        myBox.textContent = "😠";
    myBox.style.backgroundColor = "tomato";
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;//y = 0 is at top left corner   
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
})
