const {Schema, model } = require('mongoose');

const PostSchema = Schema({
  title: {
    type: String,
    require: false
  },
  description: {
    type: String,
    require: false,
  },
  url: {
    type: String,
    require: true
  },
  like:{
    type: Number,
    require: true,
    default: 0
  },
  comment:{
    type: {},
    require: false
  },
});

module.exports = model('Post', PostSchema);