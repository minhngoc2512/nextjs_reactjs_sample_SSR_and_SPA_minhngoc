import {CLASSIFIED_LOADING, CLASSIFIED_SUCCESS, CLASSIFIED_FAILED} from '../actionTypes'
import {updateObject} from '../../lib/Utils/objeactFunctions'

const initialState = {
    data: [],
    loaded: false,
    error: true,
    loading: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CLASSIFIED_LOADING:
            return classifiedLoading(state);
        case CLASSIFIED_SUCCESS:
            return classifiedSuccess(state, action);
        case CLASSIFIED_FAILED:
            return classifiedFailed(state);
        default:
            return state;
    }
}

const classifiedLoading = (state) => {
    const updatedState = {
        error: false,
        loading: true
    }
    return updateObject(state, updatedState)
}

const classifiedSuccess = (state, action) => {
    let data = state.data;
    data.push( action.data)
    console.log(data)
    const updatedState = {
        data:data,
        error: false,
        loading: false,
        loaded: true
    }
    return updateObject(state, updatedState)
}

const classifiedFailed = (state) => {
    const updatedState = {
        error: true,
        loading: false
    }
    return updateObject(state, updatedState)
}