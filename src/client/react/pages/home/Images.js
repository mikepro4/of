import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import SplitText from 'react-pose-text';
import classNames from "classnames"
import { Link } from "react-router-dom";
import posed from 'react-pose';

const ImagesContainer = posed.div({
  exit: {
    opacity: 0
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 600,
	 }
  }
});

class Images extends Component {
	state = {
    isVisible: false
  };

  componentDidUpdate(prevprops) {
    if(this.props.isVisible == true && this.state.isVisible == false) {
      setTimeout(() => {
        this.setState({
          isVisible: true
        })
      }, 1000)
    }
  }

	render() {
		return (
      <ImagesContainer
        initialPose="exit"
        pose={this.state.isVisible ? "enter" : "exit"}
        className="of-grid-images">

        <div className="of-grid-image image-1">
          {this.props.loadedImages.BnJRyQBFDLv && (
            <img src={this.props.loadedImages.BnJRyQBFDLv.imageDetails.display_url} />
          )}
        </div>

        <div className="of-grid-image image-2">
          {this.props.loadedImages.BpnjJjZlLrL && (
            <img src={this.props.loadedImages.BpnjJjZlLrL.imageDetails.display_url} />
          )}
        </div>

        <div className="of-grid-image image-3">
          {this.props.loadedImages.BoHCPBnFPzq && (
            <img src={this.props.loadedImages.BoHCPBnFPzq.imageDetails.display_url} />
          )}
        </div>

        <div className="of-grid-image image-4">
          {this.props.loadedImages.Bngu9tGFkkH && (
            <img src={this.props.loadedImages.Bngu9tGFkkH.imageDetails.display_url} />
          )}
        </div>

        <div className="of-grid-image image-5">
          {this.props.loadedImages.BnP71eRlU0F && (
            <img src={this.props.loadedImages.BnP71eRlU0F.imageDetails.display_url} />
          )}
        </div>
      </ImagesContainer>
    )
	}
}

function mapStateToProps({app}) {
	return {
    isVisible: app.appVisible,
    loadedImages: app.loadedImages
	};
}

export default connect(mapStateToProps, {})(Images);
