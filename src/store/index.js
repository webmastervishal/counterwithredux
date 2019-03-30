import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import countReducer from './../Counter/Reducer';
import rootSaga from './Sagas';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducers = combineReducers({
    counter: countReducer
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducers, composeEnhancer(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);
// store.subscribe(() => console.log(store.getState()));
export default store;