const express = require('express');
const { Libro } = require('../db.js');  // Aqui agregar nuevos modelos
const app = express();

app.get('/', (req, res) => {
	res.send('Funcionando beibe');
});

app.get('/catalogo/libros', (req, res) => {
	Libro.findAll()
	.then(data => {
		res.send(data)
	})
	.catch(err => {
		res.send('Ops!')
	})
})

module.exports = app;
