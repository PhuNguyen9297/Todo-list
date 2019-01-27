import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
      <div className="card card-body">
        <form onSubmit={this.props.handleSubmit}>
          <div className="input-group input-group-lg">
              <div className="input-group-prepend">
                <div className="input-group-text bg-success">
                  <i className="fas fa-book text-white"></i>
                </div>
              </div>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Type some todos here"
                required
                value={this.props.todo}
                onChange={this.props.handleChange} />
            </div>
          <input 
            type='submit' 
            className="form-control text-capitalize btn btn-success mt-2" 
            value={!this.props.edit? 'Add a todo' : 'Edit todo'}/>
        </form>
      </div>
    )
  }
}