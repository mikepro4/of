import { assign } from "lodash";

import {
	SHOW_APP,
	SHOW_GRID,
	HIDE_GRID
} from "../actions/types";

export const initialState = {
	appVisible: true,
	gridVisible: false
};

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_APP:
			return assign({}, state, {
				appVisible: true
			});
		case SHOW_GRID:
			return assign({}, state, {
				gridVisible: true
			});
		case HIDE_GRID:
			return assign({}, state, {
				gridVisible: false
			});
		default:
			return state;
	}
};
