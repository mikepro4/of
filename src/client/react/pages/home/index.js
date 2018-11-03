import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

class HomePage extends Component {
	renderHead = () => (
		<Helmet>
			<title>OF – Home Page</title>
			<meta property="og:title" content="Homepage" />
		</Helmet>
	);
	render() {
		return (
				<div className="route-page-container">
          Home
			</div>
		);
	}
}

function mapStateToProps() {
	return {};
}

export default {
	component: connect(mapStateToProps, {})(HomePage)
}
