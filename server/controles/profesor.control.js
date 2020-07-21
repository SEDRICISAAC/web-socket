;
'use strict'

const fs = require("fs"),
  path = require('path'),
  profesor = require('../modelos/profesorModel'),
  bcrypt = require('bcrypt'),
  jwt = require('jsonwebtoken')



  //Trae todos los datos
  let getProfesores = async (req, res) =>{
    let data = await profesor.find()
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

  //inserta un usuario
  let oneProfesor =  (req, res) =>{
    nombre = req.body.nombre
    apellido = req.body.apellido
    profesor.create({nombre, apellido})
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
  

 //insertar varios profesor
 let allProfesores = (req, res) =>{
    data = req.body.data
    profesor.insertMany(data)
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


//Actualizar un usuario 
let updateOneProfesor = (req, res) =>{
  id = req.query.id
  data = req.body.data
  profesor.updateOne( {'_id': id} , {$set: data})
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
let getIdProfesor = (req, res) =>{
    id = req.query.id
    profesor.find({'_id': id})
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
let getnameProfesor = (req, res) =>{
  nombre = req.query.nombre
  profesor.find({nombre})
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
let borrarOneProfesor = (req, res) =>{
    id = req.query.id
    profesor.deleteOne({'_id': id})
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
let borrarAllProfesores = (req, res) =>{
    profesor.deleteMany({})
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


let nuevoProfesor = async(req, res) =>{
  let usuario = req.body.usuario
  profesor.create(usuario)
    .then((data) =>{
        res.status(200).json({
            data: data,
            msg:'listo'
        })
    }).catch(err =>{
        res.status(500).json({
            data: null,
            msg:'No se pudo crear'
    })
  })
}


let login = (req, res) => {
  let data = req.body.data,
     email = data.email,
     password = data.password;
     profesor.find({ email }).then((data) => {
         if (data[0].email === email) {
             let tokenBody = {
                     email: data[0].email
                 },
                 token = jwt.sign({ data: tokenBody }, process.env.KEY_JWT, {
                     algorithm: "HS256",
                     expiresIn: 6000,
                 });
             bcrypt.compareSync(password, data[0].passw) ?
                 res.status(200).json({
                     token,
                 }) :
                 res.status(404).json({
                     ok: false,
                     data: null,
                     msg: "Password incorrecto",
                 });
         } else {
             return res.status(404)
         }
     })
     .catch((err) => {
         return res.status(404).json({
             ok: false,
             data: null,
             msg: "Email incorrecto",
         });
     });

};


module.exports = {
  getProfesores,
  oneProfesor,
  allProfesores,
  updateOneProfesor,
  getIdProfesor,
  getnameProfesor,
  borrarOneProfesor,
  borrarAllProfesores,
  login,
  nuevoProfesor
}
