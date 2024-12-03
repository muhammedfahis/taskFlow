import express from 'express';
import 'reflect-metadata';
import { json } from 'body-parser';
import 'dotenv/config';
import { errorHandler } from './utils/middlewares/error-handler';
import { NotFoundError } from './utils/errors/not-found-error';

import { TaskRouter } from './routes/task';

const app = express();

app.use(json());


app.use('/api/tasks',TaskRouter);
app.all('*', (req, res, next) => {
    next(new NotFoundError())
});

app.use(errorHandler as express.ErrorRequestHandler);

export { app } ;