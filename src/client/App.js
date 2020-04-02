import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {


	render() {
		return (
			<div className="app" onClick={() => alert("lol")}>
				test
			</div>
		)
	}
}
function mapStateToProps(state) {
	return {
		appReducer: state.appReducer
	};
}

export default {
	component: connect(mapStateToProps, {})(App)
};
