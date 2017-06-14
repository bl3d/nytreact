var express = require("express");
var articlesController = require("../controllers/articlesController");
var router = new express.Router();

// Get all saved articles
router.get("/articles", articlesController.retrieve);
// Create a new quote using data passed in req.body
router.post("/articles", articlesController.save);
// Delete a specific quote using the id in req.params.id
router.delete("/articles/:id", articlesController.destroy);

module.exports = router;
