import Sequelize from 'sequelize';

import Tools from '../app/models/Tool';
import dbConfig from '../config/database';

const models = [Tools];

class Database {
  
  constructor() { 
    this.init();
  };

  init() {
    this.connection = new Sequelize(dbConfig);

    models
      .map(model => model.init(this.connection))
  };

}

export default new Database();