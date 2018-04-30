var mysql      = require('mysql');
var dbconfig   = require('../config/database.js');
var connection = mysql.createConnection(dbconfig);

module.exports = (app, fs) => {
  app.get('/', (req,res) => {
    // TODO : 점수 목록 GET 하는 로직 추가
    connection.query('SELECT * from user', function(err, rows) {
      if(err) throw err;

      res.render('index', {
        title: "tetris",
        scores: rows,
      });
    });
  });

  // TODO : 점수 POST 하는 함수 개발 필요
  app.get('/score', (req, res) => {
    fs.readFile( __dirname + "/../data/" + "user.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
    });
  });
};