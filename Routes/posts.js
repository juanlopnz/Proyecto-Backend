const express = require('express');
const router = express.Router();

const { subirPost } = require('../Controllers/posts');

router.post('/sp', subirPost);

module.exports = router;