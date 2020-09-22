const express = require('express');
const {Libros} = require('../db.js');  // Aqui agregar nuevos modelos
const app = express();

app.get('/', (req, res) => {
	res.send('Funcionando beibe');
});

module.exports = app;
