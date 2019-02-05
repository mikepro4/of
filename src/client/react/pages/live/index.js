import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import * as _ from "lodash";
import { Link } from "react-router-dom";
import posed, { PoseGroup } from 'react-pose';
import SplitText from 'react-pose-text';

import YoutubePlayer from '../../components/videoPlayer'

class Live extends Component {
	state = {
        isVisible: false
    };

	componentDidMount() {
        setTimeout(() => {
            this.setState({
                isVisible: true
            })
        }, 700)
    }

	renderHead = () => (
		<Helmet>
			<title>OF – Home Page</title>
			<meta property="og:title" content="Homepage" />
		</Helmet>
    )
    
    getHeight = () => {
        if(this.refs.video_container) {
            return (`${this.refs.video_container.clientWidth / 1.7}px`)
        }
    }

    renderVideo = (video) => {
        const videoId = video.videoDetails.videoId
        return (
            <div className="of-grid-content-layer" key={videoId}>
                <div className="of-grid-row video-row">
                    <div className="of-grid-gutter-4 of-grid-9" ref="video_container">
                        <YoutubePlayer 
                            videoId={videoId}
                            videoDetails={video.videoDetails}
                        />
                    </div>
                </div>
            </div>
        )
    }

    renderVideos = () => {
        setTimeout(() => {
            let videos = []
            _.map(this.props.videos, (video) => {
                videos.push(this.renderVideo(video))
            })
            console.log(videos)
            return (<div>test</div>)
        }, 1000)
    }
 
    

	render() {
		return (
            <div className="route-container route-live">

                {
                    this.state.isVisible ? _.map(this.props.videos, (video) => {
                        return this.renderVideo(video)
                    }) : ""
                }

                {/* {_.map(this.props.videos, (video) => {
                    return this.renderVideo(video)
                })} */}
                
            </div>
		);
	}
}

function mapStateToProps(state) {
	return {
        appVisible: state.app.appVisible,
        videos: state.videos.loadedVideos
    };
}

export default {
	component: connect(mapStateToProps, {})(Live)
}
