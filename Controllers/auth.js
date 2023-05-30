const express = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../Models/User')

const crearUsuario = async (req, res = express.response) => {

  const { username, email, password, confirmpassword  }  = req.body;

  try{
    if ( password !== confirmpassword ) {
      return res.status(400).json({
        ok: false,
        msg: 'Las contraseñas no coinciden'
      });
    }

    const a = await Usuario.findOne({ email: email });

    if(a){
      return res.status(400).json({
        ok: false,
        msg: 'Ya existe un usuario con ese email'
      })
    }

    const user = new Usuario({username, email, password});
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);
    await user.save();
  
    res.status(200).json({
      ok: true,
      msg: 'Crear usuario /new',
      user
    });
  }catch(err){
    console.log(err);
    res.status(500).json({
      ok: false,
      err,
    })
  }
}

const loginUsuario = async (req, res = express.response) => {

  const { username, password }  = req.body;

  try {    

    const user = await Usuario.findOne({ username: username });

    if(!user){
      return res.status(400).json({
        ok: false,
        msg: 'El usuario no existe'
      })
    }

    const validPassword = bcrypt.compareSync(password, user.password);
    if(!validPassword){
      return res.status(400).json({
        ok: false,
        msg: 'La contraseña no es valida'
      })
    }

    res.status(200).json({
      ok: true,
      msg: 'Login usuario /'
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      ok: false,
      err,
    })   
  }

}

const revalidarToken = async (req, res = express.response) => {
  res.json({
    ok: true,
    msg: 'Revalidar token /renew'
  });
}

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
}