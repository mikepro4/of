import React, { Component } from "react";
import { renderRoutes } from "react-router-config";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { FocusStyleManager } from "@blueprintjs/core";
import ReactDOM from "react-dom";
import posed, { PoseGroup } from 'react-pose';
import SplitText from 'react-pose-text';
import keydown from "react-keydown";
import classNames from "classnames"
import { Link } from "react-router-dom";
import ipp from "instagram-profile-picture";
import bud from "basic-instagram-user-details";

import DoubleArrow from "./react/components/svg/double_arrow";

import { showApp, showGrid, hideGrid, fetchImageDetails } from "./redux/actions/appActions";

import Grid from "./react/components/grid"
import MainLinks from "./react/components/navigation/main_links/"

import Logo from "./react/components/app/logo/"
import Intro from "./react/components/app/intro/"
import TopLeft from "./react/components/app/top_left/"

FocusStyleManager.onlyShowFocusOnTabs();

class App extends Component {
	state = {
		introVisible: false,

		instagramHovered: false,
		facebookHovered: false
	};

	componentDidMount() {
		// this.setState({ introVisible: true });
		ipp.image("https://www.instagram.com/p/BpZvZeWhSei/").then(img => {
	  	console.log(img);
		});

		bud("mikepro4", 'id').then(id => {
		  console.log(id);
		  // => { data: '259220806' }
		});

		this.props.fetchImageDetails()

		setTimeout(()=> {
			this.setState({ leftLabelVisible: true });
		}, 2000)
	}

	@keydown("G")
	toggleGrid() {
		if(this.props.gridVisible) {
			this.props.hideGrid()
		} else {
			this.props.showGrid()
		}
	}

	componentDidUpdate(prevProps) {
		// Reset scrolling position on route change
		if(prevProps.location.pathname !== this.props.location.pathname) {
			let node = ReactDOM.findDOMNode(this.refs.app)
			if (node) { node.scrollTop = 0 }
		}
	}

	render() {
		return (
			<div className="app">

				<div className="of-grid of-grid-app">

					<Logo isVisible={this.props.appVisible} />

					<TopLeft isVisible={this.props.appVisible} />

					<div className="of-grid-top-right">
						<div className="of-container">
							<a href="#" className="line-hover">contact@olenafinch.com</a>
						</div>
					</div>

					<div className="of-grid-bottom-right">
						<div className="of-container">Promotions & modeling</div>
						<div className="of-container">New York City</div>
					</div>

					<div className="of-grid-bottom-left">
						<div className="arrow-container">
							<div className="arrow-icon"><DoubleArrow/></div>
						</div>
						<div className="scroll-message-container">
							<div className="scroll-message-title">Scroll down</div>
							<div className="scroll-message-description">More content ahead</div>
						</div>
					</div>

					<div className="of-grid-navigation">
						{this.props.appVisible && (
								<MainLinks isVisible={this.props.appVisible} />
						)}
					</div>

					<div className={classNames({"of-grid-content-visible": this.props.appVisible}, "of-grid-content")}>
						{renderRoutes(this.props.route.routes)}
					</div>

				</div>

				<Grid/>

				<Intro />

			</div>
		)
	}
}

function mapStateToProps({app}) {
	return {
		appVisible: app.appVisible,
		gridVisible: app.gridVisible
	};
}

export default {
	component: connect(mapStateToProps, { showApp, showGrid, hideGrid, fetchImageDetails })(withRouter(App))
};
