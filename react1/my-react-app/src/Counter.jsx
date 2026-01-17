import React, {useState} from 'react';
function Counter(){
     
    const [count,setCount] =useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }

    return(<div>
        <p>{count}</p>
        <div className="buttonContainer">
            <button onClick={increment} className="btn" onMouseEnter={increment}>Increase({count + 1})</button>
            <button onClick={decrement} className="btn" onMouseOver={decrement}>Decrease({count - 1})</button>
            <button onClick={reset} className="btn">Reset</button>
        </div>
    </div>)
}
export default Counter