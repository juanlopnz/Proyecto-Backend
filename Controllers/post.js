const express = require('express');

const subirPost = (req, res = express.response) => {
  try {

    const {title, description, url, like, comment} = req.body;

    res.json({
      ok: true,
      msg: 'Subir post /sp'
    });
    
  } catch (err) {
    console.log(err);
    res.status(500).json({
      ok: false,
      err,
    }) 
  }
}

const listarPosts = (req, res = express.response) => {
  try {
    res.json({
      ok: true,
      msg: 'Listar posts /'
    }); 
  } catch (err) {
    console.log(err);
    res.status(500).json({
      ok: false,
      err,
    }) 
  }
}

const eliminarPost = (req, res = express.response) => {
  try {
    res.json({
      ok: true,
      msg: 'Eliminar post /'
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      ok: false,
      err,
    })
  }
}

module.exports = { subirPost, listarPosts, eliminarPost };