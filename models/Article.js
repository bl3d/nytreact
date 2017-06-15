var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var moment = require('moment');
var fomatted_date = moment().format('MM/DD/YY');

var articleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  dateSaved: {
    type: String,
    default: fomatted_date
  },
  articleDate: {
    type: String,
    required: true
  },  
  url: {
    type: String,
    unique: true,
    required: true
  },
  saved: {
    type: Boolean,
    default: false
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }]
});

var Article = mongoose.model("Article", articleSchema);

module.exports = Article;