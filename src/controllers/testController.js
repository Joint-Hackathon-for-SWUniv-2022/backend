const { Test, Grade } = require("../models");

module.exports = {
  getProblem: async (req, res, next) => {
    const { problemNumber } = req.params;

    const p = await Test.findOne({
      where: {
        id: problemNumber
      }
    });

    res.json(p);
  },
  markProblem: async (req, res, next) => {
    const { problemId } = req.params;
    const { answer } = req.body;

    const user = req.user;

    const grades = {
      // greedy, search, dp, string, implement, etc
      '1': [15, 15, 15, 0, 0, 0], 
      '2': [0, 15, 0, 15, 0, 15],
      '3': [15, 0, 15, 0, 15, 0],
      '4': [0, 0, 15, 0, 15, 15],
      '5': [15, 0, 15, 15, 0, 0],
    }

    const p = await Test.findOne({
      where: {
        id: problemId
      }
    });

    if (p.answer === String(answer)) {
      const scores = grades[p.category];

      const g = await Grade.findOne({
        where: {
          UserId: user.id
        }
      });

      await Grade.update({
        greedy: g.greedy + scores[0],
        search: g.search + scores[1],
        dp: g.dp + scores[2],
        string: g.string + scores[3],
        implement: g.implement + scores[4],
        etc: g.etc + scores[5]
      }, {
        where: { id: g.id }
      })
    } 

    res.json('ok');
  }
}