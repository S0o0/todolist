import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { tasksCollection } from './data'

function App() {
  const tasks = tasksCollection;
  return (
    <>
      <h1>Todo List</h1>
      <p>Nombre de tâches : {tasks.length}</p>
    </>
  )
}

export default App
