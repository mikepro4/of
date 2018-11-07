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


import { showApp, showGrid, hideGrid, fetchImageDetails, fetchUserDetails, loadAllDetails} from "./redux/actions/appActions";

import Grid from "./react/components/grid"
import MainLinks from "./react/components/navigation/main_links/"

import Logo from "./react/components/app/logo/"
import Intro from "./react/components/app/intro/"
import TopLeft from "./react/components/app/top_left/"
import TopRight from "./react/components/app/top_right/"
import BottomRight from "./react/components/app/bottom_right/"
import BottomLeft from "./react/components/app/bottom_left/"

FocusStyleManager.onlyShowFocusOnTabs();

class App extends Component {
	state = {
		introVisible: false,
		appVisible: false,
		instagramHovered: false,
		facebookHovered: false
	};

	// static loadData(store, match) {
	// 	return store.dispatch(loadAllDetails());
	// }

	componentDidMount() {

		this.props.fetchUserDetails()

		// this.props.fetchImageDetails()

		if(this.props.appVisible) {
			this.setState({
				appVisible: true
			})
		}

		this.props.imageUrls.map((image, i) => {
        this.props.fetchImageDetails(image.id, i)
    })
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
			let node = document.getElementById("body")
			if (node) { node.scrollTop = 0 }
		}
	}

	render() {
		return (
			<div className="app">

				<Grid/>

				<Intro />

				<div className="of-grid of-grid-app">

					<Logo isVisible={this.state.appVisible} />

					<TopLeft isVisible={this.state.appVisible}/>

					<TopRight isVisible={this.state.appVisible}/>

					<BottomRight isVisible={this.state.appVisible}/>

					<BottomLeft isVisible={this.state.appVisible}/>

					<div className="of-grid-navigation">
						<MainLinks isVisible={this.props.appVisible} />
					</div>

					<div className={classNames({"of-grid-content-visible": this.props.appVisible}, "of-grid-content")}>
						{renderRoutes(this.props.route.routes)}
					</div>

				</div>

			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		appVisible: state.app.appVisible,
		gridVisible: state.app.gridVisible,
		location: state.router.location,
		imageUrls: state.app.imageUrls
	};
}

export default {
	component: connect(mapStateToProps, { showApp, showGrid, hideGrid, fetchImageDetails, fetchUserDetails, loadAllDetails })(withRouter(App))
};
