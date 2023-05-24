const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const { subirPost, listarPosts, eliminarPost } = require('../Controllers/post');

router.post('/sp', 
  [
    check('url', 'La url es obligatoria').not().isEmpty(),
  ], 
  subirPost);
  
router.get('/', listarPosts)
router.delete('/:id', eliminarPost)

module.exports = router;