import React, { useRef, useState } from 'react'
import "./Todo.css"

const Todo = () => {
    const [task, setTask] = useState([])
    const inputEl = useRef()
    const [newTask, setNewTask] = useState("")
    const [complete,setComplete] = useState(false)
    const handleAddTask = () => {
        setTask((preve) => {
            return [ newTask,...preve]
        })
        inputEl.current.focus();
        setNewTask("")
    }
    console.log(newTask)
    // console.log(task)
    const handleChnage = (e) => {
        setNewTask(e.target.value)
        console.log(inputEl)
    }

   
    const DisplayTask = task.map((preve, index) => {
        return (
            <div 
                key={index} 
                className="ListTodo" 
                style={{background : complete ? "blueviolet" : ""}}
                onClick={(e)=>setComplete(preve = !preve)}
            >
                <div className='TaskName'>{preve}</div>
            </div>
        )
    })
    return (
        <div className='TodoContainer'>
            <h2>Todo</h2>
            <div className='TodoInputButton'>
                <input
                    ref={inputEl}
                    type="text"
                    placeholder='Enter Todo'
                    onChange={handleChnage}
                    value={newTask}
                />
                <button onClick={handleAddTask}>Add Todo</button>
            </div>
            <div className='ListofTodo'>
                {DisplayTask}
            </div>
        </div>
    )
}

export default Todo