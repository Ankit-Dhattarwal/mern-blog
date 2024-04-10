import express from 'express';
import {test, updateUser} from '../controller/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const routes = express.Router();

routes.get('/test', test);
routes.put('/updates/:userId', verifyToken, updateUser);

export default routes;