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
      articles: [],
      saved: []
    };
    // Binding getArticles to component 
    this.returnAticles = this.returnAticles.bind(this);
    this.getSaved = this.getSaved.bind(this);
  }
  // Getting saved articles when the component mounts
  componentDidMount() {
    this.getSaved();
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
    return this.state.articles.map((article, index) => (     
      <Results
        article={article}
        key={index}
        getSaved={this.getSaved}
      />
    ));       
  }
  getSaved(res) { 
    let savedArray = []; 

    API.getSaved().then((res) => {  
      res.data.forEach(function(item){
        savedArray.push(item);
      });
      
      this.setState({ saved: savedArray });    
    });
  }  
  renderSaved() {  
    return this.state.saved.map((saved, index) => (     
      <Saved
        saved={saved}
        key={saved._id}
        getSaved={this.getSaved}
      />
    ));       
  }  
  render() {
    return (
      <div>
	      <Header />
	      <div className="container">        
	        <div id="searchSection" className="row">
            <Panel headerTitle="Search">
  	          <SearchForm 
                returnAticles={this.returnAticles}
  	          />
            </Panel>
	        </div>
          {(this.state.articles.length > 0) ? (
          <div id="resultsSection" className="row">
            <Panel headerTitle="Results"> 
              {this.renderArticles()}              
            </Panel> 
          </div>            
          ) : ( 
            <div></div>
          )}
          {(this.state.saved.length > 0) ? (
          <div id="savedSection" className="row">
            <Panel headerTitle="Saved Articles"> 
              {this.renderSaved()}
            </Panel> 
          </div>            
          ) : ( 
            <div></div>
          )}                         
	      </div>
	      <Footer />
      </div>
    );
  }
}

export default Main;
