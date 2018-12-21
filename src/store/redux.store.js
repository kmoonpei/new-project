// import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createReactNavigationReduxMiddleware, createNavigationReducer } from 'react-navigation-redux-helpers';
import TabNavigator from '../app/app.router';

const navReducer = createNavigationReducer(TabNavigator);

const middleware = createReactNavigationReduxMiddleware('root', state => state.nav);
// const middleware = [thunkMiddleware];
const appReducer = combineReducers({
    nav: navReducer,

});
export const store = createStore(
    appReducer,
    applyMiddleware(...middleware)
);