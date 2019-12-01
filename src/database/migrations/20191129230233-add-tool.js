'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('tools', { 
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false, 
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        link: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        tags: {
          type: Sequelize.ARRAY(Sequelize.STRING),
          allowNull: false,
        },
      });
  },

  down: (queryInterface) => {
      return queryInterface.dropTable('tools');
  }
};
