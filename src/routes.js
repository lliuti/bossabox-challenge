import { Router } from 'express';
import ToolController from './app/controllers/ToolController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import SessionMiddleware from './app/middlewares/SessionMiddleware';

const routes = new Router();

routes.get('/', (req, res) => {
  res.status(404).json({
    availableRoutes: '/users, /sessions, /tools',
  });
});

// Creates a new user
routes.post('/users', UserController.store);

// Authenticates user
routes.post('/sessions', SessionController.store);

// Finds either all Tools or search them by it's Tags
routes.get('/tools', ToolController.find);

// If the user is not authenticated, it will not allow
// him to go through the next routes
routes.use(SessionMiddleware);

// Adds new Tools
routes.post('/tools', ToolController.store);

// Deletes specified Tool
routes.delete('/tools/:id', ToolController.delete);

export default routes;
