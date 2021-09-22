"use strict";module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('movimentacao', {
      id_transacao: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      data: {
        type: 'TIMESTAMP',
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
      login_origem: {
        type: Sequelize.STRING,
        allowNull: false,
        reference: {
          model:'usuario',
          key:'login',
        }
      },
      login_destino: {
        type: Sequelize.STRING,
        allowNull: false,
        reference: {
          model:'usuario',
          key:'login',
        }
      },
      valor_transferido: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
    })
  },

  down: async queryInterface => {
    return queryInterface.dropTable('movimentacao');
  }
};
