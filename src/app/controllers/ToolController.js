import { Op } from 'sequelize';
import Tool from '../models/Tool';

class ToolController {
  async find(req, res) {
    // Destructuring query parameter
    const { tag } = req.query;

    // If there is an query parameter,
    // then it will search the database looking for it.
    // If there isn't, it will search for an empty array (when there's no tags)
    const query = tag ? tag.toLowerCase() : [];

    const tools = await Tool.findAll({
      where: {
        tags: {
          [Op.contains]: [query],
        },
      },
    });

    // Tries to find something at the first array item
    // if there isn't, it returns an error
    if (!tools[0]) {
      return res.status(400).json({ error: "Couldn't find any tool" });
    }

    return res.json(tools);
  }

  async store(req, res) {
    // Destructuring requisition's body
    const { title, tags } = req.body;

    // Parse all tags to lowercase
    // (this allows the user to search either for 'NodeJS' and 'nodejs')
    const parsed = tags.map(tag => tag.toLowerCase());
    req.body.tags = parsed;

    // Checks if there's another tool with this title
    const titleExists = await Tool.findOne({
      where: { title },
    });

    // Doesnt allow users to create a Tool with an existing title
    if (titleExists) {
      return res.json({ error: 'This tool already exists' });
    }

    const tool = await Tool.create(req.body);

    return res.status(201).json(tool);
  }

  async delete(req, res) {
    // Destructuring requisition's parameter
    const { id } = req.params;

    const tool = await Tool.findOne({
      where: { id },
    });

    // If there isn't a tool with that id
    // it won't even try to delete it
    if (!tool) {
      return res.status(400).json({ error: 'Tool not found' });
    }

    const deleteTool = await Tool.destroy({
      where: { id },
    });

    return res.status(204).json();
  }
}

export default new ToolController();
