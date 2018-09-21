import{CATEGORIES_LOADING,CATEGORIES_SUCCESS,CATEGORIES_FAILED} from '../actionTypes'
import {updateObject} from "../../lib/Utils/objeactFunctions";
const initialState = {
    list: [],
    loaded: false,
    error: true,
    loading: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CATEGORIES_LOADING:
            return categoriesLoading(state);
        case CATEGORIES_SUCCESS:
            return categoriesSuccess(state, action);
        case CATEGORIES_FAILED:
            return categoriesFailed(state);
        default:
            return state;
    }
}

const categoriesLoading = (state) =>{
    const updatedState = {
        error: false,
        loading: true
    }
    return updateObject(state, updatedState)
}

const categoriesSuccess = (state,action) =>{
    const updatedState = {
        list: action.data,
        error: false,
        loading: false,
        loaded: true
    }
    return updateObject(state, updatedState)
}

const categoriesFailed = (state) =>{
    const updatedState = {
        error: true,
        loading: false
    }
    return updateObject(state, updatedState)
}