import { merge } from 'lodash';

import { RECEIVE_TODOS, RECEIVE_TODO } from "../actions/todo_actions.js";

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_TODOS:
      const newState = {};
        action.todos.forEach(todo => (newState[todo.id] = todo));
        return newState;
        //
        //  {
        //   todos: action.todos
        // }
    case RECEIVE_TODO:
      const otherState = merge({}, state);
        otherState[action.todo.id] = action.todo;
        return otherState;
    default:
      return state;
  }
};

export default todosReducer;
