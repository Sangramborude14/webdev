import { useMemo, useState } from "react";

function Meomo() {
    const [count,setCount] = useState(0);
    const [num,setNum] = useState(5);

    const doubled = useMemo(() => {
        console.log('Calculating');
        return num * 2;
    },[num]);

    return(<>
    <button onClick={() => setCount(c => c + 1)}>
        Count
    </button>
    <p>
        {doubled}
    </p>
    </>)
}