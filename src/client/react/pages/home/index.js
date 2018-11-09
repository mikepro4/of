import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import posed, { PoseGroup } from 'react-pose';
import SplitText from 'react-pose-text';
import Images from "./Images"
import SectionHero from "./SectionHero"
import SectionAbout from "./SectionAbout"

class HomePage extends Component {
	state = {
    profileVisible: false,
		imagesVisible: false,
		heroVisible: false
	};

	componentDidMount() {
		let timeOut = this.props.appVisible ? 0 : (this.props.introLength + 0)

		setTimeout(() => {
			this.setState({
        profileVisible: true,
				heroVisible: true
			})
		}, timeOut)

		setTimeout(() => {
			this.setState({
				imagesVisible: true
			})
		}, (timeOut + 1000))
	}

	renderHead = () => (
		<Helmet>
			<title>OF – Home Page</title>
			<meta property="og:title" content="Homepage" />
		</Helmet>
	)

	render() {
		let imgStyle = {
			// transform: `translateY(${this.props.totalScrolledPixels /2}px)`
		}
		return (
      <div className="route-container route-home">

        <div className="of-grid-content-layer"  style={imgStyle}>
					<SectionHero isVisible={this.state.heroVisible} />
					<div className="screen"/>
					<SectionAbout/>
					<div className="screen"/>
        </div>

        <Images isVisible={this.state.imagesVisible}  />
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
