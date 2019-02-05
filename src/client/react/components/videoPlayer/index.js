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
    }

    componentWillMount() {
		clearInterval(this.state.timeInterval);
	}

	componentWillUnmount() {
		clearInterval(this.state.timeInterval);
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
    }

    pause = () => {
        console.log("pause video");
        this.state.player.pauseVideo();
    }

    stop = () => {
        console.log("stop audvideoio")
        this.state.player.stopVideo();
    }

    playing = () => {
        this.props.videoPlaying(
			this.state.player.getCurrentTime(),
            this.state.player.getDuration(),
			this.props.videoDetails
        )
    }

    onEnd() {
		this.stopVideo();
    }
    
    onReady(event) {
		this.setState({
			player: event.target
		});
    }

    onPlay(event) {
		this.setState({ timeInterval: null });
		this.props.videoLoad(this.props.videoDetails, this.state.player.getDuration());
		this.startTimeInterval();
	}

	onPause(event) {
    }
    
    startTimeInterval() {
		const timeInterval = setInterval(() => {
           this.playing()
		}, 100);

		this.setState({ timeInterval });
    }
    
    playPauseSwitch() {
		// switch (this.props.currentVideo.playerAction) {
		// 	case "playing":
		// 		return this.pauseVideo();
		// 	case "paused":
		// 		return this.playVideo();
		// 	case "stopped":
		// 		return this.playVideo();
		// 	case undefined:
		// 		return this.playVideo();
		// 	default:
		// 		return this.playVideo();
		// }
	}


	render() {
		const videoPlayerOptions = {
			height: this.props.height ? this.props.height : "170",
			width: this.props.width ? this.props.width : "270",
			playerVars: {
				controls: 0,
				showinfo: 0,
				modestbranding: 1
			}
		};

		let videoClasses = classNames({
			"video-container": true,
			"video-loaded": this.props.videoId
		});

		return (
			<div className={videoClasses}>
				<div
					className="player-overlay"
					onClick={() => {
						this.playPauseSwitch();
					}}
				/>
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
        player: state.videoPlayer
	};
}

export default connect(mapStateToProps, {
	videoPlaying,
	videoLoad
})(Player);
