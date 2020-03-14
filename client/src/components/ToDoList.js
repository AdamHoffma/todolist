import React, { useState, useEffect } from 'react'

const ToDoList = () => {
const [task, setTask] = useState([])

useEffect(() => {
    setTask(task)
}, [task])

const Submit = e => {
    e.preventDefault()
    setTask(task)
}
console.log("task", task)

    return (
        <div>
            <form className="form">
                <input 
                type="text"
                placeholder="newtask"
                className="input"
                value={task}
                onChange={({ target: { value }}) => setTask(value)}                
                />
                <button onClick={Submit}>Enter New Task</button>
            </form>
        </div>
    )
}

export default ToDoList

