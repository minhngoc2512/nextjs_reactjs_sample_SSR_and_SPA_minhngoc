import {REWRITE_LOADING, REWRITE_SUCCESS, REWRITE_FAILED} from '../actionTypes'
import {updateObject} from '../../lib/Utils/objeactFunctions'

const initialState = {
    data: [],
    loaded: false,
    error: true,
    loading: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        case REWRITE_LOADING:
            return rewritesLoading(state);
        case REWRITE_SUCCESS:
            return rewritesSuccess(state, action);
        case REWRITE_FAILED:
            return rewritesFailed(state);
        default:
            return state;
    }
}

const rewritesLoading = (state) => {
    const updatedState = {
        error: false,
        loading: true
    }
    return updateObject(state, updatedState)
}

const rewritesSuccess = (state, action) => {
    const updatedState = {
        data: action.data,
        error: false,
        loading: false,
        loaded: true
    }
    return updateObject(state, updatedState)
}

const rewritesFailed = (state) => {
    const updatedState = {
        error: true,
        loading: false
    }
    return updateObject(state, updatedState)
}
