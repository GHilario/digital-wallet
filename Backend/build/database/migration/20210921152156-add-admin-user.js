"use strict";const p4ssw0rd = require('p4ssw0rd');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'usuario',
      [
        {
          nome: 'ADMIN',
          login: 'ADMIN',
          senha: p4ssw0rd.hash('123456')
        },
      ],
      {}
    );
  },

  down: queryInterface => queryInterface.bulkDelete('usuario', null, {}),
};