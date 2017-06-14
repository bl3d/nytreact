import React, { Component } from "react"; 

const Panel = props => (
  <div className="col-lg-12">
    <div className="panel panel-default">
      <div className="panel-body">
        {props.children}
      </div>
    </div>
  </div>
);

export default Panel;
