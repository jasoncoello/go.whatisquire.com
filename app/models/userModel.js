// 'user strict';
var sql = require('../database/db.js');
var PHPUnserialize = require('php-unserialize');

//User object constructor
var User = function(user){
  this.user_login = user.user_login;
  this.user_pass = user.user_pass;
  this.user_nicename = user.user_nicename;
  this.user_email = user.user_email;
  this.user_url = user.user_url;
  this.user_registered = new Date();
  this.user_activation_key = user.user_activation_key;
  this.user_status = user.user_status;
  this.display_name = user.display_name;
};



User.getUserLogin = function (username,password,result) {
  sql.query("SELECT user_login FROM wp_users WHERE user_login=? OR user_email=?", [ username, username], function (err, res) {

    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      if(res && res.length ) 
      {
        console.log('user_login :==== ', res[0].user_login);  
        var uname = res[0].user_login;
        sql.query("SELECT * FROM wp_usermeta WHERE meta_key=? AND user_id=(SELECT user_id FROM wp_usermeta WHERE meta_key=? AND meta_value=?)", [ 'wp_capabilities', 'user_login_id', uname], function (err, res) {
          if(err) {
            console.log("error: ", err);
            result(null, err);
          }
          else{
            if(res && res.length ) 
            {
              var resultArray = JSON.parse(JSON.stringify(res));
              if(Object.getOwnPropertyNames(PHPUnserialize.unserialize(resultArray[0].meta_value)) == 'caregiver')
              {
                var err = {status:'error', message : 'This user not allowed to login!'};
                result(null, err);
              }
              else{
                /*sql.query("Select * from wp_usermeta m1, wp_usermeta m2 where m1.meta_key = ? and m1.meta_value = ? and m2.meta_key = ? and m2.meta_value = ?", ['user_login_id', uname, 'user_pass', password], function (err, res) {
        
                  if(err) {
                    console.log("error: ", err);
                    result(null, err);
                  }
                  else{
                  console.log('users :==== ', res);  
                  result(null, res);
                  }
                });   */
                //sql.query("SELECT ID as user_id, user_login as user_login_id FROM wp_users WHERE ID = ? AND user_pass = ? LIMIT 1", [userID, pass], function (err, res) {
                  sql.query("SELECT u.user_id, u.meta_value as user_login_id, p.meta_value as user_pass FROM wp_usermeta as u INNER JOIN wp_usermeta as p ON u.user_id = p.user_id and u.meta_key = ? and u.meta_value = ?  and p.meta_key = ? and p.meta_value = ? ", ['user_login_id', uname,'user_pass', password], function (err, res) {
                    if(err) {
                      console.log("error: ", err);
                      result(null, err);
                    }
                    else{
                      if(res && res.length ) 
                      {
                        console.log('users :==== ', res);  
                        result(null, res);
                      }
                      else{
                        var err = {status:'error',message : 'Invalid Username or Password !'};
                        result(null, err);
                      }
                    }
                  });  
              }
            }
            else{
              var err = {status:'error',message : 'Username or Email not allowed login for this project!'};
              result(null, err);
            }
          }
        });
      }
      else{
        var err = {status:'error',message : 'Username or Email does not exist!'};
        result(null, err);
      }
    }
  }); 
};

User.getUserDetail = function (userID,pass,result) {
  
  sql.query("SELECT * FROM wp_usermeta WHERE meta_key=? AND user_id=?", [ 'wp_capabilities', userID], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      var resultArray = JSON.parse(JSON.stringify(res));
      if(Object.getOwnPropertyNames(PHPUnserialize.unserialize(resultArray[0].meta_value)) == 'caregiver')
      {
        var err = {status:'error',message : 'This user not allowed to login!'};
        result(null, err);
      }
      else{
        sql.query("SELECT ID as user_id, user_login as user_login_id FROM wp_users WHERE ID = ? AND user_pass = ? LIMIT 1", [userID, pass], function (err, res) {
          //sql.query("SELECT u.user_id, m1.meta_value as user_login_id, m2.meta_value as user_pass FROM wp_usermeta AS u JOIN wp_usermeta AS m1 ON m1.user_id = ? JOIN wp_usermeta AS m2 ON m2.user_id = ? WHERE m1.meta_key = ? AND m2.meta_key = ? LIMIT 1", [userID, userID, 'user_login_id', 'user_pass'], function (err, res) {
            if(err) {
              console.log("error: ", err);
              result(null, err);
            }
            else{
              console.log('users :==== ', res);  
              result(null, res);
            }
          });   
      }
    }
  });
};


User.getNotificationCount = function (userID,result) {
  sql.query("SELECT count(*) as notifications_count, (SELECT count(*) as notifications_count FROM `notifications` WHERE flag = 1 AND user_id=? AND notification_type='reg_caregiver') as new_count, (SELECT count(*) as notifications_count FROM `notifications` WHERE flag = 1 AND user_id=? AND notification_type='del_caregiver') as del_count FROM `notifications` WHERE flag = 1 AND user_id=?", [userID,userID,userID], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('count==>'+res);
        result(null, res);
    }
  });
};

User.getAllNotifications = function (userID,result) {
  var notiRecords = [];
  sql.query("SELECT * FROM `notifications` WHERE user_id=?", [userID], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('count==>'+res);
      notiRecords[0] = res;
        //result(null, res);
    }
  });
  sql.query("SELECT * FROM `notifications` WHERE user_id=? AND notification_type='reg_caregiver'", [userID], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('count==>'+res);
        //result(null, res);
        notiRecords[1] = res;
    }
  });
  sql.query("SELECT * FROM `notifications` WHERE user_id=? AND notification_type='del_caregiver'", [userID], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('count==>'+res);
      notiRecords[2] = res;
      result(null, notiRecords);
    }
  });
};

User.updateNotifications = function (userID,notificationId,result) {
  sql.query("UPDATE `notifications` SET `flag` = '0' WHERE `notifications`.`id` = ?", [notificationId], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('count==>'+res);
        result(null, res);
    }
  });
};


// User.getUserLogin = function(userid, result){

//   sql.query("Select * from wp_users where user_login = ? ", userid, function (err, res) {       
//     if(err) {
//       console.log("error: ", err);
//       result(err, null);
//     }
//     else{
//       console.log("=================");
//       console.log(res);
//       result(null, res);
//     }
//   });   

// };


// User.getUserById = function (userId, result) {
//   sql.query("Select * from _mbt_users where id = ? ", userId, function (err, res) {       
//       if(err) {
//         console.log("error: ", err);
//         result(err, null);
//       }
//       else{
//         result(null, res);
//       }
//     });   
// };

User.getAllUser = function (result) {
  sql.query("Select * from wp_users", function (err, res) {

    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
    console.log('users :==== ', res);  

    result(null, res);
    }
  });   
};

// User.createUser = function (newUser, result) {  
//   sql.query("INSERT INTO _mbt_users set ?", newUser, function (err, res) {
//     if(err) {
//       console.log("error: ", err);
//       result(err, null);
//     }
//     else{
//       console.log(res.insertId);
//       result(null, res.insertId);
//     }
//   });       
// };

// User.updateById = function(id, user, result){
//   sql.query("UPDATE _mbt_users SET user_login = ? WHERE id = ?", [user.user_login, id], function (err, res) {
//     if(err) {
//       console.log("error: ", err);
//       result(null, err);
//     } else {   
//       result(null, res);
//       }
//     }); 
// };
// User.remove = function(id, result){
//    sql.query("DELETE FROM _mbt_users WHERE id = ?", [id], function (err, res) {

//         if(err) {
//           console.log("error: ", err);
//           result(null, err);
//         }
//         else{
         
//          result(null, res);
//         }
//       }); 
// };

module.exports= User;