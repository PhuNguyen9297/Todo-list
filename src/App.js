import React, { Component } from 'react';
import './App.css';
import Input from './Component/Input';
import Output from './Component/Output';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      todo: '',
      key: 1,
      edit: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleClearOne = this.handleClearOne.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleChange(e){
    this.setState({
      todo: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();

    this.setState({
      items: [...this.state.items, {todo: this.state.todo, key: this.state.key}],
      todo: '',
      key: this.state.key + 1,
      edit: false
    })
  }
  handleClear(){
    this.setState({
      items: [],
      key: 1,
      edit: false
    })
  }
  handleClearOne(key){
    this.setState({
      items: this.state.items.filter(item => item.key !== key)
    })
  }
  handleEdit(key){
    this.setState({
      items: this.state.items.filter(item => item.key !== key),
      todo: this.state.items.filter(item => item.key === key)[0].todo,
      edit: true
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-8 col-sm-8 mx-auto">
            <h3 className="text-center">The todo list</h3>
            <div>
              <Input 
                edit={this.state.edit}
                todo={this.state.todo}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}></Input>
            </div>
            <Output 
              items={this.state.items} 
              handleClear={this.handleClear}
              handleClearOne={this.handleClearOne}
              handleEdit={this.handleEdit}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;