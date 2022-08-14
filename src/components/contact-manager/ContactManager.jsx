import React, { Component, Fragment } from 'react'

export default class ContactManager extends Component {
    constructor(props){
        super(props);
        this.state={
            contactinfo:this.props.data,
            ipUser:"",
            ipPhone:"",
            ipEmail:"",
            ipAddress:"",
            update:false,
            uid:-1
        }
    }

    changeHandler=(e,key)=>{
        if(key==='uname')            
            this.setState({ipUser:e.target.value})
        
        if(key==='uphone')
            this.setState({ipPhone:e.target.value})
        
        if(key==='uemail')
            this.setState({ipEmail:e.target.value})
        
        if(key==='uaddr')
            this.setState({ipAddress:e.target.value})       
    }
    //  Function to Add new Contact while hitting 'Add Contact' btn
    handleContact=(e)=>{
        e.preventDefault()
        const obj={
            id:Date.now(),
            fname:this.state.ipUser,
            phone:this.state.ipPhone,
            email:this.state.ipEmail,
            address:this.state.ipAddress
        }
        let addedData=[...this.state.contactinfo,obj]
        console.log('added data',addedData);
        this.setState({contactinfo:addedData})   
    }
    
     setUpdateMsg=(e,itemid)=>{
        e.preventDefault()
        this.toggleUpdate()    //calling func  
        this.setState({uid:itemid})
    }

    toggleUpdate=()=>{
        this.setState({update:!this.state.update})
    }

    handleUpdate=(e)=>{
        let temp=[...this.state.contactinfo]
        let obj=temp.find((item)=>item.id===this.state.uid)
        obj.fname=this.state.ipUser
        this.setState({contactinfo:temp})
        this.setState({uid:-1})
        this.toggleUpdate()
    }

    handleDelete=(e,itemid)=>{
      const result=this.state.contactinfo.filter((item)=>item.id!==itemid)
      this.setState({contactinfo:result})
    }

  render() {
    return (
      <Fragment>
        <h1>Contact Manager</h1>
        <div>
            <h2>Contact Form</h2>
            <form>
                <label >User Name</label>
                <input type='text' onChange={(e)=>this.changeHandler(e,'uname')}></input>
                <label >Contact Number</label>
                <input type='text' onChange={(e)=>this.changeHandler(e,'uphone')}></input>
                <label >Email</label>
                <input type='text' onChange={(e)=>this.changeHandler(e,'uemail')}></input>
                <label >Address</label>
                <input type='text' onChange={(e)=>this.changeHandler(e,'uaddr')}></input>
                {
                    this.state.update?
                    <button onClick={(e)=>this.handleUpdate(e)}>Update Contact</button> :
                    <button onClick={(e)=>this.handleContact(e)}>Add Contact</button>
                }            
                </form>
        </div>
        <div>
             All Contacts:
            {
                this.state.contactinfo.map((item)=>(
                    <div>
                        <h2>{item.fname}</h2>
                        <h3>{item.phone} {item.email}</h3>
                        <p>{item.address}</p>
                        <button onClick={(e)=>this.handleDelete(e,item.id)}>Delete</button>
                        <button onClick={(e)=>this.setUpdateMsg(e,item.id)}>Update</button>
                    </div>
                ))
            }
        </div>

        


      </Fragment>
    )
  }
}
