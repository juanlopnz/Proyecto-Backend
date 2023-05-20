const express = require('express');

const crearUsuario = (req, res = express.response) => {
  res.json({
    ok: true,
    msg: 'Crear usuario /new'
  });
}

const loginUsuario = (req, res = express.response) => {
  res.json({
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