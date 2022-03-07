import { Router } from 'express';
import * as AuthenticationController from '../../../controllers/v1/authentication.controllers';

const api = Router();

api.post('/login', AuthenticationController.login);
api.post('/register', AuthenticationController.register);

export default api;
