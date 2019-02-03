import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import SplitText from 'react-pose-text';
import classNames from "classnames"
import { Link } from "react-router-dom";

import MainLinks from '../../navigation/main_links/'

const wordPoses = {
  closed: { translateY: 30, opacity: 0 },
  open: {
    translateY: 0,
    opacity: 1,
    transition: {
     duration: 500,
    },
    delay: ({ wordIndex }) => wordIndex * 150
  }
};

class MobileHeader extends Component {
	state = {};

	render() {
		return (
            <div className="mobile-header-container">
                <div className="mobile-logo">
                    DCDNT
                </div>
                <div className="mobile-description">
                    TECHNO PRODUCTION AND LIVE PERFORMANCE
                </div>

                <div className="mobile-navigation">
                    <MainLinks isVisible={true} />
                </div>
            </div>
		)
	}
}

function mapStateToProps({app}) {
	return {
    isVisible: app.appVisible,
	};
}

export default connect(mapStateToProps, {})(MobileHeader);
