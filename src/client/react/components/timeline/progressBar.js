import React, { PropTypes } from "react";
import { connect } from "react-redux";
import classNames from "classnames"
import { formatTime } from '../../../../client/utils/formatTime'
import { updateHoverTime } from "../../../../client/redux/actions/playerActions";

import {
	trackSeek,
} from '../../../redux/actions/playerActions'

class ProgressBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			hoverWidth: 0
		};
	}

	handlePorgressBarClick(event) {
		let box = document.getElementById("progressBar").getBoundingClientRect();
		const relX =
			event.pageX - box.left;
		const progressBarPercent =
			relX *
			100 /
			box.width;
		const seekSeconds = progressBarPercent * this.props.release.previewDuration / 100;
            
		this.props.trackSeek(
			seekSeconds,
			this.props.release.soundUrl
		);
	}

	calculateWidth(event) {
        // console.log(this.refs.progress_bar_container.offsetLeft)
        let box = document.getElementById("progressBar").getBoundingClientRect();
		const relX =
			event.pageX - box.left;
		const progressBarPercent =
			relX *
			100 /
			box.width;
		const seekSeconds = progressBarPercent * this.props.release.previewDuration / 100;
		return seekSeconds;
	}

	onMouseMove(event) {
		this.props.updateHoverTime(this.calculateWidth(event));
		this.setState({
            hoverSeconds: this.calculateWidth(event),
			hoverWidth: this.calculateWidth(event) * 100 / this.props.release.previewDuration + "%"
		});

		// Update hover time in analysis reducer
		// this.props.updateHoverTime(this.calculateWidth(event))
	}

	onMouseLeave(event) {
		this.props.updateHoverTime(null);
		this.setState({
            hoverSeconds: 0,
			hoverWidth: 0
		});
		// Update hover time in analysis reducer
		// this.props.dispatch(updateHoverTime(null))
	}

	render() {
		const total = formatTime(this.props.release.previewDuration);
		let current = formatTime(this.props.player.currentTime);
		let progressBarWidth = {
			width: this.props.player.currentTime * 100 / this.props.release.previewDuration+ "%"
		};

		const cursor = {
			left: this.props.player.currentTime * 100 / this.props.release.previewDuration + "%"
		};

		const cursorHover = {
			left: this.props.player.hoverTime * 100 / this.props.release.previewDuration + "%"
		};

		let progressBarHoverWidth = {
			width: this.state.hoverWidth
		};

		// const rangeHighlightStyles = {
		// 	left: this.props.analysis.rangeStart * 100 / this.props.duration + "%",
		// 	width: this.props.analysis.rangeLength * 100 / this.props.duration + "%"
        // };
        
        if(this.props.release.soundUrl !== this.props.player.soundUrl) {
            progressBarWidth = { width: 0}
        }
		return (
            <div 
                className={classNames({
                        "active-player": this.props.release.soundUrl == this.props.player.soundUrl
                    }, "progress-bar-player-container")}
                >
				<div
					className="player-time-wrapper"
					onClick={this.handlePorgressBarClick.bind(this)}
					onMouseMove={this.onMouseMove.bind(this)}
					onMouseLeave={this.onMouseLeave.bind(this)}
                    ref="progress_bar_container"
                    id="progressBar"
				>
					<div className="progress-bar-wrapper">
						<div className="progress-bar" style={progressBarWidth} />
						<div className="progress-bar-hover" style={progressBarHoverWidth} />
					</div>
					{this.props.hoverTime * 100 / this.props.duration > 0 ? (
						<div className="cursor hover" style={cursorHover}>
							<div className="cursor-time">
								<span>{formatTime(this.props.hoverTime)}</span>
							</div>
						</div>
					) : (
						""
                    )}
				</div>

                <div 
                    className={classNames({
                        "active": this.state.hoverSeconds > 0
                    }, "seek-label")}
                >
                    Start playing at <span className="time">{formatTime(this.state.hoverSeconds)}</span>
                </div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		player: state.player
	};
}

export default connect(mapStateToProps, {
    updateHoverTime,
    trackSeek
})(ProgressBar);
