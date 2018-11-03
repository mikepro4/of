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
						<div className="of-grid-row">
							<div className="of-grid-20">
								<PoseGroup>
									{isVisible && [
					          <Of key="Of" className="of-container" >
											<OfText key="OfText" className="of-text">New York</OfText>
										</Of>,
					        ]}
								</PoseGroup>
							</div>
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
