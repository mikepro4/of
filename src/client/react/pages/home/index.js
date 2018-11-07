import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import posed, { PoseGroup } from 'react-pose';
import SplitText from 'react-pose-text';
import Profile from "./Profile"
import Images from "./Images"

class HomePage extends Component {
	state = {
    profileVisible: false,
		imagesVisible: false
	};

	componentDidMount() {
		let timeOut = this.props.appVisible ? 0 : (this.props.introLength + 0)

		setTimeout(() => {
			this.setState({
        profileVisible: true,
				imagesVisible: true
			})
		}, timeOut)

		// setTimeout(() => {
		// 	this.setState({
		//
		// 	})
		// }, timeOut)
	}

	renderHead = () => (
		<Helmet>
			<title>OF – Home Page</title>
			<meta property="og:title" content="Homepage" />
		</Helmet>
	)

	render() {
		return (
      <div className="route-container route-home">

        <div className="of-grid-content-layer">
          <Profile isVisible={this.state.profileVisible} />
        </div>

        <Images isVisible={this.state.imagesVisible}  />
      </div>
		);
	}
}

function mapStateToProps({ app }) {
	return {
		appVisible: app.appVisible,
		introLength: app.introLength
	};
}

export default {
	component: connect(mapStateToProps, {})(HomePage)
}
