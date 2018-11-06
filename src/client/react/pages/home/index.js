import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import posed, { PoseGroup } from 'react-pose';
import SplitText from 'react-pose-text';

const Images = posed.div({
  exit: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
     duration: 600,
	 }
  }
})

class HomePage extends Component {
	state = {
		imagesVisible: false
	};

	componentDidMount() {
		let timeOut = this.props.appVisible ? 0 : this.props.introLength

		setTimeout(() => {
			this.setState({
				imagesVisible: true
			})
		}, timeOut)
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
          <div className="of-grid-row">
            <div className="of-grid-gutter-4 of-grid-5">
							<h1>Home</h1>
            </div>
          </div>
        </div>

        <Images
					initialPose="exit"
					pose={this.state.imagesVisible ? "enter" : "exit"}
					className="of-grid-images">
          <div className="image-1">
            image
          </div>

          <div className="image-2">
            image
          </div>

          <div className="image-3">
            image
          </div>

          <div className="image-4">
            image
          </div>

          <div className="image-5">
            image
          </div>
        </Images>
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
