import { inject, injectable } from "inversify";
import { INTERFACE_TYPE } from "../utils/appCont";
import { ITaskInteractor } from "../interfaces/ITaskInteractor";
import { ITaskRepository } from "../interfaces/ITaskRepository";
import { BadRequestError } from "../utils/errors/bad-request-error";
import { NotFoundError } from "../utils/errors/not-found-error";
import { Task as ITask, statusEnum } from "../entities/Task";

@injectable()
export class TaskInteractor implements ITaskInteractor {
    private taskRepository: ITaskRepository;
    constructor(@inject(INTERFACE_TYPE.TaskRepository) taskRepository: ITaskRepository) {
        this.taskRepository = taskRepository;
    }
   async filterByStatus(status: string): Promise<Array<ITask> | null> {
        const tasks = await this.taskRepository.findByStatus(status);
        return tasks;
    }
   async createTask(title: string, description: string): Promise<ITask> {
      const status = statusEnum.PENDING;
      const existingTask: ITask | null = await this.taskRepository.findExistingOne(title);
      if(existingTask) {
            throw new BadRequestError('Task Already Exists');
      }
      const task = await this.taskRepository.create(title,description,status);
      return task;
    }
    async findATask(id: string): Promise<ITask | null> {
        const task = await this.taskRepository.findOne(id);
        return task;
    }
    async listTasks(): Promise<Array<ITask> | null> {
        const tasks = await this.taskRepository.listTasks();
        return tasks
    }
   async updateTask(id: string, title: string, description: string, status: string): Promise<ITask | null> {
        const isTaskExist = await this.taskRepository.findOne(id);
        if(!isTaskExist) {
            throw new NotFoundError();
           
        }  
        const updatedTask = await this.taskRepository.updateOne(id,title,description,status);
        return updatedTask        
    }
   async deleteTask(id: string): Promise<string | null> {
        const isTaskExist = await this.taskRepository.findOne(id);
        if(!isTaskExist) {
            throw new NotFoundError();
        }
        return await this.taskRepository.deleteOne(id);
    }
}