import { combineReducers } from 'redux'
import {
  ADD_TODO,
  GET_BY_INDEX,
  DELETE_TODO
} from '../actions/actions';

// Data Store
const toDoList = {
  list: [
    {
      text: 'makan malam',
      time: '',
      completed: false
    },
    {
      text: 'makan siang',
      time: '',
      completed: true
    }
  ],
  detail: {}
};

function todos(state = toDoList, action) {
    switch (action.type) {
      case ADD_TODO:
        return {
          ...state,
          list: [
            ...state.list,
            {
              text: action.text,
              completed: false
            }
          ]
        };
      case GET_BY_INDEX:
        return {
          ...state,
          detail: state.list[action.text],
        };
      case DELETE_TODO:
        return {
          ...state,
          list: [
            ...state.list.filter((val, idx) => idx !== action.text)
          ]
        }
      default:
        return state
    }
}

const todoApp = combineReducers({
  todos
})

export default todoApp