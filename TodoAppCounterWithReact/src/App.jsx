import { useState } from 'react'
import './App.css'
import Counter from './components/Counter/Counter'
import ToDoApp from './components/ToDo/ToDoApp'
import Calculator from './components/Calculator/Calculator'

function App() {

  return (
    <>
      <Counter />
      <ToDoApp />
      <Calculator />
    </>
  )
}

export default App
