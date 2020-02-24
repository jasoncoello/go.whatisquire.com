// 'use strict';
var CaregiverClass = require('../models/caregiverClassModel');

exports.list_all_caregiver_class = function(req, res) {
  CaregiverClass.getAllCaregiverClass(function(err, caregiverClass) {
    if (err)
      res.send(err);
    res.send(caregiverClass);
  });
};

exports.getCategory = function(req, res) {
  CaregiverClass.getCategory(function(err, caregiverClass) {

    if (err)
      res.send(err);
    res.send(caregiverClass);
  });
};

exports.getDefaultCourses = function(req, res) {
  CaregiverClass.getDefaultCourses(function(err, caregiverClass) {

    if (err)
      res.send(err);
    res.send(caregiverClass);
  });
};