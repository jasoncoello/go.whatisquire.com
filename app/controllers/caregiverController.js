// 'use strict';
var Caregiver = require('../models/caregiverModel');

exports.list_all_caregivers = function(req, res) {
  Caregiver.getAllCaregiverByUserId(req.params.userId, function(err, caregiver) {
    if (err)
      res.send(err);
    res.send(caregiver);
  });
};

exports.getCaregiversProgress = function(req, res) {
  Caregiver.getCaregiversProgress(req.params.userId,req.params.cat_slug, function(err, caregiver) {
    if (err)
      res.send(err);
    res.send(caregiver);
  });
};

exports.getCaregiverCount = function(req, res) {
  Caregiver.getCaregiverCount(req.params.userId, function(err, caregiver) {
    if (err)
      res.send(err);
    res.send(caregiver);
  });
};

exports.list_deactivated_caregivers = function(req, res) {
  Caregiver.getAllDecactivatedCaregiverByUserId(req.params.userId, function(err, caregiver) {
    if (err)
      res.send(err);
    res.send(caregiver);
  });
};

exports.activationCaregiverByID = function(req, res) {
  Caregiver.activationCaregiverById(req.params.caregiverId, req.body, function(err, caregiver) {
    if (err)
      res.send(err);
    res.send(caregiver);
  });
};

exports.create_a_caregiver = function(req, res) {
  var new_caregiver = new Caregiver(req.body);  
  console.log(new_caregiver)
  Caregiver.createCaregiver(new_caregiver, function(err, caregiver) {
    if (err)
      res.send(err);
    res.json(caregiver);
  })
};


exports.read_a_caregiver = function(req, res) {
  Caregiver.getCaregiverById(req.params.caregiverId, function(err, caregiver) {
    if (err)
      res.send(err);
    res.json(caregiver);
  });
};


exports.update_a_caregiver = function(req, res) {
  Caregiver.updateById(req.params.caregiverId, new Caregiver(req.body), function(err, caregiver) {
    if (err)
      res.send(err);
    res.json(caregiver);
  });
};


exports.delete_a_caregiver = function(req, res) {
  Caregiver.remove( req.params.caregiverId,req.params.caregiverUserId, function(err, caregiver) {
    if (err)
      res.send(err);
    res.json({ message: 'Caregiver successfully deleted' });
  });
};