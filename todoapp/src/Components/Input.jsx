import { useState } from 'react';
import moment from 'moment';
import './input.css';

const Addform = () => {
    const [task, setTask] = useState("");
    const [listTask, setList] = useState([]);
    const [editIndex, setEditIndex] = useState(null); 

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editIndex !== null) {
            
            setList(listTask.map((item, index) => 
                index === editIndex ? { ...item, task: task } : item
            ));
            setEditIndex(null);
        } else {
        
            let time = moment(Date.now()).format('DD MMMM YYYY, h:mm:ss A');
            let newTask = { task: task, time: time, completed: false };
            setList([newTask, ...listTask]);
        }
        setTask("");
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setTask(listTask[index].task);
    };

    const handleDelete = (index) => {
        setList(listTask.filter((_, position) => position !== index));
    };

    const handleComplete = (index) => {
        setList(listTask.map((item, position) => 
            position === index ? { ...item, completed: true } : item
        ));
    };

    return (
        <div id='inputContainer'>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add a task"
                    onChange={(e) => setTask(e.target.value)}
                    value={task}
                    name="task"
                    id="taskInput"
                />
                <button type='submit'>{editIndex !== null ? 'SAVE EDIT' : 'ADD TASK'}</button>
            </form>
            {listTask.map((x, index) => (
                <div key={index} id='onetsk' className={x.completed ? 'completed' : ''}>
                    <div>
                        <h2>{x.task}</h2>
                        <br />
                        <span id='times'>{x.time}</span>
                    </div>
                    <div id='controls'>
                        {!x.completed && (
                            <>
                                <span>
                                    <i className="fa fa-pencil" id='edit' aria-hidden="true" onClick={() => handleEdit(index)}></i>
                                </span>
                                <span>
                                    <i className="fa fa-check" id='complete' aria-hidden="true" onClick={() => handleComplete(index)}></i>
                                </span>
                            </>
                        )}
                        <span>
                            <i className="fa fa-trash" id='delete' aria-hidden="true" onClick={() => handleDelete(index)}></i>
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Addform;
