import React, { useState } from 'react'

import Tasks from '../Tasks/Tasks'

const ToDoList = () => {
const [task, setTask] = useState({TaskName: ""})
  

const ChangeHandler = e => {    
    setTask({
        [e.target.name]: e.target.value
    })
}

const addTask = choreName => {
    const newChore = {
        TaskName: choreName
    }
    setTask({
        TaskName: [task.TaskName, newChore]
    })
}


const Submit = e => {
    e.preventDefault()
    addTask(task.TaskName)
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
            <Tasks task={task} />
        </div>
    )
}

export default ToDoList

