import axios from "axios";

const API = {
  // get all articles from out db
  getArticles: function(queryURL) {
    return axios.get(queryURL);
  },  
  // get all saved articles from out db
  getSaved: function() {
    return axios.get("/api/articles");    
  },
  // Save article to the db
  saveArticle: function(article) {
    return axios.post("/api/articles", { article });
  },
  // delete article from the db by id
  deleteSaved: function(id) {
    return axios.delete(`/api/articles/${id}`);
  }
};

export default API;
