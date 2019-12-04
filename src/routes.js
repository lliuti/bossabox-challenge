import { Router } from 'express';
import ToolController from './app/controllers/ToolController';

const routes = new Router();

// Finds either all Tools or search them by it's Tags
routes.get('/tools', ToolController.find);

// Adds new Tools
routes.post('/tools', ToolController.store);

// Deletes specified Tool
routes.delete('/tools/:id', ToolController.delete);

export default routes;
