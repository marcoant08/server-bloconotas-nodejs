const sequelize = require("sequelize");
const { Sequelize } = require("sequelize");

module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "zxcqwe",
  database: "bib",
  define: {
    timestamps: true,
    underscored: true,
  },
};
