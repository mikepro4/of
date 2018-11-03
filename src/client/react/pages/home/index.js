import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import posed, { PoseGroup } from 'react-pose';

const Of = posed.div({
  exit: { opacity: 0 },
  enter: { opacity: 1 }
});

const OfText = posed.div({
  exit: { opacity: 0 },
  enter: {
		opacity: 1 ,
		transition: { duration: 1050 }
	}
});


class HomePage extends Component {
	state = { isVisible: false };

	componentDidMount() {
    this.setState({ isVisible: !this.state.isVisible });
  }

	renderHead = () => (
		<Helmet>
			<title>OF – Home Page</title>
			<meta property="og:title" content="Homepage" />
		</Helmet>
	);
	render() {
		const { isVisible } = this.state;

		return (
				<div className="route-page-container">
          <div className="of-grid">

            <div className="of-grid-logo">
              Logo
            </div>

            <div className="of-grid-images">
              <div className="image-1">
                image
              </div>

              <div className="image-2">
                image
              </div>

              <div className="image-3">
                image
              </div>
            </div>

            <div className="of-grid-navigation">
              Navigation
            </div>

            <div className="of-grid-13 of-grid-gutter-4 of-grid-content">
              content
            </div>
          </div>

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
