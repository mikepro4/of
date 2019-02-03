import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import classNames from "classnames"
import posed, { PoseGroup } from 'react-pose';
import { Icon } from "@blueprintjs/core";

import {
	trackLoad,
	trackPlay,
	trackPause,
	trackSeek,
	trackPlaying
} from '../../../redux/actions/playerActions'

class PlayButton extends Component {

	renderPlayButton = () => {
		return (
			<div className="play-button" onClick={() => {
				let delay = 0

				if(this.props.player.soundUrl !== this.props.release.soundUrl) {
					this.props.trackPlaying( 0 , this.props.release.soundUrl) 
					delay = 50
				}
				this.props.trackPause(this.props.release.soundUrl)
				this.props.trackLoad(this.props.release.soundUrl)
				
				setTimeout(() => {
					this.props.trackPlay(this.props.release.soundUrl)
				},delay)
			}}>
				<Icon icon="play" iconSize={20} />
			</div>
		) 
	}

	renderPlayPauseButton = () => {
		// if(this.props.player.soundUrl == this.props.release.soundUrl) {
		// 	return (
		// 		<div className="play-button" onClick={() => this.props.trackPause(this.props.release.soundUrl)}>
		// 			<Icon icon="pause" iconSize={20} />
		// 		</div>
		// 	)
		// } else {
		// 		return (
		// 		<div className="play-button" onClick={() => this.props.trackPlay(this.props.release.soundUrl)}>
		// 			<Icon icon="play" iconSize={20} />
		// 		</div>
		// 	)
		// }
		if(this.props.player.status == "pause" || this.props.player.status == "stop") {
			return this.renderPlayButton()
		} else if (this.props.player.status == "play") {
			if(this.props.player.soundUrl == this.props.release.soundUrl) {
				return (
					<div className="play-button pause" onClick={() => this.props.trackPause(this.props.release.soundUrl)}>
						<Icon icon="pause" iconSize={20} />
					</div>
				)
			} else {
				return this.renderPlayButton()
			}
		}
	}

	render() {

        return (
            <div className="jam-main-timeline-container">
                <div className="timeline-left">
                        {this.renderPlayPauseButton()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
	return {
		location: state.router.location,
		player: state.player
	};
}

export default connect(mapStateToProps, {
	trackPlay,
	trackPause,
	trackSeek,
	trackLoad,
	trackPlaying
})(withRouter(PlayButton));
