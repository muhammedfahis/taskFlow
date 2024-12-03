
import { Container } from "inversify";

import { ITaskRepository } from './interfaces/ITaskRepository';
import { TaskRepository } from './repositories/taskRepository';
import { ITaskInteractor } from './interfaces/ITaskInteractor';
import { TaskInteractor } from './interactors/taskInteractor';
import { INTERFACE_TYPE } from './utils/appCont';
import { TaskController } from './controllers/taskController';

const container = new Container();

container.bind<ITaskRepository>(INTERFACE_TYPE.TaskRepository).to(TaskRepository);
container.bind<ITaskInteractor>(INTERFACE_TYPE.TaskInteractor).to(TaskInteractor);
container.bind(INTERFACE_TYPE.TaskController).to(TaskController);

export { container as appContainer} ;