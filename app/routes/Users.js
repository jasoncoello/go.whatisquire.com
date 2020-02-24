const express = require("express")
const users = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const User = require("../models/User")
users.use(cors())

process.env.SECRET_KEY = "secret"

users.post("/register", (req, res) => {
  const today = new Date();
  const userData = {
    user_login : req.body.user_login,
    user_pass : req.body.user_pass,
    user_nicename: req.body.user_nicename,
    user_email: req.body.user_email,
    user_url: req.body.user_url,
    user_registered: today,
    user_activation_key: req.body.user_activation_key,
    user_status: req.body.user_status,
    display_name: req.body.display_name,
  }

  User.findOne({
    where: {
      user_email: req.body.user_email
    }
  })
  .then(user => {
    if(!user) {
      bcrypt.hash(req.body.user_pass, 10, (err, hash) => {
        userData.user_pass = hash
        User.create(userData)
        .then(user => {
          res.json({status: user.user_email + 'registered'})
        })
        .catch(err => {
          res.send('error: ' + err)
        })
      })
    } else {
      res.json({error: 'User already exists'})
    }
  })
  .catch(err => {
    res.send('error: ' + err)
  })
})

module.exports = users