// src/components/TaskForm.tsx
import React, { useState } from 'react';

interface TaskFormProps {
  onAdd: (content: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAdd }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim() === '') {
      alert('Veuillez saisir un contenu');
      return;
    }
    onAdd(content);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Nouvelle tâche..."
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default TaskForm;