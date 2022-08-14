import React, { Component, Fragment } from 'react'

export default class PendingComponent extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
<Fragment>
                <h1>Pending Tasks</h1>    

        <div className='container comp-contain'>
            {
                this.props.pendingItems.map(task =>(
                    <div className='card task-card'>
                        <h2 >{task.taskname}</h2>
                        <h3>{task.taskdesc}</h3>
                        <button onClick={()=>this.props.changeCompletion(task.id)}>Mark completed</button>
                    </div>
                    
                    
                ))
            }
        </div>
    </Fragment>
    )    
  }
}
