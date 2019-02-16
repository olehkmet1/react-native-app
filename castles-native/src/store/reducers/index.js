import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import auth from './auth'

const rootReducer = combineReducers({
    auth
});

const configureStore = () => {
    if(__DEV__){

        const middleware = [thunk];

        // eslint-disable-next-line no-underscore-dangle
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        return createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
    }

    return createStore(rootReducer, {}, applyMiddleware(thunk));
}

export default configureStore;
