//stub in react component
import React from 'react';
import TodoListItem from './todo_list_item.jsx';
import TodoForm from './todo_form.jsx';
// const { todos, receiveTodo } = this.props;
// const ourList = todos.map((e,i)=><li key={i}>{e.title}</li>);
class TodoList extends React.Component {
  render(){
    const { todos, receiveTodo } = this.props;

    return(
      <div>
        <h1>OUR TODOS BAYBEEE</h1>
        <TodoListItem todos={todos} receiveTodo={receiveTodo}/>
        <TodoForm receiveTodo={receiveTodo}/>
      </div>
    );
  }
}

export default TodoList;
