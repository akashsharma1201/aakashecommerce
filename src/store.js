import { createStore, applyMiddleware, compose } from "redux";
import {rootReducer} from "./redux/reducers/rootReducer"
import thunk  from "redux-thunk";

// let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose

// export let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export let store = createStore(rootReducer, compose(applyMiddleware(thunk) , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))