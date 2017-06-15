var Article = require("../models/Article");

module.exports = {
  // get Articles from the db
  retrieve: function(req, res) {
    var query;
    if (req.query) {
      query = req.query;
    }
    else {
      query = req.params.id ? { _id: req.params.id } : {};
    }
    Article.find(query)
      .then(function(doc) {
        res.json(doc);
      }).catch(function(err) {
        res.json(err);
    });
  },
  // save a specific article to db
  save: function(req, res) {
    var article = req.body.article;
    var result = {};

    result.title = article.headline.main; 
    result.articleDate = article.pub_date; 
    result.url = article.web_url;
    result.saved = true;

    var entry = new Article(result);

    entry.save(function(err, doc) {
      if (err) {
        console.log(err);
      }
      else {
        // console.log(doc); 
        res.json(doc)
      }
    });
  },
  // delete a specific article from the db
  destroy: function(req, res) {
    Article.remove({
      _id: req.params.id
    }).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  }
};
