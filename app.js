//const express = require('express') FORMA ANTIGUA DE IMPORTAR
import express from 'express'

//Traigo libreria que controla variables de entorno
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
console.log(process.env.PORT)

//app es la variable que almacena todas la funcionalidad de express
const app = express()

//Se estan atendiedo peticiones y respondiendo
//1. Peticion de tipo GET para buscar todas las habitaciones
app.get('/hoteles/habitaciones', function (req, res) {
  res.send('Estoy buscando todas las habitaciones')
})

//2. peticion de tipo GET para buscar habitacion por id
app.get('/hoteles/habitacion/:id', function (req, res) {
  res.send('Estoy buscando habitacion por id')
})

//3. peticion de tipo POST para agregar habitacion en BD
app.post('/hoteles/agregandohabitacion', function (req, res) {
  res.send('Estoy agregando una habitacion')
})

//4. Peticion de tipo PUT para editar una habitación
app.put('/hoteles/modificandohabitacion', function (req, res) {
  res.send('Estoy modificando una habitacion')
})
//Encendiendo el servidor en el puerto 3000
app.listen(process.env.PORT, function(){
    console.log("SERVIDOR ENCENDIDO")
})