var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
  date: {
    type: String,
    unique: true,
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