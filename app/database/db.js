// const Sequelize = require("sequelize")
// const db = {}
// const sequelize = new Sequelize("online123_new", "root", "", {
//   host: 'localhost',
//   dialect: 'mysql',
//   // operatorsAliases: false,
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// })

// db.sequelize = sequelize
// db.Sequelize = Sequelize

// module.exports = db
// 'user strict';

var mysql = require('mysql');

//local mysql db connection
// var connection = mysql.createConnection({
//    host     : 'localhost',
//    user     : 'root',
//    password : '',
//   database : 'onlinecourse'
// });

// server mysql db connection
 var connection = mysql.createConnection({
   host: '162.241.90.127',
   user: 'whatisqu_whatisq',
   password: '-Jl]n.UT*k8q',
   database: 'whatisqu_whatisquire'
 });


connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
