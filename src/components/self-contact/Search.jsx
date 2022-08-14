import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <div>
        <form className='search-form'>
            <input className='prod-input' type='text' placeholder='Enter Contact Name' onChange={(e) =>{this.props.changeHandler(e)}}></input>
            <button className='search-btn' onClick={(e) =>{this.props.clickHandler(e)}}>Search</button>
        </form>

        <div className="row">
        {
            this.props.result.map(item =>(
                <div className="col-sm-3">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">{item.fname}</h5>
                            <p className="card-text">{item.phone}</p>
                            <p className="card-text">{item.email}</p>
                            <p className="card-text">{item.address}</p>
                            <button className="btn btn-danger ms-2 me-2" onClick={(e)=>{this.props.delete(e,item.id)}}>Delete</button>
                            <button className="btn btn-primary" onClick={(e)=>{this.props.formToggle(e,item.id)}}>Edit</button>
                        </div>
                    </div>
                </div>
            )
            )
        }
        </div>
      </div>
    )
  }
}
