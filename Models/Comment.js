const {Schema, model } = require('mongoose');

const CommentSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  text: {
    type: String,
    require: true
  },
});

module.exports = model('Comment', CommentSchema);