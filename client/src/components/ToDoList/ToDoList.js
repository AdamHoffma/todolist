import React, { useState } from 'react'

const ToDoList = () => {
const [task, setTask] = useState({TaskName: ""})
  

const ChangeHandler = e => {    
    setTask( {
        [e.target.name]: e.target.value
    })
}


const Submit = newTask => {
    newTask.preventDefault()   
    const NewestTask = {
        TaskName: newTask
    }
    setTask({
        task: [...task, NewestTask]
    })
}
console.log("task", task)

    return (
        <div>
            <form className="form">
                <input 
                type="text"               
                className="input"
                name="TaskName"                
                value={task.TaskName}    
                onChange={ChangeHandler}                            
                />
                <button onClick={Submit}>Enter New Task</button>
            </form>
        </div>
    )
}

export default ToDoList

