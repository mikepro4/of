import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames"
import posed, { PoseGroup } from 'react-pose';

import {
	trackPlaying,
	setAnalyser
} from '../../../redux/actions/playerActions'

class Player extends Component {
    state = {
        status: null
    }

    componentDidUpdate = (prevprops) => {
        if(prevprops.player.jamId !== this.props.player.jamId) {
                this.refs.audio.currentTime = 0

            if(!this.props.player.analyser) {
                var AudioContext = window.AudioContext
                || window.webkitAudioContext
                || false;
                let context = new AudioContext();
                let analyser = context.createAnalyser();
                let audio = this.refs.audio
                audio.crossOrigin = "anonymous";
                let audioSrc = context.createMediaElementSource(audio);
                audioSrc.connect(analyser);
                audioSrc.connect(context.destination);
                this.props.setAnalyser(analyser)
            }
        }

        if(
        prevprops.player.seekToSeconds !== this.props.player.seekToSeconds
        && this.props.player.seekToSeconds > 0
        ) {
            this.refs.audio.currentTime = this.props.player.seekToSeconds
            this.play()
        }

        if(prevprops.player.status !== this.props.player.status) {
            this.changeStatus(this.props.player.status)
        }
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
        this.refs.audio.currentTime = this.props.player.seekToSeconds
    }

    play = () => {
        console.log("play audio")

        this.refs.audio.play()
    }

    pause = () => {
        console.log("pause audio");
        this.refs.audio.pause()
    }

    stop = () => {
        console.log("stop audio")
        this.refs.audio.pause()
        this.refs.audio.currentTime = 0
    }

    playing = () => {
        this.props.trackPlaying(
            this.refs.audio.currentTime,
            this.props.player.soundUrl
        )
    }

	render() {
		return (
            <div style={{display: "none"}}>
                {this.props.player.soundUrl ? (
                    <audio
                        id="audio"
                        ref="audio"
                        controls={true}
                        src={this.props.player.soundUrl ? this.props.player.soundUrl : ""}
                        onTimeUpdate={() => {
                            this.playing()
                        }}
                        onLoadedData={() => {
                        }}
                    >
                </audio>
                    ) : ""}
            </div>
		);
	}
}

function mapStateToProps(state) {
	return {
		auth: state.app.user,
		location: state.router.location,
        player: state.player
	};
}

export default connect(mapStateToProps, {
	trackPlaying,
	setAnalyser
})(Player);
