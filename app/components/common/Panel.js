import React, { Component } from "react"; 

const Panel = props => (
  <div className="col-lg-12">
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title text-center">{props.headerTitle}</h3>
      </div>    
      <div className="panel-body">
        {props.children}
      </div>
    </div>
  </div>
);

export default Panel;
