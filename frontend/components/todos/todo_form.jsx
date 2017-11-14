import React from 'react';

class TodoForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      id: new Date().getTime(),
      title: "",
      body: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);

  }
  handleChange(e) {
    this.setState({title: e.target.value});
    console.log(this.state);
  }

  handleChange2(e) {
    this.setState({body: e.target.value});
    console.log(this.state);
  }

  handleSubmit(e){
    console.log(this.state);
    event.preventDefault();
    this.props.receiveTodo(this.state);
  }

  render(){
    // console.log(this.state);

    return (
      <div>

        <h1>It werqs!</h1>
        <form onSubmit={this.handleSubmit}>
          <label>title
            <input type="text" value={this.state.title} onChange={this.handleChange} />
          </label>
          <label>Body
            <textarea type="text" value={this.state.body} onChange={this.handleChange2} />
          </label>
          <input type="submit" value="submit"/  >
        </form>
      </div>
    );
  }
}

export default TodoForm;
