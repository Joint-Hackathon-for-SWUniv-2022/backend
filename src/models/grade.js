const Sequelize = require('sequelize');

module.exports = class Grade extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      greedy: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      search: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      dp: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      string: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      implement: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      etc: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Grade',
      tableName: 'grades',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci'
    });
  }

  static associate(db) {
    db.Grade.belongsTo(db.User);
  }
}