import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import SplitText from 'react-pose-text';
import classNames from "classnames"
import { Link } from "react-router-dom";
import posed from 'react-pose';


const Parent = posed.div({
	enter: {staggerChildren: 350},
  exit: {},
	initialPose: 'closed'
});

const ButtonGroupContainer = posed.div({
	enter: {staggerChildren: 500},
  exit: {},
	initialPose: 'closed'
});


const Child = posed.div({
	exit: {
    translateY: 50,
    opacity: 0
  },
  enter: {
    translateY: 0,
    opacity: 1,
    transition: {
     duration: 600,
	 }
 	},
	initialPose: 'closed'
});

class SectionHero extends Component {
	state = {
    isVisible: false,
  };

  componentDidUpdate(prevprops) {
    if(this.props.isVisible == true && this.state.isVisible == false) {

      setTimeout(() => {
        this.setState({
          isVisible: true,
        })
      }, 500)

      setTimeout(() => {
        this.setState({
          isButtonGroupVisible: true,
        })
      }, 2500)
    }
  }

  componentDidMount() {
  }

	render() {
    console.log(this.refs)
		return (
      <div className="screen" ref="screen">

        <div className="section-container section-hero">
          <div className="of-grid-gutter-4 of-grid-13 hero-headline-container">

            <Parent
              initialPose="exit"
              pose={this.state.isVisible ? 'enter' : 'exit'}
              className="about-description"
            >
              <div className="about-description-line">
                <div className="of-container">
  								<Child>
  									My name is Olena Finch and I’m an actress, model and instagram influencer.
                    I like beauty products, art, fashion, music, design, photography, blockchain and technology,
                    and I help my friends on social media discover and experience the best products and services.
  								</Child>
  							</div>
              </div>

              <div className="about-description-line">
                <div className="of-container">
  								<Child>
  									My name is Olena Finch and I’m an actress, model and instagram influencer.
                    I like beauty products, art, fashion, music, design, photography, blockchain and technology,
                    and I help my friends on social media discover and experience the best products and services.
  								</Child>
  							</div>
              </div>
            </Parent>
          </div>
        </div>
      </div>
    )
	}
}

function mapStateToProps({app}) {
	return {
  };
}

export default connect(mapStateToProps, {})(SectionHero);
