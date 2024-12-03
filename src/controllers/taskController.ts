import { ITaskInteractor } from "../interfaces/ITaskInteractor";
import { inject, injectable } from "inversify";
import { INTERFACE_TYPE } from "../utils/appCont";
import { Request, Response, NextFunction } from "express";



@injectable()
export class TaskController {
    private taskInteractor: ITaskInteractor;
    constructor(@inject(INTERFACE_TYPE.TaskInteractor) taskInteractor: ITaskInteractor) {
        this.taskInteractor = taskInteractor;
    }

    async createTask(req: Request, res: Response, next: NextFunction) {
        try {
            const { title, description } = req.body;
            const task = await this.taskInteractor.createTask(title,description);
            res.status(201).send(task);
        } catch (error) {
            next(error);
        }
     }

     async listTasks(req: Request, res: Response, next: NextFunction) {
        try {
            const tasks = await this.taskInteractor.listTasks();
            res.status(200).send(tasks);
        } catch (error) {
            next(error);
        }
     }

     async getSingleTask(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const task = await this.taskInteractor.findATask(id);
            res.status(200).send(task);
        } catch (error) {
            next(error);
        }
     }

     async updateTask(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const { title, description, status } = req.body
            const updatedTask = await this.taskInteractor.updateTask(id,title,description,status);
            res.status(203).send(updatedTask);
        } catch (error) {
            next(error);
        }
     }

     async deleteTask(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const deleted = await this.taskInteractor.deleteTask(id);
            res.status(200).send(deleted);
        } catch (error) {
            next(error);
        }
     }

     async filterByStatus(req: Request, res: Response, next: NextFunction) {
        try {
            const { status } = req.params;
            const tasks = await this.taskInteractor.filterByStatus(status);
            res.status(200).send(tasks);
        } catch (error) {
            next(error);
        }
     }


}