import { type JSX } from 'react';
import type { Task, TaskStatus } from '../Task';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


interface TaskPreviewProps {
  task: Task;
  onDone: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newContent: string) => void;
}

const TaskPreview: React.FC<TaskPreviewProps> = ({ task, onDone, onDelete, onEdit }) => {
  const navigate = useNavigate();
  const getStatusEmoji = (status: TaskStatus): JSX.Element => {
    switch (status) {
      case "todo": return <span>⏳</span>;
      case "doing": return <span>⌚️</span>;
      case "done": return <span>✅</span>;
      default: return <span></span>;
    }
  };
  const goToDetails = () => {
    navigate(`/tasks/${task.id}`);
  };

  return (
    <li>

      <Link to={`/tasks/${task.id}`} className="link">
        {getStatusEmoji(task.status)} {task.content}
      </Link>

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
        <button
          className="edit"
          onClick={() => {
            const newContent = prompt("Modifier le contenu :", task.content);
            if (newContent && newContent.trim() !== "") {
              onEdit(task.id, newContent.trim());
            }
          }}
        >
          ✏️
        </button>

        {task.status !== 'done' && (
          <button className="validate" onClick={() => onDone(task.id)}>✅</button>
        )}
        {task.status === 'done' && (
          <button className="delete" onClick={() => onDelete(task.id)}>
            🗑️
          </button>
        )}
      </p>
    </li>
  );
};

export default TaskPreview;