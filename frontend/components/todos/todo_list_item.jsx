import React from 'react';

class TodoListItem extends React.Component {
  render(){

    const ourList = this.props.todos.map((e,i)=><li key={i}>{e.title}</li>);
    return ourList;
  }
}

export default TodoListItem;
