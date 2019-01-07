export const ADD_TODO = 'ADD_TODO';
export const GET_BY_INDEX = 'GET_BY_INDEX';
export const DELETE_TODO = 'DELETE_TODO';

export function addTodo(text) {
    return { type: ADD_TODO, text }
}

export function getTodo() {
    return { type: '' }
}

export function getTodoByIndex(index) {
    return { type: GET_BY_INDEX, text: index }
}

export function deleteTodo(index) {
    return { type: DELETE_TODO, text: index }
}