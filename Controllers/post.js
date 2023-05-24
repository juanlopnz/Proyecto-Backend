const express = require('express');
const { Post } = require('../Models/Post');

const subirPost = async (req, res = express.response) => {

  const post = new Post(req.body);

  try {
    post.user = req.uid;
    const savedPost = await post.save();
    res.json({
      ok: true,
      post: savedPost,
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

const listarPosts = async (req, res = express.response) => {
  const posts = await Post.find().populate('user', 'url');

  try {
    res.json({
      ok: true,
      posts,
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