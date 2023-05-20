const express = require('express')
const router = express.Router();
const { check } = require('express-validator');
const {crearUsuario, loginUsuario, revalidarToken} = require('../Controllers/auth');

router.post(
  '/new', 
  [  
    check('username', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña debe tener al menos 6 caracteres').isLength({ min: 6 }),
    check('confirmpassword', ).isLength({ min: 6 }),
  ],
  crearUsuario );

router.post('/', loginUsuario);

router.get('/renew', revalidarToken);

module.exports = router;