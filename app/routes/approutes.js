 //'use strict';
var taskList = require('../controllers/taskController');
var userList = require('../controllers/userController');
var caregiverGroupList = require('../controllers/caregiverGroupController');
var caregiverList = require('../controllers/caregiverController');
var caregiverClass = require('../controllers/caregiverClassController');
var caregiverTopicList = require('../controllers/caregiverTopicController');
var caregiverCurriculum = require('../controllers/caregiverCurriculumController');
var forgetPassword = require('../controllers/forgetPassController');
var sendMessageLog = require('../controllers/sendMessageLogController');
var express = require('express');

module.exports = (app) => {

  var apiRoutes = express.Router(),
    tasksRoutes = express.Router(),
    usersRoutes = express.Router(),   
    caregiverGroupsRoutes = express.Router(),
    caregiversRoutes = express.Router(),
    caregiversClassRoutes = express.Router(),
    caregiversTopicRoutes = express.Router(),
    caregiversCurriculumRoutes = express.Router();
    forgetPasswordRoutes = express.Router();
    sendMessageLogRoutes = express.Router();

  apiRoutes.use((req, res, next) => {
    console.log('Gets called every time');     
		next();
  });
  
  
  // task Routes
  apiRoutes.use('/tasks', tasksRoutes);
  tasksRoutes.get('/', taskList.list_all_tasks);
  tasksRoutes.post('/', taskList.create_a_task);
  tasksRoutes.get('/:taskId', taskList.read_a_task);
  tasksRoutes.put('/:taskId', taskList.update_a_task);
  tasksRoutes.delete('/:taskId', taskList.delete_a_task);

  // user Routes
  apiRoutes.use('/users', usersRoutes);
  //usersRoutes.get('/', userList.list_all_users);
  //usersRoutes.get('/:userId', userList.list_all_users);  
  usersRoutes.get('/login/:username/:password', userList.ckeckcredential);
  usersRoutes.post('/loginwithform', userList.ckeckcredential);
  usersRoutes.get('/setSession/:userID/:password', userList.getCredential);
  usersRoutes.get('/getNotificationCount/:userID', userList.getNotificationCount);
  usersRoutes.get('/getAllNotifications/:userID', userList.getAllNotifications);
  usersRoutes.get('/updateNotifications/:userID/:notificationId', userList.updateNotifications);

  // caregiverGroup Routes
  apiRoutes.use('/caregiverGroups', caregiverGroupsRoutes);
  caregiverGroupsRoutes.get('/getGroupsByUserID/:userId', caregiverGroupList.list_all_caregiverGroups);
  caregiverGroupsRoutes.post('/', caregiverGroupList.create_a_caregiverGroup);
  caregiverGroupsRoutes.get('/:caregiverGroupId', caregiverGroupList.read_a_caregiverGroup);
  caregiverGroupsRoutes.put('/:caregiverGroupId', caregiverGroupList.update_a_caregiverGroup);
  caregiverGroupsRoutes.delete('/:caregiverGroupId', caregiverGroupList.delete_a_caregiverGroup);

  // caregivers Routes
  apiRoutes.use('/caregivers', caregiversRoutes);
  caregiversRoutes.get('/getCaregiversByUserID/:userId', caregiverList.list_all_caregivers);
  caregiversRoutes.get('/getCaregiversProgress/:userId/:cat_slug', caregiverList.getCaregiversProgress);
  caregiversRoutes.get('/getCaregiverCount/:userId', caregiverList.getCaregiverCount);
  caregiversRoutes.get('/getDeactivatedCaregiversByUserID/:userId', caregiverList.list_deactivated_caregivers);
  caregiversRoutes.put('/activationCaregiverByID/:caregiverId', caregiverList.activationCaregiverByID);
  caregiversRoutes.post('/', caregiverList.create_a_caregiver);
  caregiversRoutes.get('/:caregiverId', caregiverList.read_a_caregiver);
  caregiversRoutes.put('/:caregiverId', caregiverList.update_a_caregiver);
  caregiversRoutes.delete('/:caregiverId/:caregiverUserId', caregiverList.delete_a_caregiver);
  
  // caregivers' default classes Routes
  apiRoutes.use('/caregiversClass', caregiversClassRoutes);
  caregiversClassRoutes.get('/getCaregiversClassList', caregiverClass.list_all_caregiver_class);
  caregiversClassRoutes.get('/getCourseCategory', caregiverClass.getCategory);
  caregiversClassRoutes.get('/getDefaultCourses', caregiverClass.getDefaultCourses);
  

  // caregivers' Topic Routes
  apiRoutes.use('/caregiversTopic', caregiversTopicRoutes);
  caregiversTopicRoutes.get('/getCaregiversTopicListByClassId/:classId', caregiverTopicList.list_all_caregiver_topics_byClassId);
  caregiversTopicRoutes.get('/getAllCaregiversTopicList', caregiverTopicList.list_all_caregiver_topics);
  app.use('', apiRoutes);

  // caregivers' Curriculum Routes
  apiRoutes.use('/caregiverCurriculum', caregiversCurriculumRoutes);
  caregiversCurriculumRoutes.get('/getCoursesByCategory/:category', caregiverCurriculum.getCoursesByCategory);
  caregiversCurriculumRoutes.get('/getTopics', caregiverCurriculum.getTopics);
  caregiversCurriculumRoutes.get('/getAllCurriculumsByUserIdAndInitial/:userId/:isInitial', caregiverCurriculum.list_all_caregiver_curriculum);
  caregiversCurriculumRoutes.put('/updateByUserIdAndInitial/:userId/:isInitial', caregiverCurriculum.update_caregiver_curriculums);


  // caregivers' Forget Password Routes
  apiRoutes.use('/forgetPassword', forgetPasswordRoutes);
  forgetPasswordRoutes.post('/checkEmailExists', forgetPassword.checkEmailExists);
  forgetPasswordRoutes.post('/checkValidToken', forgetPassword.checkValidToken);

  // agency's Send Message  Routes
  apiRoutes.use('/sendMessageLog', sendMessageLogRoutes);
  sendMessageLogRoutes.post('/getSendMessageLog/:user_id', sendMessageLog.getSendMessageLog);
  sendMessageLogRoutes.post('/getSingleMessageLog/:user_id/:logId', sendMessageLog.getSingleMessageLog);
  sendMessageLogRoutes.post('/moveToTrash', sendMessageLog.moveToTrash);
  sendMessageLogRoutes.post('/getTrashMessageLog/:user_id', sendMessageLog.getTrashMessageLog);
  sendMessageLogRoutes.post('/deletelogForever', sendMessageLog.deletelogForever);
  sendMessageLogRoutes.post('/restorelogfromTrash', sendMessageLog.restorelogfromTrash);
  sendMessageLogRoutes.post('/moveToFavorite', sendMessageLog.moveToFavorite); 
  sendMessageLogRoutes.post('/removeFavorite', sendMessageLog.removeFavorite); 
  sendMessageLogRoutes.post('/getFavoriteMessageLog/:user_id', sendMessageLog.getFavoriteMessageLog);
}