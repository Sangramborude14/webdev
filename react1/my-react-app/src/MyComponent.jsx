import React,{useState,useEffect, useRef} from 'react';
function MyComponent(){

    let [number, setNumber]  =  useState(0);

    function handleClick(){
        setNumber(n => n +1);
    }
    return(<><button onClick={handleClick}>CLick Me</button></>)
}