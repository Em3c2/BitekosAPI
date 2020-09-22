const express = require('express');
const { Libro } = require('../db.js');  // Aqui agregar nuevos modelos
const app = express();

app.get('/', (req, res) => {
	res.send('<h3>Funcionando beibe</h3>');
});

app.get('/catalogo/libros', (req, res) => {
	Libro.findAll()
	.then(data => {
		if (data.length < 1) res.send('<h4>No hay libros... todavia!</h4>')
		res.send(data)
	})
	.catch(err => {
		res.send('<h4>Ops!<br>' + err + '</h4>')
	})
})

app.get('/catalogo/libros/cargar', (req,res) => {
	Libro.create({
		titulo: 'Alicia en el pais de las maravillas',
		autor: 'Lewis Carrol',
		editorial: 'Clarin',
		año: 1929,
		tema: 'Fantasía, Literatura Juvenil, Clásicos'})
	.then(data => {
		res.send(data)
	})
	.catch(err => {
		res.send('<h4>Ops!<br>' + err + '</h4>')
	})
})

module.exports = app;
