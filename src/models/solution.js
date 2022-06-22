const Sequelize = require('sequelize');

module.exports = class Solution extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      result: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Solution',
      tableName: 'solutions',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci'
    });
  }

  static associate(db) {
    db.Solution.belongsTo(db.Problem)
  }
}