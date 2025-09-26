import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { tasksCollection } from './data'
import type { Task } from './Task'
import { v4 as uuidv4 } from 'uuid';

function App() {
  //const tasks = tasksCollection;
  const [tasks, setTasks] = useState<Task[]>(tasksCollection);

  const addNewTask = (content: string) => {
    const newTask: Task = {
      id: uuidv4(),
      content: content,
      status: 'todo',
      createdAt: new Date()
    };
    setTasks([newTask, ...tasks]);
  }

  const handleClick = () => {
    const content = prompt("Saisissez le contenu de la nouvelle tâche");

    if (!content || content.trim() === "") {
      alert("Le contenu de la tâche ne peut pas être vide.");
      return;
    }
    addNewTask(content!);
  }
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
      <button onClick={handleClick}>Ajouter une tâche</button>
    </>
  )
}
export default App