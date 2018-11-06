import * as _ from "lodash";
import axios from "axios";

import {
	SHOW_APP,
	SHOW_GRID,
	HIDE_GRID
} from "./types";

/////////////////////////////////////////////////

export const showApp = () => dispatch => {
	dispatch({
		type: SHOW_APP,
	});
};

export const showGrid = () => dispatch => {
	dispatch({
		type: SHOW_GRID,
	});
};

export const hideGrid = () => dispatch => {
	dispatch({
		type: HIDE_GRID,
	});
};

/////////////////////////////////////////////////

export const fetchImageDetails = (url) => async dispatch => {
	const response = await axios.get("https://www.instagram.com/p/BpZvZeWhSei/?__a=1");
	console.log(response.data.graphql.shortcode_media.edge_media_preview_like.count)
	// axios.post("/api/send_email")
}

/////////////////////////////////////////////////
