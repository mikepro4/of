import { assign } from "lodash";

import {
	LOAD_VIDEO_SUCCESS,
} from "../actions/types";

export const initialState = {
	loadedVideos: {},
    youtubeVideos: [
		{
			title: "Hypnotic",
			videoId: "7rQPP7eudis",
			equipment: [
				'Elektron Digitakt',
				'Elektron Octatrack',
				'Moog Mother-32',
				'Scarlett Focusrite 18in'
			],
			audioRouting: [
				'Digitakt to Digitone',
				'Digitakt to Octatrack as AB input',
				'Octatrack to Focusrite'
			],
			midiRouting: [
				'All devices are running internal sequencer',
				'Digitakt is Master clock that sends transport controls to all gear'
			],
			description: "Some description here"
		},
		{
			title: "Dystopia",
			videoId: "cvEct9-FDQs",
			equipment: [
				'Elektron Digitakt',
				'Elektron Octatrack',
				'Moog Mother-32',
				'Scarlett Focusrite 18in'
			],
			audioRouting: [
				'Digitakt to Digitone',
				'Digitakt to Octatrack as AB input',
				'Octatrack to Focusrite'
			],
			midiRouting: [
				'All devices are running internal sequencer',
				'Digitakt is Master clock that sends transport controls to all gear'
			],
			description: "Some description here"
		}
    ]
};

export const videosReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_VIDEO_SUCCESS:
			const newLoadedVideos = assign({}, state.loadedVideos, {
				[action.videoId]: action.payload
			});
			return assign({}, state, {
				loadedVideos: newLoadedVideos
			});
		default:
			return state;
	}
};
