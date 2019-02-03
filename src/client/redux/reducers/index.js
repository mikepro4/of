import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { routerReducer } from "react-router-redux";
import { appReducer } from "./appReducer";
import { playerReducer } from "./playerReducer";

const REDUCERS_OBJECT = {
	app: appReducer,
	player: playerReducer,
	form: formReducer,
	router: routerReducer
};

export default combineReducers(REDUCERS_OBJECT);
