import {PROJECT_LOADING, PROJECT_SUCCESS, PROJECT_FAILED} from "../actionTypes"

import axios from '../../lib/Utils/axios'

export const getProject = () => {
    return dispatch => {
        dispatch(projectLoading())
        axios.get('/project', {
            params: {}
        })
            .then(response => {
                if (response.data.code === 200) {
                    dispatch(projectSuccess(response.data.data))
                } else {
                    dispatch(projectFailed())
                }
            })
            .catch(error => {
                dispatch(projectFailed())
            })
    }
}

const projectLoading = () => {
    return {
        type: PROJECT_LOADING
    }
}

const projectSuccess = (data) => {
    return {
        type: PROJECT_SUCCESS
        , data: data
    }
}

const projectFailed = () => {
    return {
        type: PROJECT_FAILED
    }
}