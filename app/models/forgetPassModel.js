// 'user strict';
var sql = require('../database/db.js');

var sql2 = require('../database/db.js');
//Caregiver object constructor
var ForgetPassword = function(user) {
  this.user_id = user.user_id;
};

ForgetPassword.checkEmailExists = function (username,result) {
    sql.query("SELECT * FROM wp_users WHERE user_login=? OR user_email=?", [ username, username], function (err, res) {
      if(err) {
        console.log("error: ", err);
        result(null, err);
      }
      else{
        if(res && res.length ) 
        {
            result(null, res);
        }
        else{
          var err = {status:'error',message : 'Something went wrong please try again!'};
          result(null, err);
        }
      }
    }); 
  };


  ForgetPassword.checkValidToken = function (id,result) {
    //sql.query("SELECT *  FROM `wp_usermeta` WHERE `user_id` = ? AND `meta_key`=? OR `user_id` = ? AND `meta_key`= ?", [id,'forget_pass_token',id,'forget_pass_token_expires'], function (err, res) {
    sql.query("SELECT t.meta_value as token, e.meta_value as expiry FROM `wp_usermeta` as t INNER JOIN `wp_usermeta` as e ON  t.user_id = e.user_id AND t.meta_key LIKE 'forget_pass_token' AND e.meta_key LIKE 'forget_pass_token_expires' AND t.user_id=?", [id], function (err, res) {
      if(err) {
        console.log("error: ", err);
        result(null, err);
      }
      else{
        if(res && res.length ) 
        {
            result(null, res);
        }
        else{
          var err = {status:'error',message : 'Username or Email does not exist!'};
          result(null, err);
        }
      }
    }); 
  };


module.exports= ForgetPassword;