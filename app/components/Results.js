import React, { Component } from "react";
import API from "../utils/API";

class Results extends Component {
  saveArticle(article) {
  	API.saveArticle(article).then(this.props.getSaved);
  }
  render() {
    return (
	  <li className="list-group-item" data-date={this.props.article.pub_date}>
		  <a href="this.props.article.web_url">
		    {this.props.article.headline.main}
	      </a>
		  <button
		    className="btn btn-default saveBtn" 
		    onClick={() => this.saveArticle(this.props.article)}
		  >  
		    Save
		  </button>    
	  </li>
    );
  }
}

export default Results;