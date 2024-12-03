import { injectable } from "inversify";
import { ITaskRepository } from "../interfaces/ITaskRepository";
import { Task, TaskDoc } from "../models/taskModel";
import { Task as ITask, statusEnum } from '../entities/Task';



@injectable()
export class TaskRepository implements ITaskRepository {
   async findByStatus(status: string): Promise<Array<ITask> | null> {
        const tasks = await Task.find({ status : status });
        return tasks;
    }
   async listTasks(): Promise<Array<ITask> | null> {
        const tasks = await Task.find();
        return tasks;
    }
   async findExistingOne(title: string): Promise<ITask | null> {
        const existingTask = await Task.findOne({ title: title});
        return existingTask;
    }
   async findOne(id: string): Promise<ITask | null> {
        const existingTask = await Task.findById(id);
        return existingTask;
    }
   async create(title: string, description: string, status: statusEnum): Promise<ITask> {
        const task = Task.build({
            title,
            description,
            status
        });
        await task.save();
        return task;
    }
   async updateOne(id: string, title: string, description: string, status: string): Promise<ITask | null> {
        const task = await Task.findById(id);
        if(task) {
            task.set({
                title,
                description,
                status
            });
            await task.save();
        }
        return task;
    }
    async deleteOne(id: string): Promise<string | null> {
        await Task.deleteOne({_id : id});
        return 'Deleted Successfully'
    }

}