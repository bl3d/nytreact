//schema and model for users to create comments
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var moment = require('moment');
var fomatted_date = moment().format('MM/DD/YY');

// Create the Comment schema
var CommentSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Number,
    default: fomatted_date
  },
  body: {
    type: String,
    required: true
  }
});

// 
var Comment = mongoose.model("Comment", CommentSchema);

// 
module.exports = Comment;
