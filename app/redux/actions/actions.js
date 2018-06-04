import { ADD_TODO, REMOVE_TODO } from "../actionTypes/index";

export function addTodo(data) {
    return {
        type: ADD_TODO,
        payload: data
    };
}
export function removeTodo(data){
    return {
      type : REMOVE_TODO,
      payload: data
    };
}