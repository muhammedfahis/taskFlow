import { Task as ITask } from "../entities/Task";

export interface ITaskInteractor {
   createTask(title: string, description: string): Promise<ITask>;
   findATask(id: string): Promise<ITask | null>;
   listTasks(): Promise< Array< ITask> | null>;
   updateTask(id:string,title: string, description: string, status: string): Promise<ITask | null>;
   deleteTask(id:string):Promise< string | null>;
   filterByStatus(status: string): Promise< Array< ITask> | null>;
}