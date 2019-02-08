import React, { Component } from "react";
import { connect } from "react-redux";
import posed from 'react-pose';
import { Icon, Button } from "@blueprintjs/core";
import { formatTime } from '../../../../client/utils/formatTime'
import classNames from "classnames"
import * as _ from "lodash";

import YoutubePlayer from '../../components/videoPlayer'

const Parent = posed.div({
	enter: {staggerChildren: 70},
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
            duration: 350,
        }
 	},
	initialPose: 'closed'
});

class Video extends Component {

    state = {
        isVisible: false,
        videoDetails: null
    };

    componentDidMount = () => {
        if(this.props.videos[this.props.video.videoId]) {
            this.setState({
                videoDetails: this.props.videos[this.props.video.videoId]
            })
        }
    }
    componentDidUpdate(prevprops) {
        if(this.props.isVisible == true && this.state.isVisible == false) {
          this.setState({
            isVisible: true
          })
        }

        if(!_.isEqual(this.props.videos, prevprops.videos)) {
            if(this.props.videos[this.props.video.videoId]) {
                this.setState({
                    videoDetails: this.props.videos[this.props.video.videoId]
                })
            }
        }
    }

    getPose() {
        if(this.refs.videoContainer) {
            let bodyHeight = document.getElementById("body").clientHeight
            if( this.state.isVisible && (this.refs.videoContainer.offsetTop <= ( this.props.totalScrolledPixels + (bodyHeight/1.7)))) {
                return "enter"
            } else {
                return "exit"
            }
        } else {
            return "exit"
        }
    }

	render() {
		return (

            <div className="video-post" ref="videoContainer">

                <Parent
                    initialPose="exit"
                    pose={this.getPose()}
                    className="hero-headline"
                >

                    <div className="of-grid-row video-row">
                        <div className="of-grid-gutter-4 of-grid-14">
                            <Child>
                                <YoutubePlayer 
                                    videoId={this.props.video.videoId}
                                    videoDetails={this.state.videoDetails}
                                />
                            </Child>
                        </div>
                    </div>

                </Parent>

            </div>
        )
	}
}

function mapStateToProps(state) {
	return {
		totalScrolledPixels: state.app.totalScrolledPixels,
        clientHeight: state.app.clientHeight,
        videoPlayer: state.videoPlayer,
        videos: state.videos.loadedVideos
  };
}

export default connect(mapStateToProps, {})(Video);
