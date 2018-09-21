import { createStore } from 'redux'
// import thunk from 'redux-thunk'

import combineReducers from './reducers'
// import rootReducer from "../redux/reducers";

// export default () => createStore(
//     combineReducers,
//     composeEnhancers(applyMiddleware(thunk))
// )

export  default ()=>{
    if (typeof window != 'undefined') {
        return createStore(
            combineReducers,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );
    } else {
        return createStore(
            combineReducers
        );
    }
}