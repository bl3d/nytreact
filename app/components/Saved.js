import React, { Component } from "react";
import API from "../utils/API";

class Saved extends Component {
  deleteArticle(id) {
  	API.deleteSaved(id).then(this.props.getSaved);
  }	
  addComment(comment) {
  	// API.addComment(saved).then(this.props.getSaved);
  }
  render() { 
    return (
	  <li className="list-group-item" data-date={this.props.saved.articleDate}>
		  <a href={this.props.saved.url}>
		    {this.props.saved.title}
	      </a>
		  <button
		    className="btn btn-default saveBtn" 
		    onClick={() => this.deleteArticle(this.props.saved._id)}
		  >  
		    Delete
		  </button>    
	  </li>
    );    
  }
}

export default Saved;
