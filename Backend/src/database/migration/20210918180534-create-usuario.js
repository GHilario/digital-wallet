module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuario', {
      login: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey:true,
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    })
  },

  down: async queryInterface => {
    return queryInterface.dropTable('usuario');
  }
};
