// Obtener dependencias o modulos
var express = require('express');  
var path = require('path');

// Instancia de nueva applicacion
var app = express();

// Definir directorio publico
app.use(express.static(path.join(__dirname, 'public')));

// Puerto de escucha
app.listen(3000, function (err){
    if (err) { return console.log(err) }
    console.log('Servidor escuchando en http://localhost:3000')
});  