import React, { Component, Fragment } from 'react';
// import {Button} from 'react-bootstrap'

export default class BinComponent extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
<Fragment>
                <h1>Trashed Tasks</h1>    

        <div className='container comp-contain'>
            {
                this.props.deletedTasks.map(task =>(
                    <div className='card task-card'>
                        <h2>{task.taskname}</h2>
                        <h3>{task.taskdesc}</h3>
                        <button onClick={()=>this.props.changeDeletion(task.id)}>Restore</button>
                    </div>                                       
                ))
            }
        </div>
    </Fragment>
    )    
  }
}
