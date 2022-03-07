import { Router } from 'express';
import * as PostsController from '../../../controllers/v1/posts.controllers';

const api = Router();

api.get('/',PostsController.getAll);
api.get('/:id',PostsController.getById);
api.post('/',PostsController.createPosts);
api.patch('/:id',PostsController.updatePosts);
api.delete('/:id',PostsController.deleteById);

export default api;
