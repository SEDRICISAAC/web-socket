;
'use strict'

const fs = require("fs"),
  path = require('path'),
  Materias = require("../modelos/materiasModel");
  bcrypt = require('bcrypt'),
  jwt = require('jsonwebtoken')



  //Trae todo
  let getmaterias = async (req, res) =>{
    let data = await Materias.find()
    if(data) {
      res.status(200).json({
        transaccion:true,
        data,
        msg:'listo',
      })
    } else {
      res.status(500).json({
        transaccion: false,
        data: null,
        msg: err
    })
    }
  }

  //inserta un dato
  let onematerias =  (req, res) =>{
    nombre = req.body.nombre
    Materias.create({nombre, apellido})
      .then(data =>{
        res.status(200).json({
          transaccion: true,
          data: data,
          msg: 'listo'
        })
      }).catch( err =>{
        res.status(500).json({
          transaccion: false,
          data: null,
          msg: err
      })
  })
}
  

 //insertar varios 
 let allmaterias = (req, res) =>{
    data = req.body.data
    Materias.insertMany(data)
      .then(data =>{
        res.status(200).json({
          transaccion: true,
          data: data,
          msg: 'listo'
        })
      }).catch( err =>{
        res.status(500).json({
          transaccion: false,
          data: null,
          msg: err
      })
  })
}


//Actualizar un dato
let updateOnematerias = (req, res) =>{
  id = req.query.id
  data = req.body.data
  Materias.updateOne( {'_id': id} , {$set: data})
    .then(data =>{
      res.status(200).json({
        transaccion: true,
        data: data,
        msg: 'listo'
      })
    }).catch( err =>{
      res.status(500).json({
        transaccion: false,
        data: null,
        msg: err
    })
  })
}

    

//Buscar por id
let getIdmaterias = (req, res) =>{
    id = req.query.id
    Materias.find({'_id': id})
      .then(data =>{
        res.status(200).json({
          transaccion: true,
          data: data,
          msg: 'listo'
        })
      }).catch( err =>{
        res.status(500).json({
          transaccion: false,
          data: null,
          msg: err
      })
  })
}


//Buscar por nombre
let getnamematerias = (req, res) =>{
  nombre = req.query.nombre
  Materias.find({nombre})
    .then(data =>{
      res.status(200).json({
        transaccion: true,
        data: data,
        msg: 'listo'
      })
    }).catch( err =>{
      res.status(500).json({
        transaccion: false,
        data: null,
        msg: err
    })
})
}



//Borrar one
let borrarOnematerias = (req, res) =>{
    id = req.query.id
    Materias.deleteOne({'_id': id})
      .then(data =>{
        res.status(200).json({
          transaccion: true,
          data: data,
          msg: `${data.deletedCount}`
        })
      }).catch( err =>{
        res.status(500).json({
          transaccion: false,
          data: null,
          msg: err
      })
  })
}


//Borrar varios
let borrarAllmaterias = (req, res) =>{
    Materias.deleteMany({})
      .then(data =>{
        res.status(200).json({
          transaccion: true,
          data: data,
          msg: `${data.deletedCount}`
        })
      }).catch( err =>{
        res.status(500).json({
          transaccion: false,
          data: null,
          msg: err
      })
  })
}





module.exports = {
  getmaterias,
  onematerias,
  allmaterias,
  updateOnematerias,
  getIdmaterias,
  getnamematerias,
  borrarOnematerias,
  borrarAllmaterias
}
