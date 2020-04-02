import React, { Component } from "react";
import { connect } from "react-redux";


class HomePage extends Component {

	render() {

		return (
     		 <div>bla</div>
		);
	}
}

function mapStateToProps({ app }) {
	return {
		appVisible: app.appVisible,
		introLength: app.introLength,
    totalScrolledPixels: app.totalScrolledPixels
	};
}

export default {
	component: connect(mapStateToProps, {})(HomePage)
}
