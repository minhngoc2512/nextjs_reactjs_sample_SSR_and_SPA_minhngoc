import {CATEGORIES_LOADING, CATEGORIES_SUCCESS, CATEGORIES_FAILED} from "../actionTypes"

import axios from '../../lib/Utils/axios'

export const getCategories = () => {
    return dispatch => {
        dispatch(categoriesLoading())
        axios.get('/categories')
            .then(response => {
                if (response.data.code === 200) {
                    dispatch(categoriesSuccess(response.data.data.list))
                } else {
                    dispatch(categoriesFailed())
                }
            })
            .catch(error => {
                dispatch(categoriesFailed())
            })
    }
}

const categoriesLoading = () => {
    return {
        type: CATEGORIES_LOADING
    }
}

const categoriesSuccess = (data) => {
    return {
        type: CATEGORIES_SUCCESS
        , data: data
    }
}

const categoriesFailed = () => {
    return {
        type: CATEGORIES_FAILED
    }
}