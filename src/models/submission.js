const Sequelize = require('sequelize');

module.exports = class Submission extends Sequelize.Model {
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
      modelName: 'Submission',
      tableName: 'submissions',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci'
    });
  }

  static associate(db) {
    db.Submission.belongsTo(db.User);
    db.Submission.belongsTo(db.Problem)
  }
}