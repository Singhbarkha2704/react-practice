import React, { Component, Fragment } from 'react'

export default class CompletedComponent extends Component {
    constructor(props){
        super(props)
    }

  render() {
    // const {completedTasks} = this.props
    // console.log(completedTasks);

    return (
      <Fragment>
        <h1>Completed Tasks</h1>    
        <div className='container comp-contain'>
            {
                this.props.completedItems.map(task =>(
                    <div className='card task-card'>
                        <h2>{task.taskname}</h2>
                        <h3>{task.taskdesc}</h3>
                        <div className='btn-container'>
                        <button className='btn btn-primary'  onClick={()=>this.props.changeCompletion(task.id)}>Mark to Incomplete</button>
                        <button onClick={()=>this.props.changeDeletion(task.id)} >Move to Trash</button>
                        </div>
                        
                    </div>
                    
                    
                ))
            }


        </div>
      </Fragment>
    )
  }
}
