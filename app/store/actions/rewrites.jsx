import {REWRITE_LOADING, REWRITE_SUCCESS, REWRITE_FAILED,CLASSIFIEDS_SUCCESS,PROJECTS_SUCCESS,PROJECT_SUCCESS} from "../actionTypes"

import axios from '../../lib/Utils/axios'
import {objectGetVal} from '../../lib/Utils/objeactFunctions'

export const getRewrite = (rewrite,params) => {
    let take = objectGetVal('take',params,'int',1);
    let page = objectGetVal('page',params,'str','');
    let img_size = objectGetVal('img_size', params, 'str', '');
    let all_img = objectGetVal('all_img', params, 'int', 0);
    return dispatch => {
        dispatch(rewritesLoading())
        axios.get('/rewrites', {
            params:{
                name:rewrite
                ,page,take,img_size,all_img
            }
        })
            .then(response => {
                if (response.data.code === 200) {
                    const {rewrite} = response.data.data;
                    const module = objectGetVal('param.module',rewrite,'str','')
                    const type = objectGetVal('param.type',rewrite,'str','')
                    const {list} = response.data.data
                    dispatch(rewritesSuccess(rewrite))
                    switch (module) {
                        case "bannhadat":
                        case "chothue":
                        case "location":
                                dispatch(classifiedsSuccess({list},1,true))
                            break;
                        case "compare":
                            break;
                        case "project":
                            if(type==="project"){
                                dispatch(projectSuccess(response.data.data.detail))
                            }else{
                                dispatch(projectsSuccess({list},1,true))
                            }
                            break;
                        default:
                            break;
                    }

                } else {
                    dispatch(rewritesFailed())
                }
            })
            .catch(error => {
                dispatch(rewritesFailed())
            })
    }
}

const rewritesLoading = () => {
    return {
        type: REWRITE_LOADING
    }
}

const rewritesSuccess = (data) => {
    return {
        type: REWRITE_SUCCESS
        , data: data
    }
}

const rewritesFailed = () => {
    return {
        type: REWRITE_FAILED
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
const projectsSuccess = (data,page,reset_val) => {
    return {
        type: PROJECTS_SUCCESS
        , data: data
        ,page:page
        ,resetVal:reset_val
    }
}
const projectSuccess = (data) => {
    return {
        type: PROJECT_SUCCESS
        , detail: data
    }
}