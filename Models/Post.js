const {Schema, model } = require('mongoose');

const PostSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
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
  }
},{
  toJSON: {
    virtuals: true,
  },
  toObject: {
    virtuals: true,
  }
});

PostSchema.virtual('Comment', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'user',
  justOne: false,
})

module.exports = model('Post', PostSchema);