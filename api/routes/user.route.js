import express from 'express';
import {test, updateUser} from '../controller/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
import { deleteUser } from '../controller/auth.controller.js';

const routes = express.Router();

routes.get('/test', test);
routes.put('/updates/:userId', verifyToken, updateUser);
routes.delete('/delete/:userId', verifyToken, deleteUser);

export default routes;