import { param } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import { statusEnum } from '../entities/Task';

export const taskStatusValidator = [
  param('status')
    .not()
    .isEmpty()
    .custom((input) => (Object.values(statusEnum)).includes(input))
    .withMessage('Please enter a valid status'),
   (req:Request, res:Response, next:NextFunction) => {
    console.log('taskStatusValidator middleware executed');
    next();
  }
];