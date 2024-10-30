import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './todoapp.css'

const ToDoApp = () => {
    let [toDo, toDoSet] = useState('')
    let [toDoText, toDoTextSet] = useState([])

    return (
        <div className='todo-container'>
            <div className='header'>
                <input type="text"
                    placeholder='Enter your ToDo here'
                    value={toDo}
                    onChange={(e) => {
                        toDoSet(e.target.value)
                    }} />
                <button onClick={() => {
                    let obj = {
                        id: uuidv4(),
                        todo: toDo
                    }
                    toDoTextSet([...toDoText, obj])
                    toDoSet('')
                    // console.log(toDoText)
                }}>Add</button>
            </div>
            <div className="footer">
                <ul className='todo-list'>
                    {toDoText.map((elem, i) => {
                        return <li className="todo-item">
                            {elem.todo}
                            <button onClick={() => {
                                let arr = toDoText.filter(element => element.id != elem.id)
                                toDoTextSet(arr)
                            }}>Delete</button>
                            <button className="edit" onClick={() => {
                                let newToDo = prompt("enter new text", elem.todo)
                                const updatedToDoList = toDoText.map(el => {
                                    if (el.id === elem.id) {
                                        return { ...el, todo: newToDo };
                                    }
                                })
                                toDoTextSet(updatedToDoList);
                            }}>Edit</button>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ToDoApp