// config/database.js

const { Sequelize,DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  database: 'dpp',
  username: 'monika',
  password: 'monika@24',
  host: 'localhost',
  dialect: 'postgres',
  define: {
    timestamps: false, // Disable Sequelize's default timestamps
  },
});



sequelize.define('UserTables', {
    uid: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    // other user-related fields
  });
  console.log(sequelize)
module.exports = sequelize;
