import React, { Component } from 'react'

export default class UpdateContact extends Component {
  render() {
    
    return (
      <div className='form'>
        <h1 className='create-head'>Update Contact Form</h1>
        <div className="row g-3">
          <div className="col sm">
              <input type="text" className="form-control" placeholder="Name" aria-label="First name" value={this.props.values.valname} onChange={(e)=>this.props.changeHandle(e,'uname')}/>
          </div>
          <div className="col sm">
              <input type="text" className="form-control" placeholder="Phone" aria-label="Last name" value={this.props.values.valphone} onChange={(e)=>this.props.changeHandle(e,'uphone')}/>
          </div>

          <div className='row g-3'>
          <div className="col sm">
              <input type="text" className="form-control" placeholder="Email" aria-label="Last name" value={this.props.values.valemail} onChange={(e)=>this.props.changeHandle(e,'umail')}/>
          </div>
          <div className="col sm">
              <input type="text" className="form-control" placeholder="Address" aria-label="Last name" value={this.props.values.valaddr} onChange={(e)=>this.props.changeHandle(e,'uaddr')}/>
          </div>
        </div>
        </div>
        <button className="btn btn-success btn-lg mt-2 mb-2" onClick={(e)=>{this.props.updateHandle(e)}}>Update</button>
      </div>
    )
  }
}
