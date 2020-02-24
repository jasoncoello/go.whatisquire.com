// 'use strict';
var Topic = require('../models/caregiverTopicModel');

exports.list_all_caregiver_topics_byClassId = function(req, res) {
  Topic.getAllTopicByClassId(req.params.classId, function(err, topic) {
    if (err)
      res.send(err);
    res.send(topic);
  });
};

exports.list_all_caregiver_topics = function(req, res) {
  Topic.getAllTopicList(function(err, topic) {
    if (err)
      res.send(err);
    res.send(topic);
  });
};