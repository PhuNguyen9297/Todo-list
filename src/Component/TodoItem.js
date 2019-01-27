import React, { Component } from 'react'

export default class TodoItem extends Component {

  render() {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <h6>{this.props.item}</h6>
            <div className="todo-icon">
                <span 
                    className="mx-2 text-success"
                    onClick={this.props.handleEdit}><i className="fa fa-pen" ></i></span>
                <span 
                    className="mx-2 text-success"
                    onClick={this.props.handleClearOne}><i className="fa fa-trash mx-2 text-danger"></i></span>
            </div>
        </li>
    )
  }
}
