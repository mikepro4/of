import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import Release from './Release'

class HomePage extends Component {
	state = {
		showReleases: false,
		loaded: false,
		releases: [
			{
				name: "Dystopia",
				mixType: "Original Mix",
				imageUrl: "https://res.cloudinary.com/dcdnt/image/upload/v1549075236/album_art.png",
				soundUrl: "https://res.cloudinary.com/dcdnt/video/upload/v1547250881/que7hrtqlmiarao8lpvr.mp3",
				metadata: [
					{
						key: "Length",
						value: "6:03"
					},
					{
						key: "Genre",
						value: "Techno"
					},
					{
						key: "Key",
						value: "A# min"
					},
					{
						key: "Release date",
						value: "02/01/2019"
					},
					{
						key: "BPM",
						value: "126"
					},
					{
						key: "Produced in",
						value: "New York City, US"
					}
				],
				links: [
					{
						linkType: "beatport",
						linkUrl: "/some/url"
					},
					{
						linkType: "spotify",
						linkUrl: "/some/url"
					}
				],
				label: "Septima Records",
				new: true,
			},
			{
				name: "Dystopia",
				mixType: "Dawless Mix",
				imageUrl: "https://res.cloudinary.com/dcdnt/image/upload/v1549075236/album_art.png",
				soundUrl: "https://res.cloudinary.com/dcdnt/video/upload/v1547250881/que7hrtqlmiarao8lpvr.mp3",
				metadata: [
					{
						key: "Length",
						value: "6:03"
					},
					{
						key: "Key",
						value: "A# min"
					},
					{
						key: "Genre",
						value: "Techno"
					},
					{
						key: "Release date",
						value: "02/01/2019"
					},
					{
						key: "BPM",
						value: "126"
					},
					{
						key: "Produced in",
						value: "New York City, US"
					}
				],
				links: [
					{
						linkType: "beatport",
						linkUrl: "/some/url"
					},
					{
						linkType: "spotify",
						linkUrl: "/some/url"
					}
				],
				label: "Septima Records",
				new: true,
			},
			{
				name: "1:1",
				mixType: "Dawless Mix",
				imageUrl: "https://res.cloudinary.com/dcdnt/image/upload/v1549075236/album_art.png",
				soundUrl: "https://res.cloudinary.com/dcdnt/video/upload/v1547250881/que7hrtqlmiarao8lpvr.mp3",
				metadata: [
					{
						key: "Length",
						value: "6:03"
					},
					{
						key: "Key",
						value: "C#"
					},
					{
						key: "Genre",
						value: "Techno"
					},
					{
						key: "Length",
						value: "6:03"
					},
					{
						key: "Key",
						value: "C#"
					},
					{
						key: "Genre",
						value: "Techno"
					}
				],
				links: [
					{
						linkType: "beatport",
						linkUrl: "/some/url"
					},
					{
						linkType: "spotify",
						linkUrl: "/some/url"
					}
				],
				label: "Septima Records",
				new: true,
			}
		]
	};

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				showReleases: true,
				loaded: true
			})
		}, 1)
	}

	renderHead = () => (
		<Helmet>
			<title>DCDNT – Releases</title>
			<meta property="og:title" content="Releases" />
		</Helmet>
	)

	render() {
		return (
            <div className="route-container route-releases">

                <div className="of-grid-content-layer">
					<div className="releases-container">
						{this.state.releases.map((release, i) => {
							return <Release isVisible={this.state.showReleases} release={release} key={i} order={i}/>
						})}
					</div>
                </div>
            </div>
		);
	}
}

function mapStateToProps({ app }) {
	return {
		appVisible: app.appVisible,
		introLength: app.introLength,
    totalScrolledPixels: app.totalScrolledPixels
	};
}

export default {
	component: connect(mapStateToProps, {})(HomePage)
}
