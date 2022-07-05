"use strict";
const databaseConfig = require("../config/env/development");
const mysql = require('mysql')

const Sequelize = require("sequelize");
const sequelizeInstance = new Sequelize(databaseConfig.Sql.DB, databaseConfig.Sql.USER, databaseConfig.Sql.PASSWORD, {
  host: databaseConfig.Sql.HOST,
  dialect: databaseConfig.Sql.dialect,
  operatorsAliases: false,

  pool: {
    max: databaseConfig.Sql.pool.max,
    min: databaseConfig.Sql.pool.min,
    acquire: databaseConfig.Sql.pool.acquire,
    idle: databaseConfig.Sql.pool.idle
  }
});
sequelizeInstance.authenticate()
.then(() =>{
    console.log("DataBase Connected Successfully");
}).catch(err =>{
    console.log(err);
})


// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelizeInstance;

// db.students = require("../src/models/test")(sequelizeInstance, Sequelize);

module.exports = sequelizeInstance;
// module.exports = db