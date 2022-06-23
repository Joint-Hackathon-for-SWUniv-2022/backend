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
  }
}