import { useState } from 'react';
import './input.css'



let Addform=()=>{
const [task,setTask]=useState("")

const [listTask,setList]=useState([])

const lockDefault=(e)=>{
    e.preventDefault();
    setList([...listTask,task]);
    setTask("");
  
}

        return (
            <div id='inputContainer'>
            <form onSubmit={lockDefault}>
                <input type="text" placeholder=" Add a task" onChange={(e)=>setTask(e.target.value)} value={task} name="task" id="taskInput"></input>
                <button type='submit'>ADD TASK</button>
            </form>
                    { listTask.map((x)=>{
                        return (
                            <div id='onetsk'>
                                <h2>{x}</h2>
                                <div id='controls'>
                                <span>EDIT</span>
                                <span>DELETE</span>
                                <span>COMPLETED</span>
                                </div>
                              
                                </div>
                           
                        )   
                    }) }
            </div>
        )
}

export default Addform;