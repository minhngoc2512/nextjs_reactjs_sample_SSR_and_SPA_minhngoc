import {CLASSIFIEDS_LOADING, CLASSIFIEDS_SUCCESS, CLASSIFIEDS_FAILED} from "../actionTypes"

import axios from '../../lib/Utils/axios'
import {objectGetVal} from 'lib/Utils/objeactFunctions'

export const getClassifieds = (page,reset_val,params = {}) => {
    let iCat = objectGetVal('iCat', params, 'int', 0);
    let iCit = objectGetVal('iCit', params, 'int', 0);
    let iDis = objectGetVal('iDis', params, 'int', 0);
    let iWard = objectGetVal('iWard', params, 'int', 0);
    let iProj = objectGetVal('iProj', params, 'int', 0);
    let take = objectGetVal('take', params, 'int', 1);
    let img_size = objectGetVal('img_size', params, 'str', '');
    let all_img = objectGetVal('all_img', params, 'int', 0);
    return dispatch => {
        dispatch(classifiedsLoading())
        axios.get('/classifieds', {
            params: {
                iCat, iCit, iDis, iProj, take, page, img_size, all_img, iWard
            }
        })
            .then(response => {
                if (response.data.code === 200) {
                    dispatch(classifiedsSuccess(response.data.data,page,reset_val))
                } else {
                    dispatch(classifiedsFailed())
                }
            })
            .catch(error => {
                dispatch(classifiedsFailed())
            })
    }
}

const classifiedsLoading = () => {
    return {
        type: CLASSIFIEDS_LOADING
    }
}

const classifiedsSuccess = (data,page,reset_val) => {
    return {
        type: CLASSIFIEDS_SUCCESS
        , data: data
        ,page:page
        ,resetVal:reset_val
    }
}

const classifiedsFailed = () => {
    return {
        type: CLASSIFIEDS_FAILED
    }
}