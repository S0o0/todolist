import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { tasksCollection } from './data'

function App() {
  const tasks = tasksCollection; // pas sûr s'il faut utiliser useStat à la place
  return (
    <>
      <h1>Todo List</h1>
      <p>Nombre de tâches : {tasks.length}</p>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.content}
          </li>
        ))}
      </ul>
    </>
  )
}
export default App