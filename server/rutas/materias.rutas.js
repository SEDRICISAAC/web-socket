;
'use strict'

const express = require("express"),
  multiParty = require("connect-multiparty")
  //autenticaControl = require("../middleware/autentica.control")
  

let api = express.Router(),
  materiasControl = require("../controles/materias.control")

//users ENDPOINT
api.get("/", (req, res) => {
  res.send("Hola API");
});

api.get('/get_materias',  materiasControl.getmaterias);
api.get('/get_idmaterias', materiasControl.getIdmaterias);
api.get('/get_namematerias', materiasControl.getnamematerias);


api.post("/insertar_materias", materiasControl.allmaterias);
api.post("/one_materias", materiasControl.onematerias);

api.put("/update_idmaterias", materiasControl.updateOnematerias);

api.delete("/delete_materias", materiasControl.borrarAllmaterias);

api.delete("/delete_idmaterias", materiasControl.borrarOnematerias);



module.exports = api;
