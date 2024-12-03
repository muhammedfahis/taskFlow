import express from 'express';
import { INTERFACE_TYPE } from '../utils/appCont';
import { appContainer as container } from '../appContainer';
import { TaskController } from '../controllers/taskController';
import { validateRequest } from '../utils/middlewares/validate-request';
import { createTaskValidator } from '../validators/createTaskValidator';
import { taskIdValidator } from '../validators/taskIdValidator';
import { updateTaskValidator } from '../validators/updateTaskValidator';
import { taskStatusValidator } from '../validators/statusValidator';







const router = express.Router();

const controller = container.get<TaskController>(INTERFACE_TYPE.TaskController);

router.post('/',createTaskValidator,validateRequest,controller.createTask.bind(controller));
router.get('/',controller.listTasks.bind(controller));
router.get('/:id',taskIdValidator,validateRequest,controller.getSingleTask.bind(controller));
router.put('/:id',taskIdValidator,updateTaskValidator,validateRequest,controller.updateTask.bind(controller));
router.get('/status/:status',taskStatusValidator,validateRequest,controller.filterByStatus.bind(controller));
router.delete('/:id',taskIdValidator,validateRequest,controller.deleteTask.bind(controller));



export { router as TaskRouter } ;