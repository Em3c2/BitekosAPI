//Database config

//Require
require('dotenv').config();
const express = require("express");
const Sequelize = require("sequelize");
const app = express();
const {DB_USER, DB_PASSWORD, DB_HOST} = process.env;

//Models require
const Libros = require("./models/libros.js");
let modelDefiners = [Libros];   // <--------- Aqui hay que agregar nuevos modelos

// setup a new database POSTGRESS
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/bitekosdb`, {
  logging: false, 
});

//Check
sequelize
  .authenticate()
  .then(data => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.log("Unable to connect to the database: ", err);
  });


//Conect models

modelDefiners.forEach(model => model(sequelize));

// Relations





//Export

module.exports = {
  ...sequelize.models,
  conn: sequelize
};
