import React, { Component } from "react";
import Panel from "./common/Panel";
import Results from "./Results";
import Saved from "./Saved";
import Header from "./common/Header";
import Footer from "./common/Footer";
import SearchForm from "./SearchForm";
import API from "../utils/API";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
    // Binding getArticles to component 
    this.returnAticles = this.returnAticles.bind(this);
  }
  // Getting all articles when the component mounts
  componentDidMount() {
    // this.getArticles();
  } 
  getSaved(res) {
    /*API.getSaved().then((res) => {
      this.setState({ saved: res.data });
    });*/
    console.log(res);
  }
  returnAticles(res) {   
    let dataRes = res.data.response.docs;
    let culledArray; 
    // Loop through and provide the correct number of articles
    if (dataRes) {
      culledArray = dataRes.slice(0, 5);  
      this.setState({ articles: culledArray });          
    }; 
  }
  renderArticles() {  
    // let data = this.state.articles;
    return this.state.articles.map((article, index) => (     
      <Results
        article={article}
        key={article._id}
        getSaved={this.getSaved}
      />
    ));       
  }
  render() {
    return (
      <div>
	      <Header />
	      <div className="container">        
	        <div className="row">
            <Panel>
  	          <SearchForm 
  	            returnAticles={this.returnAticles}
  	          />
            </Panel>
	        </div>
	        <div className="row">
            <Panel> 
              {this.renderArticles()}
            </Panel> 
	        </div>
	        <div className="row">
            <Panel> 
              {this.getSaved()}
            </Panel> 
	        </div>                
	      </div>
	      <Footer />
      </div>
    );
  }
}

export default Main;
