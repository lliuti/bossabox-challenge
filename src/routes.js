import { Router } from 'express';
import ToolController from '../src/app/controllers/ToolController';

const routes = new Router();

// Lists all Tools
routes.get('/tools', ToolController.index); 

// Filter Tools by it's tags
routes.get('/tools/:tag', ToolController.find);

// Adds new Tools 
routes.post('/tools', ToolController.store); 

// Deletes specified Tool
routes.delete('/tools/:id', ToolController.delete); 

export default routes;