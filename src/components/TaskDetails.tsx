import { useParams, Link } from "react-router-dom";
import type { Task } from "../Task";

interface TaskDetailsProps {
  tasks: Task[];
}

const TaskDetails: React.FC<TaskDetailsProps> = ({ tasks }) => {
  const { taskId } = useParams<{ taskId: string }>();
  const task = tasks.find(t => t.id === taskId);

  if (!task) return <p>Tâche introuvable</p>;

  return (
    <div>
      <h2>Détails de la tâche</h2>
      <p><strong>Contenu :</strong> {task.content}</p>
      <p><strong>Status :</strong> {task.status}</p>
      <p><strong>Initiée le :</strong> {task.createdAt.toLocaleDateString()}</p>
      {task.completedAt && <p><strong>Terminée le :</strong> {task.completedAt.toLocaleDateString()}</p>}
      <Link to="/">← Retour à la liste</Link>
    </div>
  );
};

export default TaskDetails;