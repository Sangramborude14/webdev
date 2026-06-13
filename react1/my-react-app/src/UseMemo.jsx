import { useState } from "react";

function Parent(){
    const [count,setCount] = useState(0);

    return(
        <>
        <button onClick={() => setCount(count  + 1)}>
            Increment
        </button>
        <Child/>
        </>
    )
}

const Child = React.memo(function Child(){
    return (<h1>Hello</h1>)
})