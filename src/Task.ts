import { v4 as uuidv4 } from 'uuid';

export type Task = {
    id : string;
    content : string;
    createdAt : Date;
    completedAt?: Date;
    status : 'todo' | 'going' | 'done';
}