const myText = document.getElementById("myText");
const submit = document.getElementById("submit");
const resultElement = document.getElementById("resultElement");
let age ;

submit.onclick = function(){
age = myText.value;
age = Number(age);

if(age>=100){
    resultElement.textContent = `You are TOO OLD to enter this site 👴.`;
}else if(age == 0){
    console.log("You can't enter. You were just born 👶.")
     resultElement.textContent = `You can't enter. You were just born.`;

}else if(age >= 18){
    console.log("You are old enough to enter this site 👍.")
    resultElement.textContent = `You are old enough to enter this site👍`;

}else if(age <0){
    console.log("Your age can't be below 0 🤔.");
    resultElement.textContent =`Your age can't be below 0🤔`;

}
else{
    console.log("You must be 18+ to enter this site 🔞.");
    resultElement.textContent = `You must be 18+ to enter this site🔞`;
}
}