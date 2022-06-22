const Sequelize = require('sequelize');

module.exports = class Problem extends Sequelize.Model {
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
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Problem',
      tableName: 'problems',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci'
    });
  }

  static associate(db) {
    db.Problem.hasMany(db.Submission);
    db.Problem.hasMany(db.Solution);
  }
}