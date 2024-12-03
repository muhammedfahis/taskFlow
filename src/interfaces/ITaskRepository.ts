
import { Task as ITask } from "../entities/Task";


export interface ITaskRepository {
    create(title:string,description:string,status:string): Promise<ITask>;
    findOne(id: string): Promise<ITask | null>;
    findExistingOne(title: string): Promise<ITask | null>;
    updateOne(id: string,title:string,description:string,status:string): Promise<ITask | null>;
    deleteOne(id: string): Promise<string | null>;
    listTasks():Promise<Array<ITask> | null>;
    findByStatus(status: string):Promise<Array<ITask> | null>;
}