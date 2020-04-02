import React, { Component } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";


class HomePage extends Component {

	render() {

		return (
     		<div>
				  bla  the location’s pathname, search, and hash properties.
				  <Link to="/about">about </Link>
			</div>
		);
	}
}

function mapStateToProps({ app }) {
	return {
	};
}

export default {
	component: connect(mapStateToProps, {})(HomePage)
}
