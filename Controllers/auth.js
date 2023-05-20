const express = require('express');
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

    const user = new Usuario(username, email, password);
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


const loginUsuario = async (req, res = express.response) => {

  const { username, password }  = req.body;

  res.status(200).json({
    ok: true,
    msg: 'Login usuario /'
  });
}

const revalidarToken = async (req, res = express.response) => {
  res.json({
    ok: true,
    msg: 'Revalidar token /renew'
  });
}
}

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
}