// 'user strict';
var sql = require('../database/db.js');

var sql2 = require('../database/db.js');
//Caregiver object constructor
var CaregiverCurriculum = function(caregiver) {
  this.class_id = caregiver.class_id;
  this.class_type = caregiver.class_type;
  this.user_id = caregiver.user_id;
};
//var caregivers = '';

CaregiverCurriculum.getAllCaregiverCurriculumsByUserIdAndInitial = function (userId, isInitial, result) {
  sql.query("select * from caregiver_curriculum where user_id = ? and class_type = ? order by id", [userId, isInitial], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    } else {   
      result(null, res);
      }
    }); 
};

CaregiverCurriculum.updateByUserIdAndInitial = function (userId, isInitial, body, result) {
  sql.query("DELETE FROM caregiver_curriculum WHERE user_id = ? and class_type = ?", [userId, isInitial], function (err) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
  }); 

  var query = "";
  var course_id = [];
  for (let i = 0; i < body['classIdList'].length-1; i++) {
    course_id[i] = body['classIdList'][i];
    query = query + "('" + body['classIdList'][i] +"','" + isInitial + "','" + userId + "','" + body['assigned_date'] + "','" + body['assigned_by'] + "'), "
    
  }
 
  console.log('course_id==>'+course_id);
  if (body['classIdList'].length > 0) {
    query = query + "('" + body['classIdList'][body['classIdList'].length-1] +"','" + isInitial + "','" + userId + "','" + body['assigned_date'] + "','" + body['assigned_by'] + "');"
    console.log("INSERT INTO caregiver_curriculum (class_id, class_type, user_id, assigned_date, assigned_by) VALUES"+query)
    sql.query("INSERT INTO caregiver_curriculum (class_id, class_type, user_id, assigned_date, assigned_by) VALUES " + query, function (err, res) {
      if(err) {
        console.log("error: ", err);
        result(null, err);
      } else{
        result(null, res);
        }
    });
  }
  else{
    result(null, 'No classes selected');
  }
};

CaregiverCurriculum.getCoursesByCategory = function (category, result) {
  sql.query("SELECT ID as id, post_title as class_name, post_author as duration, post_author as class_type , post_content as description FROM wp_posts LEFT JOIN wp_term_relationships ON (wp_posts.ID = wp_term_relationships.object_id) LEFT JOIN wp_term_taxonomy ON (wp_term_relationships.term_taxonomy_id = wp_term_taxonomy.term_taxonomy_id) WHERE wp_term_taxonomy.term_id IN (?) GROUP BY wp_posts.ID", [category], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    } else {   
      result(null, res);
      }
    }); 
};

CaregiverCurriculum.getTopics = function (result) {
  sql.query("SELECT t.ID as id, t.post_title as topic_name, c.meta_value as class_id FROM wp_posts as t JOIN wp_postmeta as c ON t.ID = c.post_id AND c.meta_key='course_id' AND t.post_type='sfwd-topic'", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    } else {   
      result(null, res);
      }
    }); 
};

module.exports= CaregiverCurriculum;