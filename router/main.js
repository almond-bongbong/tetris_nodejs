const mysql      = require('mysql');
const dbconfig   = require('../config/database.js');
const sql        = require('../sql/tetris');
const connection = mysql.createConnection(dbconfig);

module.exports = (app, fs) => {
    app.get('/', (req, res) => {
        connection.query(sql.getScores, function(err, rows) {
            if(err) throw err;
            res.render('index', {
                title: "tetris",
                scores: rows,
            });
        });
    });

    // TODO : 점수 POST 하는 함수 개발 필요
    app.post('/score', (req, res) => {
        const ip = req.connection.remoteAddress;
        connection.query(sql.regScore(req.body.id, req.body.score, ip), function(err, result) {
            if(err) throw err;
            console.log('result : ', result);
            res.end(JSON.stringify({'result': 'OK'}));
        });
    });
};