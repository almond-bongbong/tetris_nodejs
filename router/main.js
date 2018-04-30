const mysql      = require('mysql');
const dbconfig   = require('../config/database.js');
const connection = mysql.createConnection(dbconfig);

module.exports = (app, fs) => {
  app.get('/', (req, res) => {
    const sql = 'SELECT * FROM user LIMIT 2';
    connection.query(sql, function(err, rows) {
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