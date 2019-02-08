import React, { Component } from "react";
import { connect } from "react-redux";
import YouTube from "react-youtube";
import classNames from "classnames"

import {
	videoLoad,
	videoPlaying
} from '../../../redux/actions/playerActions'

class Player extends Component {
    state = {
        status: null,
        player: null,
        timeInterval: null
    }

    componentDidUpdate = (prevprops) => {

		if(this.props.player.videoDetails.videoId && this.props.player.videoDetails.videoId !== this.props.videoId ) {
			if (this.state.status == "play"){this.pause()}
			// this.pause()
		}

		// externally seek
        if(
        prevprops.player.seekToSeconds !== this.props.player.seekToSeconds
        && this.props.player.seekToSeconds > 0
        ) {
            this.seek()
        }

		// externally play pause stop
        if(prevprops.player.status !== this.props.player.status) {
            this.changeStatus(this.props.player.status)
		}
		
		if(this.props.app.clientWidth !== prevprops.app.clientWidth) {
			this.forceUpdate();
		}
    }

    componentWillMount() {
		clearInterval(this.state.timeInterval);
	}

	componentWillUnmount() {
		clearInterval(this.state.timeInterval);
		this.props.videoLoad({}, 0);
    }
    
    onStateChange(event) {
    }

	onStop() {
		this.props.updateTime(this.state.player.getDuration(), 0);
	}


    changeStatus = (status) => {
        switch (status) {
        case "play":
            return this.play()
        case "pause":
            return this.pause()
        case "stop":
            return this.stop()
        default:
            return
        }
    }

    seek = () => {
        this.state.player.seekTo(this.props.player.seekToSeconds);
    }

    play = () => {
        console.log("play video")
		this.state.player.playVideo();
		this.setState({
			status: "play"
		})
    }

    pause = () => {
        console.log("pause video");
		this.state.player.pauseVideo();
		this.setState({
			status: "pause"
		})
    }

    stop = () => {
        console.log("stop audvideoio")
		this.state.player.stopVideo();
		this.setState({
			status: "stop"
		})
	}
	
    onEnd() {
		this.stopVideo();
		this.setState({ 
			status: "end"
		});
    }
    
    onReady(event) {
		this.setState({
			player: event.target
		});
    }

    onPlay(event) {
		this.props.videoLoad(this.props.videoDetails, this.state.player.getDuration());
		this.setState({ 
			status: "play"
		});
	}

	onPause(event) {
		this.setState({ 
			status: "pause"
		});
    }
	
	getWidth = () => {
        if(this.refs.videoContainer) {
            return this.refs.videoContainer.clientWidth
        }
	}
	
	getHeight = () => {
        if(this.refs.videoContainer) {
            return this.refs.videoContainer.clientWidth / 1.77777
        }
    }


	render() {
		const videoPlayerOptions = {
			width: this.getWidth() + "px",
			height: this.getHeight() + "px"
		};

		let videoClasses = classNames({
			"video-container": true,
			"video-loaded": this.props.videoId
		});

		return (
			<div className={videoClasses} ref="videoContainer">
				<YouTube
					videoId={this.props.videoId}
					opts={videoPlayerOptions}
					onReady={this.onReady.bind(this)}
					onPlay={this.onPlay.bind(this)}
					onStop={this.onStop.bind(this)}
					onPause={this.onPause.bind(this)}
					onEnd={this.onEnd.bind(this)}
					className="player-video"
					onStateChange={this.onStateChange.bind(this)}
				/>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		location: state.router.location,
		player: state.videoPlayer,
		app: state.app
	};
}

export default connect(mapStateToProps, {
	videoPlaying,
	videoLoad
})(Player);
