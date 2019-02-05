import { assign } from "lodash";

import {
	LOAD_VIDEO_SUCCESS,
} from "../actions/types";

export const initialState = {
    loadedVideos: {},
    youtubeVideos: [
        {
            videoId: "7rQPP7eudis"
        },
        {
            videoId: "cvEct9-FDQs"
        }
    ]
};

export const videosReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_VIDEO_SUCCESS:
			const newLoadedVideos = assign({}, state.loadedVideos, {
				[action.videoId]: {
					i: action.i,
					videoDetails: action.payload
				}
			});
			return assign({}, state, {
				loadedVideos: newLoadedVideos
			});
		default:
			return state;
	}
};
