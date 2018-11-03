import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Intent } from "@blueprintjs/core";
import classnames from "classnames";
import ReactDOM from "react-dom";

class Grid extends Component {
	render() {
		return (
  			<div className="of-grid of-grid-preview">
          <div className="of-grid-container">
            <div className="of-grid-1"></div>
            <div className="of-grid-1"></div>
            <div className="of-grid-1"></div>
            <div className="of-grid-1"></div>
            <div className="of-grid-1"></div>
            <div className="of-grid-1"></div>
            <div className="of-grid-1"></div>
            <div className="of-grid-1"></div>
            <div className="of-grid-1"></div>
            <div className="of-grid-1"></div>
            <div className="of-grid-1"></div>
            <div className="of-grid-1"></div>
            <div className="of-grid-1"></div>
            <div className="of-grid-1"></div>
            <div className="of-grid-1"></div>
            <div className="of-grid-1"></div>
            <div className="of-grid-1"></div>
            <div className="of-grid-1"></div>
            <div className="of-grid-1"></div>
            <div className="of-grid-1"></div>
          </div>
        </div>
		);
	}
}

function mapStateToProps(state) {
	return {
		location: state.router.location
	};
}

export default connect(mapStateToProps, {})(Grid);
