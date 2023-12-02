// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  uid: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  // other user-related fields
});

// ... rest of the model definition

module.exports = User;
