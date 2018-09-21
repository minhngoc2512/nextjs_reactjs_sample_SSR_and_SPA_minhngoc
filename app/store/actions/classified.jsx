import {CLASSIFIED_LOADING, CLASSIFIED_SUCCESS, CLASSIFIED_FAILED} from "../actionTypes"

import axios from '../../lib/Utils/axios'

export const getClassified = (hash) => {
    return dispatch => {
        dispatch(classifiedLoading())
        axios.get(`/classifieds/${hash}`, {
            params: {}
        })
            .then(response => {
                if (response.data.code === 200) {
                    dispatch(classifiedSuccess(response.data.data))
                } else {
                    dispatch(classifiedFailed())
                }
            })
            .catch(error => {
                dispatch(classifiedFailed())
            })
    }
}

const classifiedLoading = () => {
    return {
        type: CLASSIFIED_LOADING
    }
}

const classifiedSuccess = (data) => {
    return {
        type: CLASSIFIED_SUCCESS
        , data: data
    }
}

const classifiedFailed = () => {
    return {
        type: CLASSIFIED_FAILED
    }
}