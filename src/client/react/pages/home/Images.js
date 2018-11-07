import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import SplitText from 'react-pose-text';
import classNames from "classnames"
import { Link } from "react-router-dom";
import posed from 'react-pose';

import Image from "./Image"

class Images extends Component {
	state = {
    isVisible: false
  };

  componentDidUpdate(prevprops) {
    if(this.props.isVisible == true && this.state.isVisible == false) {
      this.setState({
        isVisible: true
      })
    }
  }

	render() {
		return (
      <div className="of-grid-images">
        <Image isVisible={this.state.isVisible} className="image-1" imageId="BnJRyQBFDLv" order={1} />
        <Image isVisible={this.state.isVisible} className="image-2" imageId="BpnjJjZlLrL" order={2}/>
        <Image isVisible={this.state.isVisible} className="image-3" imageId="BoHCPBnFPzq" order={3}/>
        <Image isVisible={this.state.isVisible} className="image-4" imageId="Bngu9tGFkkH" order={4}/>
        <Image isVisible={this.state.isVisible} className="image-5" imageId="BnP71eRlU0F" order={5}/>
        <Image isVisible={this.state.isVisible} className="image-6" imageId="BllohYGFEpN" order={5}/>
      </div>
    )
	}
}

function mapStateToProps({app}) {
	return {
	};
}

export default connect(mapStateToProps, {})(Images);
