import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Intent } from "@blueprintjs/core";
import classNames from "classnames";
import ReactDOM from "react-dom";

class Grid extends Component {
	render() {
		return (
  			<div
					className={classNames({"grid-visible": this.props.gridVisible}, "of-grid of-grid-preview")}
				>
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
		location: state.router.location,
		gridVisible: state.app.gridVisible
	};
}

export default connect(mapStateToProps, {})(Grid);
