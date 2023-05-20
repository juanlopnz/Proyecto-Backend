const express = require('express')
const router = express.Router();
const { check } = require('express-validator');
const {crearUsuario, loginUsuario, revalidarToken} = require('../Controllers/auth');
const { validarCampos } = require('../Middlewares/validar-campos');

router.post(
  '/new', 
  [  
    check('username', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña debe tener al menos 6 caracteres').isLength({ min: 6 }),
    check('confirmpassword', ).isLength({ min: 6 }),
    validarCampos
  ],
  crearUsuario );

router.post(
  '/', 
  [
    check('username', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos
  ],
  loginUsuario);

router.get('/renew', revalidarToken);

module.exports = router;