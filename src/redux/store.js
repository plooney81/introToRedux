import {createStore} from 'redux';
import {accountReducer} from './reducers';
//! Create the store
export const store = createStore(accountReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());