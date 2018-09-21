import { combineReducers } from "redux";

import categoriesReducer from './categories'
import classifiedsReducer from './classifieds'
import classifiedReducer from './classified'
import rewritesReducer from './rewrites'
import projectsReducer from './projects'
import projectReducer from './project'

export default  combineReducers({
    categories: categoriesReducer,
    classifieds: classifiedsReducer,
    classified: classifiedReducer,
    rewrites: rewritesReducer,
    projects: projectsReducer,
    project: projectReducer,
})