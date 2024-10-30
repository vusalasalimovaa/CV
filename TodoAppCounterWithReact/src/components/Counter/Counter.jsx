import React, { useState } from 'react'
import './counter.css'

const Counter = () => {
    let [count, setCount] = useState(0)
    let [newCount, newSetCount] = useState('')


    return (
        <div className="counter-container">
            <div className="counter-buttons">
                <button onClick={() => {
                    setCount(--count)
                }}>DEC</button>
                <span>{count}</span>
                <button onClick={() => {
                    setCount(++count)
                }}>INC</button>
            </div>

            <div className="input-container">
                <input type="number" value={newCount} onChange={(e) => {
                    newSetCount(e.target.value)
                }} />
                <button onClick={() => {
                    setCount(count = count - Number(newCount))
                    newSetCount('')
                }}>decrease</button>
                <button onClick={() => {
                    setCount(count = count + Number(newCount))
                    newSetCount('')
                }}>increase</button>
            </div>
        </div>
    )
}

export default Counter