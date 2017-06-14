import React, { Component } from "react";
import API from "../utils/API";

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      startYearValue: "",
      endYearValue: ""
    }; 
    this.handleInputChange_input = this.handleInputChange_input.bind(this);
    this.handleInputChange_startYear = this.handleInputChange_startYear.bind(this);
    this.handleInputChange_endYear = this.handleInputChange_endYear.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleInputChange_input(event) {
    this.setState({ inputValue: event.target.value }); 
  }
  handleInputChange_startYear(event) {
    this.setState({ startYearValue: event.target.value }); 
  }
  handleInputChange_endYear(event) {
    this.setState({ endYearValue: event.target.value }); 
  }
  handleButtonClick(e) {
    e.preventDefault();

    const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
    const queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";

    let queryURL = queryURLBase + this.state.inputValue;

    // Include start year if provided by user
    if (parseInt(this.state.startYearValue)) {
      queryURL = queryURL + "&begin_date=" + this.state.startYearValue + "0101";
    }

    // Include end year if provided by user
    if (parseInt(this.state.endYearValue)) {
      queryURL = queryURL + "&end_date=" + this.state.endYearValue + "0101";
    }    

    API.getArticles(queryURL)
    .then(this.props.returnAticles);
  }
  render() {
    return ( 
      <div className="col-md-12">
        <form role="form">
          <div className="form-group">
            <label htmlFor="search">Search Term:</label>
            <input 
              type="text" 
              className="form-control" 
              id="search-term" 
              onChange={this.handleInputChange_input}
              value={this.state.inputValue}
            />
          </div>

          <div className="form-group">
            <label htmlFor="start-year">Start Year (Optional):</label>
            <input 
              type="text" 
              className="form-control" 
              id="start-year"
              onChange={this.handleInputChange_startYear}
              value={this.state.startYearValue}               
            />
          </div>

          <div className="form-group">
            <label htmlFor="end-year">End Year (Optional):</label>
            <input 
              type="text" 
              className="form-control" 
              id="end-year"
              onChange={this.handleInputChange_endYear}
              value={this.state.endYearValue}                 
            />
          </div>

          <button
            className="btn btn-default" 
            onClick={this.handleButtonClick}
            id="run-search"
          >
            <i className="fa fa-search"></i> 
            Search
          </button>

        </form> 
      </div>     
    );
  }
}

export default SearchForm;