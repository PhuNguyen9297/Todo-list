import React, { Component } from 'react'
import TodoItem from './TodoItem';

export default class Output extends Component {
  render() {
    var items = this.props.items;
    for(let i = items.length - 1; i > 0; i--){
      for(let j = 0; j < i; j++){
        if(items[j].key > items[j+1].key){
          let temp = items[j];
          items[j] = items[j+1];
          items[j+1] = temp;
        }
      }
    }
    console.log(items.map(val => val.key));
    return (
      <div className="mt-4 card card-body">
        <h3 className="text-center">Todo List</h3>
        <ul className="list-group list-group-flush">
          {items.map(item => <TodoItem 
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
