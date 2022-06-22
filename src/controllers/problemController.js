const fs = require('fs');
const { PythonShell } = require('python-shell');

module.exports = {
  markProblem: async (req, res, next) => {
    // const { answer } = req.body;

    const answer = `
import time, sys, base64;start = time.time()
print(1 + 2)
print('Running time: ',end='')
print(time.time() - start)
`;

    try {

    fs.writeFile(`./exec.py`, answer, function(err){
      var options = {
        mode: 'text',
        pythonPath: '',
        pythonOptions: ['-u'],
        scriptPath: '',
      };
      PythonShell.run('./exec.py', options, function (err, results) {
        // 코드에 에러가 있는 경우: err.message로 에러 내용 출력
        if (err) {
          next(err);
        // 코드 실행이 잘 된 경우
        } else{
          res.json(results);
        }
      });
    });
      
    } catch (error) {
      next(error);      
    }
  }
}