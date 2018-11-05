import * as _ from "lodash";

import {
	SHOW_APP,
} from "./types";

/////////////////////////////////////////////////

export const showApp = () => dispatch => {
	dispatch({
		type: SHOW_APP,
	});
};

/////////////////////////////////////////////////
