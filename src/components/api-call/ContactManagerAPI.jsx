import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './ContactApi.css';


export default class ContactManagerAPI extends Component {
    constructor(props){
        super(props)
        this.state={
            results:[],
            statusText:'',
            ipUser:"",
            ipEmail:"",
            ipCity:"",
            update:true,
            uid:-1,
            vuser:'',
            vemail:'',
            vcity:''
        }
    }

    componentDidMount=()=>{
        axios.get(`http://localhost:3000/empDetails`).then(res => {
            console.log(res.data);
            this.setState({results:res.data})
        }).catch(err=>console.log(err))
    }

    // function invoked when user enters value to the input and setState
    changeHandler=(e,key)=>{
        if(key==='uname')            
            this.setState({ipUser:e.target.value})
        
        if(key==='uemail')
            this.setState({ipEmail:e.target.value})
        
        if(key==='ucity')
            this.setState({ipAddress:e.target.value})       
    }
    

    handleDelete=(e,itemid)=>{
        e.preventDefault()
        axios.delete(`http://localhost:3000/empDetails/${itemid}`).then(res=>{
            console.log(res.data);
            this.setState({statusText:'deleted'})
        }
        ).catch(err=>console.log(err))

         axios.get(`http://localhost:3000/empDetails`).then(res => {
            console.log(res.data);
            this.setState({results:res.data})
        }).catch(err=>console.log(err))
    }

    handleContact=(e)=>{
        axios.post(`http://localhost:3000/empDetails`,{
            id:Date.now(),
            fname:this.state.ipUser,
            email:this.state.ipEmail,
            city: this.state.ipCity
        }).then(res=>this.setState({statusText:'Contact Created Successfully!!'})
        ).catch(err=>console.log({statusText:'Contact Creation Failed'}))
    }

    setUpdateMsg=(e,itemid)=>{
        e.preventDefault();
        this.toggleUpdate()    //calling func  
        axios.get(`http://localhost:3000/empDetails/${itemid}`).then(res => {
            console.log(res.data);
            this.setState({vuser:res.data.fname})
            this.setState({vemail:res.data.email})
            this.setState({vcity:res.data.city})
        }).catch(err=>console.log(err))
        this.setState({uid:itemid})
        this.changeHandler(e,this.state.uid)
    }

    toggleUpdate=()=>{
        this.setState({update:!this.state.update})
    }
    
    valueHandler=(e,itemid)=>{
         if(itemid==='uname')            
            this.setState({vuser:e.target.value})
        
        if(itemid==='uemail')
            this.setState({vemail:e.target.value})
        
        if(itemid==='ucity')
            this.setState({vcity:e.target.value})       
    }

    handleUpdate=(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:3000/empDetails/${this.state.uid}`,{
            fname:this.state.vuser,
            email:this.state.vemail,
            city: this.state.vcity
        }).then(res=>{this.setState({statusText:'Updated Succesfully'})
        console.log(res.data.fname);
        }
        ).catch(err=>this.setState({statusText:'Contact Updation Failed'}))

        this.setState({uid:-1})
        this.toggleUpdate()
    }

  render() {
    return (
        <Fragment>
      <div className='main-heading'>Contact Manager</div>
        {/* Form to create and Update Contacts */}
        <div className='form-container'>
            {
                this.state.update?
                <form>
                    <h2 className='form-heading'>Contact Form</h2>

                    <div className='row mb-3'>
                    <label >User Name</label>
                    <div className="col-sm-10">
                        <input className='form-control'  type='text'  onChange={(e)=>this.changeHandler(e,'uname')}></input>
                    </div>
                </div>

                <div class='row mb-3'>
                    <label >Email</label>
                    <div class="col-sm-10">
                        <input className='form-control'  type='text' onChange={(e)=>this.changeHandler(e,'uemail')}></input>
                    </div>
                </div>

                <div class="row">
                    <label >Address</label>
                    <div class="col-sm-10">
                        <input className='form-control' type='text' onChange={(e)=>this.changeHandler(e,'ucity')}></input>
                    </div>
                </div>
                <button className=' btn btn-outline-primary mt-2'  onClick={(e)=>this.handleContact(e)}>Add Contact</button>
                 </form>:
                 <form className='edit-form'>
                <label >User Name</label>
                <input className='inp-box' type='text' value={this.state.vuser} onChange={(e)=>this.valueHandler(e,'uname')}></input>
                <label >Email</label>
                <input className='inp-box' type='text' value={this.state.vemail} onChange={(e)=>this.valueHandler(e,'uemail')}></input>
                <label >Address</label>
                <input className='inp-box' type='text' value={this.state.vcity} onChange={(e)=>this.valueHandler(e,'ucity')}></input>
                <button className='btn btn-secondary'  onClick={e=>this.handleUpdate(e)}>Update Contact</button> 
                 </form>

            }                          
        </div>
        <p className='status-text'>{this.state.statusText}</p>
     
        {/* container for showing data to the UI*/}
         <div className='container box'>
           <h2>All Contacts</h2> 
           <div className='products'>    
            {
                this.state.results.map((item)=>(
                    <div className='item-box cards'>
                        <h3 className='user-name'>{item.fname}</h3>
                        <h5 className='city'>{item.city} </h5>
                        <p className='email'>{item.email}</p>
                        <button className='box-btn dlt-btn btn btn-danger'  onClick={(e)=>this.handleDelete(e,item.id)}>Delete</button>
                        <button className='box-btn edit-btn btn btn-warning'  onClick={(e)=>this.setUpdateMsg(e,item.id)}>Edit</button>
                        <hr/>
                    </div>
                ))
            }
            </div>
        </div>
        </Fragment>

    )
  }
}
