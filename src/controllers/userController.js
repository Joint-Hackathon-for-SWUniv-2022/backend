const { User, Grade } = require("../models");

module.exports = {
  me: async (req, res, next) => {
    const user = req.user;

    try {
      // 임시
      const u = await User.findOne({
        where: { id: user.id },
        include: [{
          model: Grade
        }]
      })

      res.json(u);
    } catch (error) {
      next(error);
    }
  },
  setBaekjoon: async (req, res, next) => {
    const user = req.user;

    const { email } = req.body;

    try {
      const u = await User.update({
        baekjoon: email
      }, {
        where: { id: user.id }
      });

      res.json(u)
    } catch (error) {
      next(error);
    }
  }
}