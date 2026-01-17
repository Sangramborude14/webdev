//updater function
import React, {useState} from 'react';



function MyComponent(){
    
    const [tasks,setTasks] = useState(["React","MongoDB","flask"])
    
    function handleTaskAdd(){
        const newTask = document.getElementById("taskInput").value;
       if(newTask === ""){
        window.alert(`Please enter a task`)
       }
       else{
         document.getElementById("taskInput").value = "";
        setTasks(t => [...t, newTask]);
       }
    }

    function handleTaskRemove(index){
        setTasks(tasks.filter((_,i) => i!== index));
    }
    
    return (<div>
        <h2>List of Tasks</h2>
        <ul>
            {tasks.map((task,index) => <li key={index} onClick={() => handleTaskRemove(index)}>{task}</li>)}
        </ul>
        <input type="text" id='taskInput' placeholder='Enter a task name' />
        <button onClick={handleTaskAdd} id='btn1'>ADD</button>


    </div>)
}

export default MyComponent