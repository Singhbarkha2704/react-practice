import React, { Component } from 'react'

export default class DetailsLog extends Component {
  render() {
    
    return (
      <div>
        <h1 className='all-contact'>All Contacts</h1>
        <div>
        <div className="row">
            {
                this.props.data.map(item =>(
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
      </div>
    )
  }
}
