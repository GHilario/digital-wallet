"use strict";module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('saldo', {
      login: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey:true,
        reference: {
          model:'usuario',
          key:'login',
        }
      },
      saldo: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
    })
  },

  down: async queryInterface => {
    return queryInterface.dropTable('saldo');
  }
};
