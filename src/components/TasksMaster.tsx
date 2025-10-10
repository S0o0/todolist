import React from 'react';
import TaskPreview from './TaskPreview';
import type { Task } from '../Task';

interface TasksMasterProps {
  tasks: Task[];
  onDone: (id: string) => void;
  onDelete: (id: string) => void;
}

const TasksMaster: React.FC<TasksMasterProps> = ({ tasks, onDone,  onDelete }) => {
  return (
    <ul>
      {tasks.map((task) => (
         <TaskPreview 
          key={task.id} 
          task={task} 
          onDone={onDone} 
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TasksMaster;