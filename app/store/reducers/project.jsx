import {PROJECT_LOADING, PROJECT_SUCCESS, PROJECT_FAILED} from '../actionTypes'
import {updateObject} from '../../lib/Utils/objeactFunctions'

const initialState = {
    loaded: false,
    error: true,
    loading: true,
    detail: {}


};

export default (state = initialState, action) => {
    switch (action.type) {
        case PROJECT_LOADING:
            return projectLoading(state);
        case PROJECT_SUCCESS:
            return projectSuccess(state, action);
        case PROJECT_FAILED:
            return projectFailed(state);
        default:
            return state;
    }
}

const projectLoading = (state) => {
    const updatedState = {
        error: false,
        loading: true
    }
    return updateObject(state, updatedState)
}

const projectSuccess = (state, action) => {
    console.log(action)
    const updatedState = {
        error: false,
        loading: false,
        loaded: true,
        detail: action.detail
    }
    return updateObject(state, updatedState)
}

const projectFailed = (state) => {
    const updatedState = {
        error: true,
        loading: false
    }
    return updateObject(state, updatedState)
}