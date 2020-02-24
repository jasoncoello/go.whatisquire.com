// 'use strict';
var SendMessageLog = require('../models/sendMessageLogModel');

exports.getSendMessageLog = function(req, res) {
    //var uname = Buffer.from(req.body.username, 'base64').toString();
    SendMessageLog.getSendMessageLog(req.params.user_id, function(err, SendMessageLog) {
    if (err)
      res.send(err);
      console.log('res', SendMessageLog);
    res.send(SendMessageLog);
  });
};

exports.getSingleMessageLog = function(req, res) {
  //var uname = Buffer.from(req.body.username, 'base64').toString();
  SendMessageLog.getSingleMessageLog(req.params.user_id,req.params.logId, function(err, SendMessageLog) {
  if (err)
    res.send(err);
    console.log('res', SendMessageLog);
  res.send(SendMessageLog);
});
};

exports.moveToTrash = function(req, res) {
  //var uname = Buffer.from(req.body.username, 'base64').toString();
  SendMessageLog.moveToTrash(req.body.agencyId,req.body.messageLog, function(err, SendMessageLog) {
  if (err)
    res.send(err);
    console.log('res', SendMessageLog);
  res.send(SendMessageLog);
});
};

exports.getTrashMessageLog = function(req, res) {
  //var uname = Buffer.from(req.body.username, 'base64').toString();
  SendMessageLog.getTrashMessageLog(req.params.user_id, function(err, SendMessageLog) {
  if (err)
    res.send(err);
    console.log('res', SendMessageLog);
  res.send(SendMessageLog);
});
};

exports.deletelogForever = function(req, res) {
  //var uname = Buffer.from(req.body.username, 'base64').toString();
  SendMessageLog.deletelogForever(req.body.agencyId,req.body.messageLog, function(err, SendMessageLog) {
  if (err)
    res.send(err);
    console.log('res', SendMessageLog);
  res.send(SendMessageLog);
});
};

exports.restorelogfromTrash = function(req, res) {
  //var uname = Buffer.from(req.body.username, 'base64').toString();
  SendMessageLog.restorelogfromTrash(req.body.agencyId,req.body.messageLog, function(err, SendMessageLog) {
  if (err)
    res.send(err);
    console.log('res', SendMessageLog);
  res.send(SendMessageLog);
});
};

exports.moveToFavorite = function(req, res) {
  //var uname = Buffer.from(req.body.username, 'base64').toString();
  SendMessageLog.moveToFavorite(req.body.agencyId,req.body.messageLog, function(err, SendMessageLog) {
  if (err)
    res.send(err);
    console.log('res', SendMessageLog);
  res.send(SendMessageLog);
});
};

exports.getFavoriteMessageLog = function(req, res) {
  //var uname = Buffer.from(req.body.username, 'base64').toString();
  SendMessageLog.getFavoriteMessageLog(req.params.user_id, function(err, SendMessageLog) {
  if (err)
    res.send(err);
    console.log('res', SendMessageLog);
  res.send(SendMessageLog);
});
};

exports.removeFavorite = function(req, res) {
  //var uname = Buffer.from(req.body.username, 'base64').toString();
  SendMessageLog.removeFavorite(req.body.agencyId,req.body.messageLog, function(err, SendMessageLog) {
  if (err)
    res.send(err);
    console.log('res', SendMessageLog);
  res.send(SendMessageLog);
});
};