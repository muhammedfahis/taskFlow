import { param } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';

export const taskIdValidator = [
  param('id')
    .not()
    .isEmpty()
    .custom((input) => mongoose.Types.ObjectId.isValid(input))
    .withMessage('Please enter a valid id'),
   (req:Request, res:Response, next:NextFunction) => {
    console.log('taskIdValidator middleware executed');
    next();
  }
];