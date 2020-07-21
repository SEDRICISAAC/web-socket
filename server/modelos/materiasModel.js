const mongoose = require("mongoose");

const { Schema } = mongoose;

const userModel = Schema({
  id: { type: Number },
  nombre: { type: String },
  descripcion: { type: String },
  autor: { type: String }

});

module.exports = mongoose.model("materias", userModel);
