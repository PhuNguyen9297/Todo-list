import React, { Component } from 'react'
import TodoItem from './TodoItem';

export default class Output extends Component {
  render() {
    return (
      <div className="mt-4 card card-body">
        <h3 className="text-center">Todo List</h3>
        <ul className="list-group list-group-flush">
          {this.props.items.map(item => <TodoItem 
                                          item={item.todo}
                                          handleClearOne={()=>this.props.handleClearOne(item.key)}
                                          handleEdit={()=>this.props.handleEdit(item.key)}/>)}
        </ul>
        <button 
          type="button" 
          className="btn btn-block bg-danger mt-4 text-white text-capitalize"
          onClick={this.props.handleClear}
          >Clear list</button>
      </div>
    )
  }
}
