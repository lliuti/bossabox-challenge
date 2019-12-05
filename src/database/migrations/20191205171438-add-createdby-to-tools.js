module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('tools', 'created_by', {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: false,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('tools', 'created_by');
  },
};
