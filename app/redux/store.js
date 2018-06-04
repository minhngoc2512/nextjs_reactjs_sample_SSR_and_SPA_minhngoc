import { createStore } from 'redux';
import rootReducer from './reducers/index';

// initialState
const initialState = {}

// Create store
let store =null
if(typeof window !='undefined'){
     store = createStore(rootReducer, initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}else{
     store = createStore(rootReducer, initialState);
}


export default  store;