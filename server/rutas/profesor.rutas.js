;
'use strict'

const express = require("express"),
  multiParty = require("connect-multiparty"),
  passwordControl = require("../middleware/password.control"),
  autenticaControl = require("../middleware/autentica.control"),
  ip = require("../middleware/showip")
  

let api = express.Router(),
  profesorControl = require("../controles/profesor.control")
  //galleryMiddleware = multiParty({ uploadDir: "./files/galeria" })

//users ENDPOINT
api.get("/", (req, res) => {
  res.send("Hola API");
});

api.get('/get_profesores', ip.ShowIP, autenticaControl.autentica, profesorControl.getProfesores);
api.get('/get_idprofesor', profesorControl.getIdProfesor);
api.get('/get_nameprofesor', profesorControl.getnameProfesor);


api.post("/insertar_profesores", profesorControl.allProfesores);
api.post("/one_profesor", profesorControl.oneProfesor);

api.put("/update_idprofesor", profesorControl.updateOneProfesor);

api.delete("/delete_profesores", profesorControl.borrarAllProfesores);

api.delete("/delete_idprofesor", profesorControl.borrarOneProfesor);

//api.put("/imagen_profesor/:id", galleryMiddleware, userController.postUserTest);

api.post('/nuevo_profesor', [passwordControl.codificarPassword], profesorControl.nuevoProfesor);
api.post('/login_profesor',  profesorControl.login) 



module.exports = api;
