// 'use strict';
var CaregiverCurriculum = require('../models/caregiverCurriculumModel');

exports.list_all_caregiver_curriculum = function(req, res) {
  CaregiverCurriculum.getAllCaregiverCurriculumsByUserIdAndInitial(req.params.userId, req.params.isInitial, function(err, caregiverCurriculum) {
    if (err)
      res.send(err);
      console.log('res', caregiverCurriculum);
    res.send(caregiverCurriculum);
  });
};

exports.update_caregiver_curriculums = function(req, res) {
  CaregiverCurriculum.updateByUserIdAndInitial(req.params.userId, req.params.isInitial, req.body, function(err, caregiverCurriculum) {
    if (err)
      res.send(err);
    res.json(caregiverCurriculum);
  });
};

exports.getCoursesByCategory = function(req, res) {
  CaregiverCurriculum.getCoursesByCategory(req.params.category, function(err, caregiverCurriculum) {
    if (err)
      res.send(err);
      //console.log('res', caregiverCurriculum);
    res.send(caregiverCurriculum);
  });
};

exports.getTopics = function(req, res) {
  CaregiverCurriculum.getTopics(function(err, caregiverCurriculum) {
    if (err)
      res.send(err);
      console.log('res', caregiverCurriculum);
      res.json(caregiverCurriculum);
  });
};