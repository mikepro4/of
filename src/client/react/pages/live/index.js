import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import * as _ from "lodash";
import { Link } from "react-router-dom";
import posed, { PoseGroup } from 'react-pose';
import SplitText from 'react-pose-text';

import Video from './Video'
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

	render() {
		return (
            <div className="route-container route-live">

                <div className="of-grid-content-layer">
                    {
                        _.map(this.props.videos, (video) => {
                            return <Video isVisible={this.state.isVisible} video={video} key={video.videoId} />
                        })
                    }
                </div>
                
            </div>
		);
	}
}

function mapStateToProps(state) {
	return {
        appVisible: state.app.appVisible,
        videos: state.videos.youtubeVideos
    };
}

export default {
	component: connect(mapStateToProps, {})(Live)
}
