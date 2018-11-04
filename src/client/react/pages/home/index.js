import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import posed, { PoseGroup } from 'react-pose';
import SplitText from 'react-pose-text';

const charPoses = {
  exit: { translateY: 20, opacity: 0 },
  enter: {
    translateY: 0,
    opacity: 1,
    transition: {
     duration: 400,
    },
    delay: ({ wordIndex }) => wordIndex * 150
  }
};

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
              <div className="of-container">
                {isVisible && (
                  <SplitText
                    className="of-text"
                    initialPose="exit"
                    pose="enter"
                    wordPoses={charPoses}
                    onPoseComplete={()=> {console.log("complete")}}
                    onValueChange={{
                      translateY: v => {console.log("translateY: ", v)},
                      opacity: v => {console.log("opacity: ", v)}
                    }}
                  >
                    Olena Finch
                  </SplitText>
                )}
              </div>
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

              <div className="image-4">
                image
              </div>

              <div className="image-5">
                image
              </div>
            </div>

            <div className="of-grid-navigation">
              Navigation
            </div>

            <div className="of-grid-15 of-grid-gutter-4 of-grid-content">
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
