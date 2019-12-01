import { Router } from 'express';
import ToolController from '../src/app/controllers/ToolController';

const routes = new Router();

routes.get('/tools', ToolController.index); // Lists all Tools
routes.get('/tools/:tag', ToolController.find); // Filter Tools by it's tags
routes.post('/tools', ToolController.store); // Adds new Tools
routes.delete('/tools/:id', ToolController.delete); // Deletes specified Tool

export default routes;