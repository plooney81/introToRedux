import {createStore} from 'redux';
import {accountReducer} from './reducers';
//! Create the store
export const store = createStore(accountReducer);