const DatabaseConnection = require("./database");
const data = require("./seed/users.json");

const config = {
  user: "admin",
  pass: "4dm1n",
  table: "users",
};

const database = new DatabaseConnection(config.user, config.pass, config.table);

module.exports = {
  database,
  data,
};
