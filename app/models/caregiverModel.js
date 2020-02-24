// 'user strict';
var sql = require('../database/db.js');
var CryptoJS = require("crypto-js");

//Caregiver object constructor
var Caregiver = function(caregiver){
  this.first_name = caregiver.first_name;
  this.last_name = caregiver.last_name;
  this.user_name = caregiver.user_name;
  this.password = caregiver.password;
  this.phone_number = caregiver.phone_number;
  this.email_address = caregiver.email_address;
  this.hire_date = caregiver.hire_date;
  this.user_registered = new Date();
  this.is_initial = caregiver.is_initial;
  this.job_role = caregiver.job_role?caregiver.job_role:null;
  this.caregiver_group = caregiver.caregiver_group?caregiver.caregiver_group:null;
  this.is_activated = caregiver.is_activated;
  this.due_date = caregiver.due_date?caregiver.due_date:'';
  this.message_date = caregiver.message_date?caregiver.message_date:'';
  this.deactivation_date = caregiver.deactivation_date?caregiver.deactivation_date:'' ;
  this.user_id = caregiver.user_id;
  this.agency_id = caregiver.agency_id;
};

Caregiver.createCaregiver = function (newCaregiver, result) {  
  sql.query("Select meta_value from wp_usermeta where user_id = ? AND meta_key=?", [newCaregiver.agency_id,'caregiver_count'], function (err, res) {       
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      //result(null, res);
      //console.log('UserMeta==>'+JSON.stringify(res[0].meta_value));
      if(res && res.length)
      {
        var caregiver_count = parseInt(res[0].meta_value);
        caregiver_count = caregiver_count+1;
        sql.query("UPDATE `wp_usermeta` SET `meta_value`=? WHERE `user_id`=? AND `meta_key`=?", [caregiver_count,newCaregiver.agency_id,'caregiver_count'], function (err, res3) {
          if(err) {
            console.log("error: ", err);
            result(err, null);
          }
          else{
            //result(null, res3.insertId);
          }
        }); 
      }
      else{
        sql.query("INSERT INTO `wp_usermeta` (`user_id`, `meta_key`, `meta_value`) VALUES (?, ?, ?)", [newCaregiver.agency_id,'caregiver_count',1], function (err, res3) {
          if(err) {
            console.log("error: ", err);
            result(err, null);
          }
          else{
            //result(null, res3.insertId);
          }
        }); 
      }
    }
  });   

  sql.query("INSERT INTO `notifications` (`user_id`, `notification_type`, `description`, `flag`) VALUES ("+newCaregiver.agency_id+", 'reg_caregiver', 'You have added new Caregiver-"+newCaregiver.first_name+" "+newCaregiver.last_name+"','1');", newCaregiver, function (err, res3) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      //result(null, res3.insertId);
    }
  }); 

  sql.query("INSERT INTO caregiver set ?", newCaregiver, function (err, res3) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res3.insertId);
    }
  }); 
};
Caregiver.getCaregiverById = function (caregiverId, result) {
  sql.query("Select * from caregiver where id = ?", caregiverId, function (err, res) {       
      if(err) {
        console.log("error: ", err);
        result(err, null);
      }
      else{
        result(null, res);
      }
    });   
};
Caregiver.getAllCaregiverByUserId = function (userId, result) {
  sql.query("Select * from caregiver where agency_id = ? and is_activated = 1 order by id", userId, function (err, res) {

    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
    result(null, res);
    }
  });   
};

Caregiver.getCaregiverCount = function (userId, result) {
  sql.query("Select meta_value from wp_usermeta where user_id = ? AND meta_key=?", [userId,'caregiver_count'], function (err, res) {       
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      //result(null, res);
      //console.log('UserMeta==>'+JSON.stringify(res[0].meta_value));
      if(res && res.length)
      {
        //var caregiver_count = parseInt(res[0].meta_value);
        result(null, res[0].meta_value);
      }
      else{
        result(null, null);
      }
    }
  });   
};

Caregiver.getCaregiversProgress = function (userId,cat_slug,result) {
  
  sql.query("Select user_id from caregiver where agency_id = ?", userId, function (err, res) {

    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
    //result(null, res);
    var uid = [];
    console.log('Progresss==>'+JSON.stringify(res)); 
      for (var i = 0;i <= res.length-1; i++) {
        console.log(res[i].user_id);
        uid[i]=res[i].user_id;
      }

    sql.query("SELECT p.ID as course_id, t.slug FROM `wp_terms` t INNER JOIN `wp_term_taxonomy` tt ON (t.`term_id` =tt.`term_id`) LEFT JOIN `wp_term_relationships` ttr ON (tt.`term_taxonomy_id`= ttr.`term_taxonomy_id`) LEFT JOIN `wp_posts` p ON (ttr.`object_id` = p.`ID`) WHERE p.`ID` IN (SELECT `course_id` FROM `wp_learndash_user_activity` WHERE `user_id`IN ("+uid+") AND `activity_type`='course' )", userId, function (err, resCat) {
      if(err) {
        console.log("error: ", err);
        result(null, err);
      }
      else{
        var category = [];
        console.log('cat_slug===>'+cat_slug);
        console.log('resCat==>'+JSON.stringify(resCat));
        for (var i = 0;i <= resCat.length-1; i++) {
          if(resCat[i].slug == cat_slug)
          {
            category[i]=resCat[i].course_id
          }
        }
        if(category.length == 0)
        {
          result(null, 'There is no '+category+' courses');
        }
        else{
          console.log('resCat==category==>'+JSON.stringify(category));
          sql.query("SELECT u.user_id, SUM(t.activity_meta_value) as total, SUM(c.activity_meta_value) as completed FROM wp_learndash_user_activity AS u INNER JOIN wp_learndash_user_activity_meta AS t ON u.activity_id=t.activity_id AND t.activity_meta_key='steps_total' AND u.user_id IN ("+uid+") AND u.activity_type='course' AND u.course_id IN ("+category+") INNER JOIN wp_learndash_user_activity_meta AS c ON u.activity_id=c.activity_id AND c.activity_meta_key='steps_completed' GROUP BY u.user_id", function (err, resProgress) {
  
            if(err) {
              console.log("error: ", err);
              result(null, err);
            }
            else{
            
            console.log('resProgress===>'+resProgress);
            result(null, resProgress);
  
            }
          });
        }
        
      }
    });    
    }
  });   
};


async function getIndividualProgress(user_id)
{
  await sql.query("SELECT u.user_id, SUM(t.activity_meta_value) as total, SUM(c.activity_meta_value) as completed FROM wp_learndash_user_activity AS u INNER JOIN wp_learndash_user_activity_meta AS t ON u.activity_id=t.activity_id AND t.activity_meta_key='steps_total' AND u.user_id=? AND u.activity_type='course' INNER JOIN wp_learndash_user_activity_meta AS c ON u.activity_id=c.activity_id AND c.activity_meta_key='steps_completed'", user_id, function (err, resProgress) {

    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
    //result(null, res);
    console.log('resProgress===>'+JSON.stringify(resProgress));
    
      return resProgress;
    
   // progress[i] = p;
    }
  });  
}

Caregiver.getAllDecactivatedCaregiverByUserId = function (userId, result) {
  sql.query("Select * from caregiver where agency_id = ? and is_activated = 0 order by id", userId, function (err, res) {

    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
    result(null, res);
    }
  });   
};

Caregiver.activationCaregiverById = function (caregiverId, body, result) {
  var date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
  console.log("body['is_activated']"+body.is_activated);
  sql.query("UPDATE caregiver SET is_activated = ?, deactivation_date = ? WHERE id = ?", [body.is_activated, date, caregiverId], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    } else {   
      result(null, res);
      }
    }); 
  
};

Caregiver.updateById = function(id, caregiver, result){
  sql.query("UPDATE caregiver SET ? WHERE id = ?", [caregiver, id], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    } else {   
      result(null, res);
      }
    }); 
};
Caregiver.remove = function(id,caregiverUserId, result){
  sql.query("DELETE FROM wp_users WHERE ID = ?", [caregiverUserId], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      //result(null, res);
    }
  }); 

  sql.query("SELECT  `agency_id`, `first_name`,`last_name` FROM `caregiver` WHERE `id`=?", [id], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      //result(null, res);
      console.log('caregiverUserId==>'+JSON.stringify(res));
      sql.query("INSERT INTO `notifications` (`user_id`, `notification_type`, `description`, `flag`) VALUES ("+res[0].agency_id+", 'del_caregiver', 'You have removed Caregiver-"+res[0].first_name+" "+res[0].last_name+"','1');", function (err, res3) {
        if(err) {
          console.log("error: ", err);
          result(err, null);
        }
        else{
          //result(null, res3.insertId);
        }
      });
    }
  });
  
  
   sql.query("DELETE FROM caregiver WHERE id = ?", [id], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      result(null, res);
    }
  }); 
};

module.exports= Caregiver;