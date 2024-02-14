import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { thunk } from 'redux-thunk';
import { authReducer } from './authReducer/reducer'
import { productReducer } from './productReducer/reducer'


let middleware = [thunk]

const rootReducer = combineReducers({ authReducer, productReducer });
export const store = legacy_createStore(rootReducer, applyMiddleware(...middleware))
