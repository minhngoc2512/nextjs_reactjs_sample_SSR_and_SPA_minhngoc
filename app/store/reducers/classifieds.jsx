import {CLASSIFIEDS_LOADING, CLASSIFIEDS_SUCCESS, CLASSIFIEDS_FAILED} from "../actionTypes"
import {updateObject} from '../../lib/Utils/objeactFunctions'

const initialState = {
    list: [],
    page: 1,
    loaded: false,
    error: true,
    loading: true
};

export default (state = initialState, action) => {

    switch (action.type) {
        case CLASSIFIEDS_LOADING:
            return classifiedsLoading(state);
        case CLASSIFIEDS_SUCCESS:
            return classifiedsSuccess(state, action);
        case CLASSIFIEDS_FAILED:
            return classifiedsFailed(state);
        default:
            return state;
    }
}

const classifiedsLoading = (state) => {
    const updatedState = {
        error: false,
        loading: true
    }
    return updateObject(state, updatedState)
}

const classifiedsSuccess = (state, action) => {
    let list = state.list
    if (action.resetVal === true) {
        list = action.data.list
    } else {
        list.push(...action.data.list)
    }
    const updatedState = {
        list: list,
        error: false,
        loading: false,
        page: action.page,
        loaded: true
    }
    return updateObject(state, updatedState)
}

const classifiedsFailed = (state) => {
    console.log(state)
    return state;
}