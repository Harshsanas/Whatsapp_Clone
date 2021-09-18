import { applyMiddleware, combineReducers, createStore, compose } from "redux";

import thunk from "redux-thunk";
import { authReducer } from "./reducer";

//rootReducer combines the multiple reducers
const rootReducer = combineReducers({
	auth: authReducer,
});

/**
 *
 * @param {redux state} state
 */


const customMiddleware = (store) => (next) => (action) => {
	return typeof action === "function"
		? action(store.dispatch, store.getState)
		: next(action);
};

const composeEnhancers =
	(typeof window !== "undefined" &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;
const enhancer = composeEnhancers(
	applyMiddleware(thunk)
	
);
export const store = createStore(
	rootReducer,
	enhancer
	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

