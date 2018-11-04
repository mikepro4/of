import React, { Component } from "react";
import { renderRoutes } from "react-router-config";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { FocusStyleManager } from "@blueprintjs/core";
import ReactDOM from "react-dom";
import posed, { PoseGroup } from 'react-pose';
import SplitText from 'react-pose-text';

import Grid from "./react/components/grid"

FocusStyleManager.onlyShowFocusOnTabs();

const charPoses = {
  exit: { translateY: 20, opacity: 0 },
  enter: {
    translateY: 0,
    opacity: 1,
    transition: {
     duration: 400,
    },
    delay: ({ wordIndex }) => wordIndex * 150
  }
};

class App extends Component {
	state = { isVisible: false };

	componentDidMount() {
		// this.setState({ isVisible: !this.state.isVisible });
	}

	componentDidUpdate(prevProps) {
		// Reset scrolling position on route change
		if(prevProps.location.pathname !== this.props.location.pathname) {
			let node = ReactDOM.findDOMNode(this.refs.app)
			if (node) { node.scrollTop = 0 }
		}
	}

	render() {
		const { isVisible } = this.state;

		return (
			<div className="app">

				<div className="of-grid of-grid-app">

					<div className="of-grid-logo">
						<div className="of-container">
							{isVisible && (
								<SplitText
									className="of-text"
									initialPose="exit"
									pose="enter"
									wordPoses={charPoses}
									onPoseComplete={()=> {console.log("complete")}}
									onValueChange={{
										translateY: v => {console.log("translateY: ", v)},
										opacity: v => {console.log("opacity: ", v)}
									}}
								>
									Olena Finch
								</SplitText>
							)}
						</div>
					</div>

					<div className="of-grid-navigation">
						{isVisible && (<div>Navigation</div>)}
					</div>

					{renderRoutes(this.props.route.routes)}

				</div>

				<Grid/>

				<div className="app-intro">

					<div className="of-grid">

						<div className="of-grid-photo">
							<img src="/photos/intro.png"/>
						</div>

						<div className="of-grid-name"><span>Olena Finch</span></div>

						<div className="of-grid-footer">
							<div className="of-grid-bottom-label-left">New York City</div>
							<div className="of-grid-progress-bar-container">
								<div className="of-grid-progress-bar"/>
							</div>
							<div className="of-grid-bottom-label-right">2019</div>
						</div>

					</div>

				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
	};
}

export default {
	component: connect(mapStateToProps, {})(withRouter(App))
};
