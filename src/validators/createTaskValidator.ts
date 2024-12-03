import { body } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const createTaskValidator = [
  body('title')
    .not()
    .isEmpty()
    .withMessage('Please enter a valid title'),
  
  body('description')
    .trim()
    .isLength({ min: 4, max: 100 })
    .withMessage('Description must between 4 and 100 characters'),
   (req:Request, res:Response, next:NextFunction) => {
    console.log('createTaskValidator middleware executed');
    next();
  }
];


