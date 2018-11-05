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
    // this.setState({ isVisible: !this.state.isVisible });
  }

	renderHead = () => (
		<Helmet>
			<title>OF – Home Page</title>
			<meta property="og:title" content="Homepage" />
		</Helmet>
	);
	render() {
		return (
      <div className="of-grid-content">

      {this.props.appVisible && (
        <div>

          <div className="of-grid-content-layer">
            <div className="of-grid-row">
              <div className="of-grid-gutter-4 of-grid-5">
                  @yeah_lenka
              </div>
              <div className="of-grid-gutter-2 of-grid-3">
                  @yeah_lenka
              </div>
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
        </div>
      )}
			</div>


		);
	}
}

function mapStateToProps({ app }) {
	return {
    appVisible: app.appVisible
  };
}

export default {
	component: connect(mapStateToProps, {})(HomePage)
}
