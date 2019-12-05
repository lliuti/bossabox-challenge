import Sequelize from 'sequelize';

import Tools from '../app/models/Tool';
import Users from '../app/models/User';
import dbConfig from '../config/database';

const models = [Tools, Users];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
