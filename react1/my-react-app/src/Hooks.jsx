import { useEffect, useState } from "react";

function useCounter(){
    const [count,setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    return{count,increment};
}


function Profile() {
    const {count, increment} = useCounter();

    return(
        <button onClick={increment}>
            {count}
        </button>
    )
}

function useLocalStorage(key,initalValue){
    const [value, setValue] = useState(() => {
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved): initalValue;
    })

    useEffect(() => {
        localStorage.setItem(
            key,
            JSON.stringify(value)
        )
    },[key,value]);

    return [value, setValue];
}

function useToggle(){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(prev => !prev);
    }
    return [isOpen,toggle];
}
