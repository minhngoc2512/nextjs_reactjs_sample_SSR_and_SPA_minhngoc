import {PROJECTS_LOADING, PROJECTS_SUCCESS, PROJECTS_FAILED} from '../actionTypes'
import {updateObject} from '../../lib/Utils/objeactFunctions'

const initialState = {
    list: [],
    loaded: false,
    error: true,
    loading: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        case PROJECTS_LOADING:
            return projectsLoading(state);
        case PROJECTS_SUCCESS:
            return projectsSuccess(state, action);
        case PROJECTS_FAILED:
            return projectsFailed(state);
        default:
            return state;
    }
}

const projectsLoading = (state) => {
    const updatedState = {
        error: false,
        loading: true
    }
    return updateObject(state, updatedState)
}

const projectsSuccess = (state, action) => {
    let list = state.list
    if (action.resetVal === true) {
        list = action.data.list
    } else {
        list.push(...action.data.list)
    }
    const updatedState = {
        error: false,
        loading: false,
        loaded:true,
        list
    }
    return updateObject(state, updatedState)
}

const projectsFailed = (state) => {
    const updatedState = {
        error: true,
        loading: false
    }
    return updateObject(state, updatedState)
}