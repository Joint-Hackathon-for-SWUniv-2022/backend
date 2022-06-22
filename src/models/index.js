const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const User = require('./user');
const Grade = require('./grade');
const Submission = require('./submission');
const Problem = require('./problem');
const Solution = require('./solution');

const db = {};
const sequelize = new Sequelize(
  config.database, config.username, config.password, config
);

db.sequelize = sequelize;
db.User = User;
db.Grade = Grade;
db.Submission = Submission;
db.Problem = Problem;
db.Solution = Solution;

User.init(sequelize);
Grade.init(sequelize);
Submission.init(sequelize);
Problem.init(sequelize);
Solution.init(sequelize);

User.associate(db);
Grade.associate(db);
Submission.associate(db);
Problem.associate(db);
Solution.associate(db);

module.exports = db;