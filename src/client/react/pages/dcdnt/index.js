import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

class HomePage extends Component {
	state = {
	};

	componentDidMount() {
	}

	renderHead = () => (
		<Helmet>
			<title>DCDNT – Releases</title>
			<meta property="og:title" content="Releases" />
		</Helmet>
	)

	render() {
		return (
            <div className="route-container route-releases">

                <div className="of-grid-content-layer">

                </div>
            </div>
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
