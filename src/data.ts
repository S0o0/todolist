import type { Task } from "./Task";
import { v4 as uuidv4 } from 'uuid';

export const tasksCollection: Task[] = [
    {
        id: uuidv4(),
        content: 'Installer VS Code, Bun et Git',
        status: 'done',
        createdAt: new Date(),
        completedAt: new Date()
    },
    {
        id: uuidv4(),
        content: 'Apprendre TypeScript',
        status: 'doing',
        createdAt: new Date()
    },
    {
        id: uuidv4(),
        content: 'Apprendre React',
        status: 'doing',
        createdAt: new Date()
    },
    {
        id: uuidv4(),
        content: 'Réaliser mon TD',
        status : 'doing',
        createdAt: new Date()
    },
    {
        id: uuidv4(),
        content : 'Penser à saisir prénom et mon nom dans le fichier README.md',
        status: 'todo',
        createdAt: new Date()
    }
];