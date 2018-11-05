import React, { Component } from "react";
import { renderRoutes } from "react-router-config";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { FocusStyleManager } from "@blueprintjs/core";
import ReactDOM from "react-dom";
import posed, { PoseGroup } from 'react-pose';
import SplitText from 'react-pose-text';

import Grid from "./react/components/grid"

FocusStyleManager.onlyShowFocusOnTabs();

const Image = posed.img({
	exit: {opacity: 0, scale: 0.9},
	out: {
		scale: 1.1,
		opacity: 0,
		transition: {
			opacity: {
				duration: 1000,
			},
			scale: {
				duration: 1000
			},
		}
	},
	enter: {
		opacity: 1,
		scale: 1,
		transition: {
			opacity: {
				duration: 1500,
				delay: 1800
			},
			scale: {
				delay: 1800,
				duration: 7000
			},
		}
	}
})

const BottomLabelPoses = {
  exit: { translateY: 30, opacity: 0 },
  enter: {
    translateY: 0,
    opacity: 1,
    transition: {
     duration: 600,
	 },
	 delay: ({ wordIndex }) => wordIndex * 50
  }
};

const Line = posed.div({
  exit: { left: "-100%" },
	out: { left: "100%" },
  enter: {
    left: 0,
    transition: {
     duration: 600,
    }
  }
});


const Name = posed.div({
	exit: {opacity: 0, letterSpacing: 8},
	out: {
		opacity: 0,
		letterSpacing: 16,
		transition: {
			 opacity: {
				 duration: 1000,
			 },
			 letterSpacing: {
				 duration: 3000
			 }
		}
	},

	enter: {
		opacity: 1,
		letterSpacing: 14,
		transition: {
			opacity: {
				duration: 3000,
				delay: 500
			},
			letterSpacing: {
				duration: 7000,
				delay: 0
			}
		}
	}
})

const charPoses = {
  exit: { translateY: 30, opacity: 0 },
	out: {
		translateY: -30,
		opacity: 0,
		transition: {
		 duration: 500,
		},
		delay: ({ wordIndex }) => wordIndex * 200
	},
  enter: {
    translateY: 0,
    opacity: 1,
    transition: {
     duration: 600,
		 delay: 500
    },
    delay: ({ wordIndex }) => wordIndex * 250
  }
};

class App extends Component {
	state = {
		isVisible: false,

		introVisible: true,

		leftLabelVisible: false,
		rightLabelVisible: false,
		lineVisible: false,
		lineOut: false,

		imageVisible: true,
		imageOut: false,

		nameVisible: true,
		nameOut: false
	};

	componentDidMount() {
		// this.setState({ isVisible: !this.state.isVisible });

		setTimeout(()=> {
			this.setState({ leftLabelVisible: true });
		}, 2000)
	}

	componentDidUpdate(prevProps) {
		// Reset scrolling position on route change
		if(prevProps.location.pathname !== this.props.location.pathname) {
			let node = ReactDOM.findDOMNode(this.refs.app)
			if (node) { node.scrollTop = 0 }
		}
	}

	getLinePose() {
		if (this.state.lineOut) {
			return "out"
		}

		if (this.state.lineVisible) {
			return "enter"
		}

		if (!this.state.lineVisible) {
			return "exit"
		}
	}

	getImagePose() {
		if (this.state.imageOut) {
			return "out"
		}

		if (this.state.imageVisible) {
			return "enter"
		}

		if (!this.state.imageVisible) {
			return "exit"
		}
	}

	getNamePose() {
		if (this.state.nameOut) {
			return "out"
		}

		if (this.state.nameVisible) {
			return "enter"
		}

		if (!this.state.nameVisible) {
			return "exit"
		}
	}

	hideIntro() {
		setTimeout(() => {
			this.setState({
				nameOut: true,
			})
		}, 500)

		setTimeout(() => {
			this.setState({
				imageOut: true,
			})
		}, 800)

		setTimeout(() => {
			this.setState({
				leftLabelVisible: false,
			})
		}, 2000)

		setTimeout(() => {
			this.setState({
				lineVisible: false,
				lineOut: true
			})
		}, 2100)

		setTimeout(() => {
			this.setState({
				rightLabelVisible: false,
			})
		}, 2200)
	}

	render() {
		const { isVisible } = this.state;

		return (
			<div className="app">

				<div className="of-grid of-grid-app">

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

					<div className="of-grid-navigation">
						{isVisible && (<div>Navigation</div>)}
					</div>

					{renderRoutes(this.props.route.routes)}

				</div>

				<Grid/>

				{this.state.introVisible ? (

					<div className="app-intro">

						<div className="of-grid">

							<div className="of-grid-photo">
								<Image
									initialPose="exit"
									pose={this.getImagePose()}
									src="/photos/intro.png"
								/>
							</div>

							<div className="of-grid-name">
								<Name
									initialPose="exit"
									pose={this.getImagePose()}
									className="of-container"
								>
									<SplitText
										initialPose="exit"
										pose={this.getImagePose()}
										wordPoses={charPoses}
									>
										Olena Finch
									</SplitText>
								</Name>
							</div>

							<div className="of-grid-footer">
								<div className="of-container">
									<SplitText
										pose={this.state.leftLabelVisible ? "enter" : "exit"}
										className="of-grid-bottom-label-left"
										wordPoses={BottomLabelPoses}
										onPoseComplete={(pose)=> {
												if(pose == "enter") {
													this.setState({ lineVisible: true })
												}
											}
										}
									>
										Promotions & Modeling
									</SplitText>
								</div>

								<div className="of-grid-progress-bar-container">
									<Line
										pose={this.getLinePose()}
										className="of-grid-progress-bar"
										onPoseComplete={(pose)=> {
												if(pose == "enter") {
													this.setState({ rightLabelVisible: true })
												}
											}
										}
									/>
								</div>

								<div className="of-container">
									<SplitText
										pose={this.state.rightLabelVisible ? "enter" : "exit"}
										className="of-grid-bottom-label-right"
										wordPoses={BottomLabelPoses}
										onPoseComplete={(pose)=> {
											if(pose == "enter") {
												this.hideIntro()
											}

											if(pose == "exit") {
												this.setState({
													introVisible: false
												})
											}
										}}
									>
										NEW YORK CITY
									</SplitText>
								</div>
							</div>

						</div>

					</div>
				) : "" }


			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
	};
}

export default {
	component: connect(mapStateToProps, {})(withRouter(App))
};
