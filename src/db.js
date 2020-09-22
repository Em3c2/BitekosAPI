//Database config

//Require
require('dotenv').config();
const express = require("express");
const {Sequelize} = require("sequelize");
const app = express();
const {DB_USER, DB_PASS, DB_HOST} = process.env;

//Models require
let modelDefiners = [           // <--------- Aqui hay que agregar nuevos modelos
      require("./models/Libro.js")
      ];  

// setup a new database POSTGRESS
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/bitekosdb`, {
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

// Captalize
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map(entry => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// Relations

//PRUEBA
  let { Libro } = sequelize.models 

//Export

module.exports = {
  Libro,
  conn: sequelize
};
