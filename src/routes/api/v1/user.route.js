import { Router } from 'express';
import * as profileController from '../../../controllers/v1/profile.controllers';
import * as postController from '../../../controllers/v1/posts.controllers';
import * as userController from '../../../controllers/v1/user.controllers';

const api = Router();

api.get('/:id/posts',postController.getByAuthorId);
api.get('/:id/profile',profileController.getById);
api.patch('/:id/profile',profileController.upsertProfile);
api.delete('/:id',userController.deleteById);

export default api;
