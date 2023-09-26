import { Router } from '../framework/Router.js';
import { getUser, createUser } from './user-controller.js';

export const userRouter = new Router();

userRouter.get('/users', getUser);

userRouter.post('/users', createUser);
