// 'user strict';
var sql = require('../database/db.js');
var PHPUnserialize = require('php-unserialize');

//Caregiver object constructor
var CaregiverClass = function(caregiver) {
  this.class_name = caregiver.class_name;
  this.duration = caregiver.duration;
  this.class_type = caregiver.class_type;
  this.description = caregiver.description;
};

CaregiverClass.getAllCaregiverClass = function (result) {
  /*sql.query("Select * from caregiver_class order by id", function (err, res) {

    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      result(null, res);
    }
  }); */ 

  sql.query("SELECT ID as id, post_title as class_name, post_author as duration, post_author as class_type , post_excerpt as description FROM `wp_posts` WHERE `post_type` LIKE 'sfwd-courses' order by id", function (err, res) {

    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      result(null, res);
    }
  });
  

  /*sql.query("SELECT * FROM wp_options WHERE option_name LIKE '_transient_learndash_user_courses_39'", function (err, res) {

    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      //result(null, res);
      //console.log(res);
      var resultArray = JSON.parse(JSON.stringify(res));
      //console.log(PHPUnserialize.unserialize(resultArray[0].option_value));
      var classes = Object.values(PHPUnserialize.unserialize(resultArray[0].option_value));
      console.log('classes'+classes);
      
      
      sql.query("SELECT ID as id, post_title as class_name, post_author as duration, post_author as class_type , post_content as description FROM wp_posts LEFT JOIN wp_term_relationships ON (wp_posts.ID = wp_term_relationships.object_id) LEFT JOIN wp_term_taxonomy ON (wp_term_relationships.term_taxonomy_id = wp_term_taxonomy.term_taxonomy_id) WHERE wp_term_taxonomy.term_id IN 35 GROUP BY wp_posts.ID AND wp_posts.ID IN "+classes, function (err, res) {

        if(err) {
          console.log("error: ", err);
          result(null, err);
        }
        else{
          console.log(res);
        }
      });
      /*if(Object.getOwnPropertyNames(PHPUnserialize.unserialize(resultArray[0].meta_value)) == 'caregiver')
      {
        var err = {status:'error',message : 'This user not allowed to login!'};
        result(null, err);
      }*
    }
  });*/
};


CaregiverClass.getCategory = function (result) {
          sql.query("SELECT p.ID as class_id, t.* FROM `wp_terms` t INNER JOIN `wp_term_taxonomy` tt ON (t.`term_id` =tt.`term_id`) LEFT JOIN `wp_term_relationships` ttr ON (tt.`term_taxonomy_id`= ttr.`term_taxonomy_id`) LEFT JOIN `wp_posts` p ON (ttr.`object_id` = p.`ID`) WHERE p.`ID` IN (SELECT id FROM `wp_posts` WHERE `post_type` LIKE 'sfwd-courses' order by id)", function (err, res) {
            if(err) {
              console.log("error: ", err);
              result(null, err);
            } else{
              console.log('res123=====>'+res);
              result(null, res);
              //categories[i]=res;
            }
          });
        
}

CaregiverClass.getDefaultCourses = function (result) {
  sql.query("SELECT p.ID as class_id, t.* FROM `wp_terms` t INNER JOIN `wp_term_taxonomy` tt ON (t.`term_id` =tt.`term_id`) LEFT JOIN `wp_term_relationships` ttr ON (tt.`term_taxonomy_id`= ttr.`term_taxonomy_id`) LEFT JOIN `wp_posts` p ON (ttr.`object_id` = p.`ID`) WHERE t.slug='default' AND p.`ID` IN (SELECT id FROM `wp_posts` WHERE `post_type` LIKE 'sfwd-courses' order by id)", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    } else{
      console.log('res123=====>'+res);
      result(null, res);
      //categories[i]=res;
    }
  });

}


module.exports= CaregiverClass;