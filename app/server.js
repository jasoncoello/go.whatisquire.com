// const express = require('express')
// var cors = require("cors")
// var boryParser = require("body-parser")

// // const serveStatic = require('serve-static')
// // const path = require('path')

// const app = express()

// app.use(boryParser.json())
// app.use(cors())
// app.use(boryParser.urlencoded({extended: false}))

// var Users = require("./routes/Users")
// app.use("/users", Users)

// // app.use('/', serveStatic(path.join(__dirname, '../dist')))


// const port = process.env.PORT || 8081
// app.listen(port, () => {
//   console.log('Listening on port: ' + port)
// })

// --------------------
var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  // port = process.env.PORT || 8081;
  port = process.env.PORT || 80;
var cors = require("cors")
var router = require('./routes/approutes'); //importing route

const serveStatic = require('serve-static')
const path = require('path')

// var sql = require('../database/db.js');
// const mysql = require('mysql');
// connection configurations

// const mc = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'online123_new'
// });

// const mc = mysql.createConnection({
//   host: '162.241.36.148',
//   user: 'tgigcpmy_user',
//   password: 'slwgidvirqysp@ssw0rd',
//   database: 'tgigcpmy_onetwsf0'
// }); 

// // connect to database
// mc.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors())
app.options('*', cors()); // include before other routes for preflight checks

// Add headers
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'DELETE, GET, POST, PUT');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/', serveStatic(path.join(__dirname, '../dist')))

const server = app.listen(port);
server.keepAliveTimeout = 60000 * 2;

router(app); //register the route
console.log('API server started on: ' + port);

