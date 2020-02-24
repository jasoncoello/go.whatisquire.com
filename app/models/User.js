const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
  'user',
  {
    ID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_login: {
      type: Sequelize.STRING
    },
    user_pass: {
      type: Sequelize.STRING
    },
    user_nicename: {
      type: Sequelize.STRING
    },
    user_email: {
      type: Sequelize.STRING
    },
    user_url: {
      type: Sequelize.STRING
    },
    user_registered: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    user_activation_key: {
      type: Sequelize.STRING
    },
    user_status: {
      type: Sequelize.INTEGER
    },
    display_name: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
)