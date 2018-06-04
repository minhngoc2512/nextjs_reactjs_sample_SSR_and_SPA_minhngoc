import { ADD_TODO, REMOVE_TODO} from "../actionTypes";

const initialState = [{
    data: null,
    marked: false,
}];

export default function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state,{
                marked: true,
                data: action.payload
            }];

        case REMOVE_TODO:
            return [...state,{
                marked: false,
                data: []
            }];

        default:
            return state;
    }
}