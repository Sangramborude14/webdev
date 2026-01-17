import React,{useState} from 'react'


 function ToDoList(){

    const [tasks, setTasks] = useState(["react","js","flask","mongoDB"]);
    const [newtask,setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value)
    }
    function addTask(){
        if(newtask.trim() !== ""){   
            setTasks(t => ([...t,newtask]))
        setNewTask("");
        }
        else{
            window.alert(`wtf bro!!`)
        }
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_,i) => i !== index);
        setTasks(updatedTasks);
     }

    function moveTaskUp(index){
         if(index > 0){// u cannot move index[0] up
            const updatedTasks = [...tasks];
             [updatedTasks[index],updatedTasks[index- 1]] = [updatedTasks[index -1],updatedTasks[index] ];
             setTasks(updatedTasks);
         }
    }
    function moveTaskDown(index){
        if(index < tasks.length - 1){// u cannot move index[0] up
            const updatedTasks = [...tasks];
             [updatedTasks[index],updatedTasks[index + 1]] = [updatedTasks[index  + 1],updatedTasks[index] ];
             setTasks(updatedTasks);
         }
    }
     return(<><div className='to-do-list'>
        <h1>TO-DO-List</h1>

        <div>
            <input type='text' placeholder='enter a task' value={newtask} onChange={handleInputChange}></input>
            <button className="add-button"onClick={addTask}>Add</button>
            
        </div>
        <ol>
            {tasks.map((tasks,index) => <li key={index}><span className='text'>{tasks}</span>
                                        <button className='delete-button' onClick={() => deleteTask(index)}>🗑️</button>
                                        <button className='up-btn' onClick={() => moveTaskUp(index)}>⬆️</button>
                                        <button className='down-btn' onClick={() =>moveTaskDown(index)}>⬇️</button>

                                            </li>)}
        </ol>
     </div>
     </>)
 }
 export default ToDoList