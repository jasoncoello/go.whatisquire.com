// 'use strict';
var ForgetPassword = require('../models/forgetPassModel');

exports.checkEmailExists = function(req, res) {
    var uname = Buffer.from(req.body.username, 'base64').toString();
    ForgetPassword.checkEmailExists(uname, function(err, ForgetPass) {
    if (err)
      res.send(err);
      console.log('res', ForgetPass);
    res.send(ForgetPass);
  });
};

exports.checkValidToken = function(req, res) {
  var id = Buffer.from(req.body.id, 'base64').toString();
  ForgetPassword.checkValidToken(id, function(err, ForgetPass) {
  if (err)
    res.send(err);
    console.log('res', ForgetPass);
  res.send(ForgetPass);
});
};