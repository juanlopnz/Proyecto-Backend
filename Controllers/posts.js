const express = require('express');

const subirPost = (req, res = express.response) => {
  res.json({
    ok: true,
    msg: 'Subir post /sp'
  });
}

module.exports = { subirPost };