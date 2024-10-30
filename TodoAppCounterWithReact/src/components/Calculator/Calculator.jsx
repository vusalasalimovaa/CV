import React, { useState } from 'react'
import './calculator.css'

const Calculator = () => {
    const [firstInput, setFirst] = useState('')
    const [secondInput, setSecond] = useState('')
    let [count, setCount] = useState(0)


    return (
        <div className="calculator-container">
            <span className="result">{count}</span>
            <input type="number" className="input-field"
                value={firstInput}
                onChange={(e) => {
                    setFirst(e.target.value)
                    // console.log(firstInput)
                }}
            />
            <input type="number" className="input-field"
                value={secondInput}
                onChange={(e) => {
                    setSecond(e.target.value)
                    // console.log(secondInput)
                }}
            />
            <div className="button-container">
                <button className="operator-button" onClick={() => {
                    setCount(count = Number(firstInput) + Number(secondInput))
                    setFirst('')
                    setSecond('')
                }}>+</button>
                <button className="operator-button" onClick={() => {
                    setCount(count = Number(firstInput) - Number(secondInput))
                    setFirst('')
                    setSecond('')

                }}>-</button>
                <button className="operator-button" onClick={() => {
                    setCount(count = Number(firstInput) * Number(secondInput))
                    setFirst('')
                    setSecond('')

                }}>*</button>
                <button className="operator-button" onClick={() => {
                    setCount(count = Number(firstInput) / Number(secondInput))
                    setFirst('')
                    setSecond('')

                }}>/</button>
            </div>

        </div>
    )
}

export default Calculator