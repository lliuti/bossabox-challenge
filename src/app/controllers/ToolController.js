import Tool from '../models/Tool';
import { Op } from 'sequelize';

class ToolController {
  async index(req, res) {
    const tools = await Tool.findAll();
    return res.json(tools);
  };

  async find(req, res) {
    const { tag } = req.params;
    const tools = await Tool.findAll({
      where: {
        tags: tag,
      },
    });
    return res.json(tools);
  };

  async store(req, res) {

    const { title } = req.body;

    // Checks if there's another tool with this title
    const titleExists = await Tool.findOne({
      where: { title }
    })

    if (titleExists) {
      return res.json({ error: 'This tool already exists'});
    }

    const tool = await Tool.create(req.body);

    return res.status(201).json(tool);
  
  };

};

export default new ToolController();