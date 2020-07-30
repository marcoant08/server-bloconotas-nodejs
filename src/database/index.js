const dbConfig = require("../config/database");
const sequelize = require("sequelize");
const Notes = require("../models/Notes");

const connection = new sequelize(dbConfig);

connection
  .authenticate()
  .then(function () {
    console.log("conectado");
  })
  .catch(function () {
    console.log("falha");
  });

Notes.init(connection);

module.exports = connection;
