import { assign } from "lodash";

import {
	SHOW_APP,
} from "../actions/types";

export const initialState = {
	appVisible: false,
};

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_APP:
			return assign({}, state, {
				appVisible: true
			});
		default:
			return state;
	}
};
