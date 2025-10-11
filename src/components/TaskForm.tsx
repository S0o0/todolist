import React from 'react';
import { useForm } from 'react-hook-form';

interface TaskFormProps {
  onAdd: (content: string) => void;
}

interface FormValues {
  content: string;
}
// Formulaire pour ajouter une nouvelle tâche
const TaskForm: React.FC<TaskFormProps> = ({ onAdd }) => {
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    // Cas où le contenu est vide
    if (!data.content.trim()) {
      alert('Veuillez saisir un contenu');
      return;
    }
    onAdd(data.content);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Nouvelle tâche"
        {...register('content')}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default TaskForm;