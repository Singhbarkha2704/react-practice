import React, { Component, Fragment } from 'react';
import Data from './TasksData';
import CompletedComponent from './CompletedComponent';
import PendingComponent from './PendingComponent';
import BinComponent from './BinComponent';
import './TaskManager.css'

export default class TaskManager extends Component {
    constructor(props){
        super(props)
        this.state={
            tasks:this.props.data
        }
    }

    getPendingItems=()=>{
        const result = this.state.tasks.filter(task=>task.completion===false && task.deletion===false)
        return result
    }

    getCompletedItems=()=>{
        const result=this.state.tasks.filter(task=>task.completion===true &&task.deletion===false)
        return result
    }

    changeCompletionStatus = (itemid) =>{
        const temp = [...this.state.tasks]
        console.log(temp);
        const obj = temp.find(item=>item.id===itemid)
        obj.completion=!obj.completion
        this.setState({tasks:temp}) 
    }

    changeDeletionStatus = (itemid) =>{
        const temp = [...this.state.tasks]
        console.log(temp);
        const obj = temp.find(item=>item.id===itemid)
        obj.deletion=!obj.deletion
        this.setState({tasks:temp}) 
    }

    getDeletedTasks=()=>{
        const result=this.state.tasks.filter(task=>task.deletion === true)
        return result
    }    

  render(){
    return (
        <Fragment>
            <div>
                <h1 className='main-heading'>Task Manager</h1>
            <CompletedComponent completedItems={this.getCompletedItems()} changeCompletion={this.changeCompletionStatus} changeDeletion={this.changeDeletionStatus} />
            <PendingComponent pendingItems={this.getPendingItems()} changeCompletion={this.changeCompletionStatus}/>
            <BinComponent deletedTasks={this.getDeletedTasks()} changeDeletion={this.changeDeletionStatus}/>
            </div>
            
        </Fragment>
    )
  }
}
