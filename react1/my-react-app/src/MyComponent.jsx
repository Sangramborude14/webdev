//useEffect

import React,{useState, useEffect} from 'react';

function MyComponent(){
const [width,setWidth] = useState(window.innerWidth);
const [height,setHeight] = useState(window.innerHeight);

function handleResize(){
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
}

useEffect(() => {
    window.addEventListener("resize",handleResize);
    return () => {
        window.removeEventListener("resize",handleResize);
    }
},[]);

    return(<>
    <p>Window width: {width}px</p>
    <p>Window Height: {height}px</p>
    </>)

}
export default MyComponent;