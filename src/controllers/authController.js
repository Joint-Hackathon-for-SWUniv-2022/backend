const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { User, Grade } = require('../models');

module.exports = {
  join: async (req, res, next) => {
    const { email, password, nickname } = req.body;
    
    try {
      const exUser = await User.findOne({ where: { email } });
      if (exUser) {
        return res.status(409).send("이미 존재하는 이메일입니다.");
      }
      const hash = await bcrypt.hash(password, 12);
  
      const u = await User.create({
        email,
        nickname,
        password: hash,
      });

      const score_range = [0, 5, 10, 15];

      const scores = [0, 0, 0, 0, 0, 0].map(item => {
        const idx = Math.floor(Math.random() * score_range.length);
        return (score_range[idx]);
      })

      await Grade.create({
        greedy: scores[0],
        search: scores[1],
        dp: scores[2],
        string: scores[3],
        implement: scores[4],
        etc: scores[5],
        UserId: u.id
      })

      const payload = {
        id: u.id,
        email: u.email,
      };

      const jwtToken = await jwt.sign(payload, process.env.secretOrKey, { expiresIn: 86400 });
      
      return res.json({
        user: u,
        token: `Bearer ${jwtToken}`,
      })
    } catch (error) {
      console.error(error);
      return next(error);
    }
  },

  login: async (req, res, next) => {
    const { email, password } = req.body;

    try {
      const exUser = await User.findOne({ 
        where: { email }, 
      });
      if (exUser) {
        const result = await bcrypt.compare(password, exUser.password);
        if (result) {
          const payload = {
            id: exUser.id,
            email: exUser.email,
          };

          jwt.sign(payload, process.env.secretOrKey, { expiresIn: 86400 }, (err, token) => {
            return res.json({
              success: true,
              user: exUser,
              token: `Bearer ${token}`,
            });
          });
        } else {
          return res.status(400).send("비밀번호가 일치하지 않습니다.");
        }
      } else {
        return res.status(400).send("가입되지 않은 회원입니다.");
      }
    } catch (err) {
      console.error(err);
      return next(err);
    }
  }
}