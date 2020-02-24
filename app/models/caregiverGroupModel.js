// 'user strict';
var sql = require('../database/db.js');

//CaregiverGroup object constructor
var CaregiverGroup = function(caregiverGroup){
  this.group_name = caregiverGroup.group_name;
  this.is_default = caregiverGroup.is_default;
  this.user_id = caregiverGroup.user_id;
};

CaregiverGroup.createCaregiverGroup = function (newCaregiverGroup, result) {  
  // console.log(newCaregiverGroup)
  if (newCaregiverGroup.is_default == '1') {
    sql.query("UPDATE caregiver_group SET is_default = 0 WHERE user_id = ?", newCaregiverGroup.user_id , function (err) {
      if(err) {
        console.log("error: ", err);
      } 
    });
  }
  sql.query("INSERT INTO caregiver_group set ?", newCaregiverGroup, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res.insertId);
    }
  });       
};

CaregiverGroup.getCaregiverGroupById = function (caregiverGroupId, result) {
  sql.query("Select * from caregiver_group where id = ? ", caregiverGroupId, function (err, res) {       
      if(err) {
        console.log("error: ", err);
        result(err, null);
      }
      else{
        result(null, res);
      }
    });   
};
CaregiverGroup.getAllCaregiverGroupByUserId = function (userId, result) {
  console.log(userId)
  sql.query("Select * from caregiver_group where user_id = ? order by group_name", userId, function (err, res) {

    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      // console.log('caregivers : ', res);  
      result(null, res);
    }
  });   
};
CaregiverGroup.updateById = function(id, caregiverGroup, result) {
  if (caregiverGroup.is_default == '1') {
    sql.query("UPDATE caregiver_group SET is_default = 0 WHERE user_id = ?", caregiverGroup.user_id , function (err) {
      if(err) {
        console.log("error: ", err);
      } 
    });
  }
  sql.query("UPDATE caregiver_group SET ? WHERE id = ?", [caregiverGroup, id], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    } else {   
      result(null, res);
    }
  }); 
};
CaregiverGroup.remove = function(id, result){
    sql.query("DELETE FROM caregiver_group WHERE id = ?", [id], function (err, res) {
      if(err) {
        console.log("error: ", err);
        result(null, err);
      }
      else{
        result(null, res);
      }
    }); 
};

module.exports= CaregiverGroup;