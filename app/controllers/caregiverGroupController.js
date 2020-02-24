// 'use strict';
var CaregiverGroup = require('../models/caregiverGroupModel');

exports.list_all_caregiverGroups = function(req, res) {
  CaregiverGroup.getAllCaregiverGroupByUserId(req.params.userId, function(err, caregiverGroup) {
    if (err)
      res.send(err);
    // console.log('res', caregiverGroup);
    res.send(caregiverGroup);
  });
};

exports.create_a_caregiverGroup = function(req, res) {
  var new_caregiverGroup = new CaregiverGroup(req.body);
  CaregiverGroup.createCaregiverGroup(new_caregiverGroup, function(err, caregiverGroup) {
    if (err)
      res.send(err);
    res.json(caregiverGroup);
  });
};


exports.read_a_caregiverGroup = function(req, res) {
  CaregiverGroup.getCaregiverGroupById(req.params.caregiverGroupId, function(err, caregiverGroup) {
    if (err)
      res.send(err);
    res.json(caregiverGroup);
  });
};


exports.update_a_caregiverGroup = function(req, res) {
  CaregiverGroup.updateById(req.params.caregiverGroupId, new CaregiverGroup(req.body), function(err, caregiverGroup) {
    if (err)
      res.send(err);
    res.json(caregiverGroup);
  });
};


exports.delete_a_caregiverGroup = function(req, res) {
  CaregiverGroup.remove( req.params.caregiverGroupId, function(err, caregiverGroup) {
    if (err)
      res.send(err);
    res.json({ message: 'CaregiverGroup successfully deleted' });
  });
};