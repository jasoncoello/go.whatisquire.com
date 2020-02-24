// 'user strict';
var sql = require('../database/db.js');

// Topic object constructor
var Topic = function(topic){
  this.topic_name = topic.first_name;
  this.class_id = topic.last_name;
};

Topic.getAllTopicByClassId = function (classId, result) {
  sql.query("Select * from caregiver_topic where class_id = ? order by id", classId, function (err, res) {

    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      result(null, res);
    }
  });   
};

Topic.getAllTopicList = function (result) {
  /*sql.query("Select * from caregiver_topic order by id", function (err, res) {

    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      result(null, res);
    }
  });   */
  sql.query("SELECT t.ID as id, t.post_title as topic_name, c.meta_value as class_id FROM wp_posts as t JOIN wp_postmeta as c ON t.ID = c.post_id AND c.meta_key='course_id' AND t.post_type='sfwd-lessons' order by id", function (err, res) {

    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      result(null, res);
    }
  });
};
module.exports= Topic;