'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Criação da tabela de usuários
    await queryInterface.createTable('Usuarios', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true, // Garante que o email seja único
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), // Define um valor padrão
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        onUpdate: Sequelize.literal('CURRENT_TIMESTAMP'), // Atualiza automaticamente
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Remoção da tabela de usuários
    await queryInterface.dropTable('Usuarios');
  },
};
