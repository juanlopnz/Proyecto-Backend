const express = require('express');
const { validationResult } = require('express-validator');

const crearUsuario = (req, res = express.response) => {

  const { username, email, password, confirmpassword  }  = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped()
    });
  }

  if ( password !== confirmpassword ) {
    return res.status(400).json({
      ok: false,
      msg: 'Las contraseñas no coinciden'
    });
  }

  res.status(200).json({
    ok: true,
    msg: 'Crear usuario /new',
    username, email, password 
  });
}

const loginUsuario = (req, res = express.response) => {

  const { username, password }  = req.body;

  res.status(200).json({
    ok: true,
    msg: 'Login usuario /'
  });
}

const revalidarToken = (req, res = express.response) => {
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