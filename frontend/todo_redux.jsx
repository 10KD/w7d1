import React from "react";
import ReactDOM from "react-dom";
import { receiveTodos, receiveTodo } from './actions/todo_actions.js';
import configureStore from "./store/store.js";
import App from './components/app.jsx';
import Root from './components/root.jsx';
import { allTodos } from './reducers/selectors.js';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);
});
