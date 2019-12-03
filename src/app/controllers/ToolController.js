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
        tags: {
          [Op.like]: "%"+tag.toLowerCase()+"%"
        },
      },
    });
    return res.json(tools);
  };

  async store(req, res) {

    const { title } = req.body;
    req.body.tags = req.body.tags.toString().toLowerCase();

    // Checks if there's another tool with this title
    const titleExists = await Tool.findOne({
      where: { title }
    })

    if (titleExists) {
      return res.json({ error: 'This tool already exists'});
    }

    const tool = await Tool.create(req.body);

    const tags = tool.tags.split(',');
    const { id, link, description } = tool;

    return res.status(201).json({ id, title, link, description, tags });
  
  };

  async delete(req, res) {
    const { id } = req.params;
    
    const tool = await Tool.findOne({
      where: { id }
    })

    if (!tool)
      return res.status(400).json({ error: 'Tool not found' });
  
    const deleteTool = await Tool.destroy({
      where: { id }
    })
    
    return res.status(204).json();
  };

};

export default new ToolController();