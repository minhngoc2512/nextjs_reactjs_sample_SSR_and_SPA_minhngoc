import {PROJECTS_LOADING, PROJECTS_SUCCESS, PROJECTS_FAILED} from "../actionTypes"

import axios from '../../lib/Utils/axios'

export const getProjects = (page, params) => {
    return dispatch => {
        dispatch(projectsLoading())
        axios.get('/projects', {
            params: {
                page,
                ...params
            }
        })
            .then(response => {
                if (response.data.code === 200) {
                    dispatch(projectsSuccess(response.data.data))
                } else {
                    dispatch(projectsFailed())
                }
            })
            .catch(error => {
                dispatch(projectsFailed())
            })
    }
}

const projectsLoading = () => {
    return {
        type: PROJECTS_LOADING
    }
}

const projectsSuccess = (data) => {
    return {
        type: PROJECTS_SUCCESS
        , data: data
    }
}

const projectsFailed = () => {
    return {
        type: PROJECTS_FAILED
    }
}