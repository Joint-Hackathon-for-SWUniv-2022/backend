const Sequelize = require('sequelize');

module.exports = class Test extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      category: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      problem: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      input: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      output: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      choice1: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      choice2: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      choice3: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      choice4: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      answer: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    }, {
      sequelize,
      underscored: false,
      modelName: 'Test',
      tableName: 'tests',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci'
    });
  }

  static associate(db) {
  }
}