function Button(){

    let count = 0;

    const handleClick = (e) =>  e.target.textContent = "Ouch🤕"
    const handleDoubleClick = (e) => e.target.textContent = "Double🐶"
return(<button onClick={(e) => handleClick(e)}
        onDoubleClick={(e) => handleDoubleClick(e)}
>CLick me😃 </button>);//use arrow function is neccessary
}
export default Button