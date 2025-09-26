import { useState, type JSX } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { tasksCollection } from './data'
import type { Task, TaskStatus } from './Task'
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
    const content = prompt("Veuillez saisir le contenu...");

    if (!content || content.trim() === "") {
      alert("Veuillez saisir un contenu");
      return;
    }
    addNewTask(content!);
  }

  const getStatusEmoji = (status: TaskStatus): JSX.Element => {
    switch (status) {
      case "todo":
        return <span>⏳</span>;
      case "doing":
        return <span>⌚️</span>;
      case "done":
        return <span>✅</span>;
      default:
        return <span></span>;
    }
  };

  return (
    <>
      <h1>Todo List</h1>
      <p>Nombre de tâches : {tasks.length}</p>
      <button onClick={handleClick}>Nouvelle tâche</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {getStatusEmoji(task.status)} {task.content}
          </li>
        ))}
      </ul>

    </>
  )
}
export default App