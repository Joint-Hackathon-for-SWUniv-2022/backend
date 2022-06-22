module.exports = {
  me: async (req, res, next) => {
    const user = req.user;

    try {
      // 임시
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
}