import React from "react";
import { Link } from "react-router";

const Header = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header" style={styles.headerOverride}>
        <h1 className="text-center">New York Times Article Scrubber</h1>        
        <h3 className="text-center">Search for and annotate articles of interest!</h3>        
      </div>    
    </div>
  </nav> 
);

const styles = {
  headerOverride: {
    float: "none" 
  }
};

export default Header;
