import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { routerReducer } from "react-router-redux";

const REDUCERS_OBJECT = {
	form: formReducer,
	router: routerReducer
};

export default combineReducers(REDUCERS_OBJECT);
