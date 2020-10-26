import { createStore, applyMiddleware } from 'redux';
import userSearchReducer from './Redux/userSearchReducer';
import thunk from 'redux-thunk';

export const store = createStore(userSearchReducer, applyMiddleware(thunk));