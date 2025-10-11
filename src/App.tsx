import { useState, type JSX } from 'react'
import './App.css'
import { tasksCollection } from './data'
import type { Task, TaskStatus } from './Task'
import { v4 as uuidv4 } from 'uuid';
import TaskForm from './components/TaskForm';
import TasksMaster from './components/TasksMaster';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskDetails from './components/TaskDetails';

function App() {
  //const tasks = tasksCollection;
  const [tasks, setTasks] = useState<Task[]>(tasksCollection);

  // Ajouter une nouvelle tâche
  const addNewTask = (content: string) => {
    const newTask: Task = {
      id: uuidv4(),
      content: content,
      status: 'todo',
      createdAt: new Date()
    };
    setTasks([newTask, ...tasks]);
  }

  // Gérer le clic sur le bouton Ajouter (se trouve désormais dans TaskForm)
  const handleClick = () => {
    const content = prompt("Veuillez saisir le contenu...");

    if (!content || content.trim() === "") {
      alert("Veuillez saisir un contenu");
      return;
    }
    addNewTask(content!);
  }

  // Afficher les emojis en fonction du statut (se trouve désormais dans TaskPreview)
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
  // Marquer une tâche comme faite
  const doneTask = (id: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: 'done' as TaskStatus, completedAt: new Date() };
      } else {
        return task;
      }
    })
    setTasks(updatedTasks);
  };
  // Supprimer une tâche
  const deleteTask = (id: string) => {
    // On filtre toutes les tâches sauf celle avec l'id correspondant
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };
  // Éditer une tâche
  const editTask = (id: string, newContent: string) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, content: newContent } : task
    );
    setTasks(updatedTasks);
  };
  return (
    <Router>
      <Routes>
        {/* Route principale */}
        <Route
          path="/"
          element={
            <>
              <h1>Todo List</h1>
              <p>Nombre de tâches : {tasks.length}</p>
              <TaskForm onAdd={addNewTask} />
              <TasksMaster
                tasks={tasks}
                onDone={doneTask}
                onDelete={deleteTask}
                onEdit={editTask}
              />
            </>
          }
        />

        {/* Route détails d'une tâche */}
        <Route path="/tasks/:taskId" element={<TaskDetails tasks={tasks} />} />
      </Routes>
    </Router>
  );
}
export default App