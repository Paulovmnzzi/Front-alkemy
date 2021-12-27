import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { categoryReducer } from './reducer/categoryReducer';
import { searchReducer } from './reducer/searchReducer';
import { superiorReducer } from './reducer/superiorReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    category: categoryReducer,
    search: searchReducer,
    superior: superiorReducer
})

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));