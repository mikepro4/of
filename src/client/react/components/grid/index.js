import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Intent } from "@blueprintjs/core";
import classNames from "classnames";
import ReactDOM from "react-dom";

class Grid extends Component {
	render() {

		let guideXStyle = {
			top: this.props.clientY + "px"
		}
		let guideYStyle = {
			left: this.props.clientX + "px"
		}
		let left = this.props.clientWidth - this.props.clientX < 200

		let tooltipStyle = {}

		if(left) {
			tooltipStyle = {
				top: this.props.clientY + 10 + "px",
				left: this.props.clientX - 220 + "px"
			}
		} else {
			tooltipStyle = {
				top: this.props.clientY + 10 + "px",
				left: this.props.clientX + 10 + "px"
			}
		}


		console.log(left)


		return (
  			<div
					className={classNames({"grid-visible": this.props.gridVisible}, "of-grid of-grid-preview")}
				>

					{this.props.gridVisible ? (
						<div>
							<div className="guide-x" style={guideXStyle} />
							<div className="guide-y" style={guideYStyle}/>
							<div className={
								classNames({"left-tooltip": left }, "cursor-tooltip")
							}
								style={tooltipStyle}
							>
								<div className="cursor-tooltip-value"><span>ClientX:</span> {this.props.clientX}</div>
								<div className="cursor-tooltip-value"><span>ClientY:</span> {this.props.clientY}</div>
								<div className="cursor-tooltip-value"><span>PageY:</span> {this.props.pageY}</div>
							</div>
						</div>
					): ""}

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
