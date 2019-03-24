import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import countReducer from './../Counter/Reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducers = combineReducers({
    counter: countReducer
});
const store = createStore(rootReducers, composeEnhancer(applyMiddleware(thunk)));
// store.subscribe(() => console.log(store.getState()));
export default store;