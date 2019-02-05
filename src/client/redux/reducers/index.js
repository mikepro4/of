import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { routerReducer } from "react-router-redux";
import { appReducer } from "./appReducer";
import { playerReducer } from "./playerReducer";
import { videoPlayerReducer } from "./videoPlayerReducer";
import { videosReducer } from "./videosReducer";

const REDUCERS_OBJECT = {
	app: appReducer,
	player: playerReducer,
	videoPlayer: videoPlayerReducer,
	videos: videosReducer,
	form: formReducer,
	router: routerReducer
};

export default combineReducers(REDUCERS_OBJECT);
