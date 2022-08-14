import React, { Component } from 'react'

export default class CreateContact extends Component {
  render() {
    const {input,create}=this.props
    return (
      <div className='form'>
        <h1 className='create-head'>Create Contact</h1>
        <div className="row g-3">
        <div className="col sm">
            <input type="text" className="form-control" placeholder="Name" aria-label="First name" onChange={(e)=>{input(e,'uname')}}/>
        </div>
        <div className="col sm">
            <input type="text" className="form-control" placeholder="Phone" aria-label="Last name" onChange={(e)=>{input(e,'uphone')}}/>
        </div>

        <div className='row g-3'>
        <div className="col sm">
            <input type="text" className="form-control" placeholder="Email" aria-label="Last name" onChange={(e)=>{input(e,'uemail')}}/>
        </div>
        <div className="col sm">
            <input type="text" className="form-control" placeholder="Address" aria-label="Last name" onChange={(e)=>{input(e,'uaddr')}}/>
        </div>
        </div>
        </div>
                <button className="btn btn-success mt-2 mb-2 btn-lg" onClick={(e)=>{create(e)}}>Create</button>

      </div>
    )
  }
}
