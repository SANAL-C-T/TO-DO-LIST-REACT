import './input.css'
let Addform=()=>{
return (
    <form>
        <div id='inputContainer'>
        <input type="text" placeholder=" Add a task" name="task" id="taskInput"></input>
        <button type='submit'>ADD TASK</button>
        </div>
       

    </form>
)
}

export default Addform;