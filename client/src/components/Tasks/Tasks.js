import React from "react"

const Tasks = ({ task }) => {
    return (
        <div>
            {task.map(t => {
               return <h2 key={t.task}>{t.task}</h2>
            })}
            
        </div>
    )
        }

export default Tasks