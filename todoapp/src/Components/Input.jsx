import { useState } from 'react';
import moment from 'moment';
import './input.css'



let Addform=()=>{
const [task,setTask]=useState("")

const [listTask,setList]=useState([])

const lockDefault=(e)=>{
    e.preventDefault();
    let time=moment(Date.now()).format('MMMM Do YYYY, h:mm:ss A');
    let newTask={task:task,time:time}
    setList([...listTask,newTask]);
    setTask("");
  
}
const handleEdit=(index)=>{
    console.log(index)
}

const handleDelete=(index)=>{
    console.log(index)
    setList(listTask.filter((_, position) => position !== index));
};

const handleComplete=(index)=>{
    console.log(index)

    listTask.map((_, position) => position == index);
    

}

        return (
                <div id='inputContainer'>
                    <form onSubmit={lockDefault}>
                        <input type="text" placeholder=" Add a task" onChange={(e)=>setTask(e.target.value)} value={task} name="task" id="taskInput"></input>
                        <button type='submit'>ADD TASK</button>
                    </form>
                        { listTask.map((x,index)=>{
                            return (
                                <div id='onetsk'>
                                            <div>
                                                <h2>{x.task}</h2>
                                                <br></br>
                                                <span id='times'>{x.time}</span>
                                            </div>
                                        
                                            <div id='controls'>
                                                <span><i className="fa fa-pencil" id='edit' aria-hidden="true" onClick={()=>(handleEdit(index))}></i></span>
                                                <span><i className="fa fa-trash" id='delete' aria-hidden="true" onClick={()=>handleDelete(index)}></i></span>
                                                <span><i className="fa fa-check" id='complete' aria-hidden="true" onClick={()=>handleComplete(index)}></i></span>
                                            </div>
                                
                                </div>
                            
                            )   
                        }) }
                </div>
            )
}

export default Addform;