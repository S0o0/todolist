import {type JSX} from 'react';
import type { Task, TaskStatus } from '../Task';

interface TaskPreviewProps {
  task: Task;
  onDone: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskPreview: React.FC<TaskPreviewProps> = ({ task, onDone, onDelete }) => {
  const getStatusEmoji = (status: TaskStatus): JSX.Element => {
    switch (status) {
      case "todo": return <span>⏳</span>;
      case "doing": return <span>⌚️</span>;
      case "done": return <span>✅</span>;
      default: return <span></span>;
    }
  };

  return (
    <li>
      {getStatusEmoji(task.status)} {task.content}
      <br />
      <span className="date">
        Initiée le {task.createdAt.toLocaleDateString('fr-FR')}
      </span>
      <br />
      {task.completedAt && (
        <span className="date">
          Terminée le {task.completedAt.toLocaleDateString('fr-FR')}
        </span>
      )}
      <p>
        {task.status !== 'done' && (
          <button className ="validate" onClick={() => onDone(task.id)}>✅</button>
        )}
      </p>
      <p>
        {task.status === 'done' && (
        <button className ="delete" onClick={() => onDelete(task.id)}>
            🗑️
        </button>
)}
      </p>
    </li>
  );
};

export default TaskPreview;