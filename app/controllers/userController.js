// 'use strict';
var User = require('../models/userModel');



exports.ckeckcredential = function(req, res)
{  
  //res.json(req.body.username+'=='+req.body.password);
  var uname = Buffer.from(req.body.username, 'base64').toString();//atob(req.body.username);
  var pass = Buffer.from(req.body.password, 'base64').toString();//atob(req.body.password);
  User.getUserLogin(uname,pass,function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });

};

exports.getCredential = function(req, res)
{  
  var uid = Buffer.from(req.params.userID, 'base64').toString();
  var pass = Buffer.from(req.params.password, 'base64').toString();
  User.getUserDetail(uid,pass,function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });

};

exports.getNotificationCount = function(req, res)
{  
  User.getNotificationCount(req.params.userID,function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });

};

exports.getAllNotifications = function(req, res)
{  
  User.getAllNotifications(req.params.userID,function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });

};

exports.updateNotifications = function(req, res)
{  
  User.updateNotifications(req.params.userID,req.params.notificationId,function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });

};

exports.list_all_users = function(req, res) {
  User.getAllUser(function(err, user) {
    if (err)
      res.send(err);
    res.send(user);
  });
};

exports.read_a_user = function(req, res) {
  User.getUserById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};



// exports.create_a_user = function(req, res) {
//   var new_user = new User(req.body);

//   //handles null error 
//    if(!new_user.user || !new_user.status){

//             res.status(400).send({ error:true, message: 'Please provide user/status' });

//         }
// else{
//   User.createUser(new_user, function(err, user) {
    
//     if (err)
//       res.send(err);
//     res.json(user);
//   });
// }
// };

// exports.update_a_user = function(req, res) {
//   User.updateById(req.params.userId, new User(req.body), function(err, user) {
//     if (err)
//       res.send(err);
//     res.json(user);
//   });
// };


// exports.delete_a_user = function(req, res) {

//   User.remove( req.params.userId, function(err, user) {
//     if (err)
//       res.send(err);
//     res.json({ message: 'User successfully deleted' });
//   });
// };