// 'user strict';
var sql = require('../database/db.js');

//Caregiver object constructor
var SendMessageLog = function(user) {
  this.user_id = user.user_id;
};

SendMessageLog.getSendMessageLog = function (user_id,result) {
    sql.query("SELECT * FROM `send_message_log` WHERE agency_id = ? AND trash = '0' ORDER BY `send_message_log`.`id` DESC", [ user_id ], function (err, res) {
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

  SendMessageLog.getSingleMessageLog = function (user_id,logID,result) {
    sql.query("UPDATE send_message_log SET read_flag = '0' WHERE  agency_id= ? AND id = ?", [ user_id,logID], function (err, res) {
      if(err) {
        console.log("error: ", err);
        result(null, err);
      }
      else{
      
      }
    }); 
    sql.query("SELECT * FROM `send_message_log` WHERE agency_id = ? AND id = ?", [ user_id,logID], function (err, res) {
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
          var err = {status:'error',message : 'No records found for sent message log!'};
          result(null, err);
        }
      }
    }); 
  };

  SendMessageLog.moveToTrash = function (user_id,logID,result) {
    if(logID.length > 0)
    {
      sql.query("UPDATE send_message_log SET  trash = '1' WHERE  agency_id= ? AND id IN (?)", [ user_id,logID], function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }
        else{
          result(null, res);
        }
      }); 
    }
    else{
      var err = {status:'error',message : 'Something went wrong please try again later!'};
      result(null, err);
    }
  };

  SendMessageLog.getTrashMessageLog = function (user_id,result) {
    sql.query("SELECT * FROM `send_message_log` WHERE agency_id = ? AND trash = '1' ORDER BY `send_message_log`.`id` DESC", [ user_id ], function (err, res) {
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

  SendMessageLog.deletelogForever = function (user_id,logID,result) {
    if(logID.length > 0)
    {
      sql.query("DELETE FROM send_message_log WHERE agency_id= ? AND id IN (?)", [ user_id,logID], function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }
        else{
          result(null, res);
        }
      }); 
    }
    else{
      var err = {status:'error',message : 'Something went wrong please try again later!'};
      result(null, err);
    }
  };

  SendMessageLog.restorelogfromTrash = function (user_id,logID,result) {
    if(logID.length > 0)
    {
      sql.query("UPDATE send_message_log SET  trash = '0' WHERE  agency_id= ? AND id IN (?)", [ user_id,logID], function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }
        else{
          result(null, res);
        }
      }); 
    }
    else{
      var err = {status:'error',message : 'Something went wrong please try again later!'};
      result(null, err);
    }
  };
  
  SendMessageLog.moveToFavorite = function (user_id,logID,result) {
    if(logID.length > 0)
    {
      sql.query("UPDATE send_message_log SET  star = '1' WHERE  agency_id= ? AND id IN (?)", [ user_id,logID], function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }
        else{
          result(null, res);
        }
      }); 
    }
    else{
      var err = {status:'error',message : 'Something went wrong please try again later!'};
      result(null, err);
    }
  };

  SendMessageLog.getFavoriteMessageLog = function (user_id,result) {
    sql.query("SELECT * FROM `send_message_log` WHERE agency_id = ? AND star = '1' ORDER BY `send_message_log`.`id` DESC", [ user_id ], function (err, res) {
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

  SendMessageLog.removeFavorite = function (user_id,logID,result) {
    if(logID.length > 0)
    {
      sql.query("UPDATE send_message_log SET  star = '0' WHERE  agency_id= ? AND id IN (?)", [ user_id,logID], function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }
        else{
          result(null, res);
        }
      }); 
    }
    else{
      var err = {status:'error',message : 'Something went wrong please try again later!'};
      result(null, err);
    }
  };

module.exports= SendMessageLog;