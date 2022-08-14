import React, { Component } from 'react'
import ContactDetails from './ContactData'
import CreateContact from './CreateContact'
import DetailsLog from './DetailsLog'
import UpdateContact from './UpdateContact'
import './SelfContact.css'
import Search from './Search'

export default class SelfContact extends Component {
    constructor(props){
        super()
        this.state={
            data:ContactDetails,
            isCreate:true,
            ipname:'',
            ipphone:'',
            ipemail:'',
            ipaddr:'',
            uid:-1,
            // obj:{},
            vname:'',
            vphone:'',
            vemail:'',
            vaddr:'',
            // values:{
            //     valname:'',
            //     valphone:'',
            //     valemail:'',
            //     valaddr:''
            // }
            result:[],
            search:''
        }
    }

    inputHandler=(e,key)=>{
        if(key==='uname'){
            this.setState({ipname:e.target.value})
            console.log(this.state.ipname);
        }
        if(key==='uphone')
            this.setState({ipphone:e.target.value})
        if(key==='uemail')
            this.setState({ipemail:e.target.value})
        if(key==='uaddr')
            this.setState({ipaddr:e.target.value})                   
    }

    contactCreator=(e)=>{
        e.preventDefault()
        const newContact={
            id:Date.now(),
            fname:this.state.ipname,
            phone:this.state.ipphone,
            email:this.state.ipemail,
            address:this.state.ipaddr
        }

        const addeddata = [...this.state.data,newContact]
        this.setState({data:addeddata})

        // this.setState({ipname:'', iphone:'', ipemail:'', ipaddr:''})

        console.log(this.state.data);
    }

    deleteHandler=(e,delId)=>{
        e.preventDefault()
        const res = this.state.data.filter(item =>item.id!==delId)
        this.setState({data:res})
        console.log('res',res);
    }

    formToggler=(e,editId, editName, editPhone, editEmail, editAddr)=>{
        e.preventDefault()
        this.setState({isCreate:!this.state.isCreate}) //update-form display
        // console.log(this.state.isCreate);
        const obj = this.state.data.find(item=>item.id===editId)   
        console.log(obj);
        // this.setState({obj:obj})
        // console.log(this.state.obj);
        this.setState({uid:editId})
        // const name = obj.fname

        this.setState({vname:obj.fname})
        this.setState({vphone:obj.phone})
        this.setState({vemail:obj.email})
        this.setState({vaddr:obj.address})

        // console.log(this.state.vname);
    }  

    getValues=()=>{
        // const values=this.state.obj;
        // console.log(values);
        const values={
            valname:this.state.vname,
            valphone:this.state.vphone,
            valemail:this.state.vemail,
            valaddr:this.state.vaddr
        }
        return values

    }

    valueChanger=(e,key)=>{
        if(key==='uname')
            this.setState({vname:e.target.value})

        if(key==='uphone')
            this.setState({vphone:e.target.value})
            
        if(key==='umail')
            this.setState({vemail:e.target.value})
            
        if(key==='uaddr')
            this.setState({vaddr:e.target.value})    
    
    }

    updateHandler=(e)=>{
        e.preventDefault()
        const temp = [...this.state.data]
        const obj = temp.find(item=>item.id===this.state.uid)
        obj.fname = this.state.vname
        obj.phone = this.state.vphone
        obj.email = this.state.vemail
        obj.address = this.state.vaddr
        this.setState({data:temp})
        console.log(this.state.data);
        this.setState({uid:-1})
        this.setState({isCreate:true})
    }

    // Search Logic
    changeHandler = (event) =>{
        console.log(event.target.value);
        this.setState({search:event.target.value})
        }

    clickHandler = (event) =>{
        event.preventDefault();
        let searchedItem = this.state.data.filter(item => item.fname === this.state.search)
            console.log(searchedItem);
            this.setState({result: searchedItem})

        }
    
    
  render() {
    console.log(this.state.data);
    return (
      <div className='contact'>
        <h1 className='head'>Contact Manager</h1>
        <Search changeHandler={this.changeHandler} clickHandler={this.clickHandler} result={this.state.result} />
        <div className='main'>
        {
            this.state.isCreate?<CreateContact input={this.inputHandler} create={this.contactCreator}/>:
            <UpdateContact input={this.inputHandler} values={this.getValues()} changeHandle={this.valueChanger} updateHandle={this.updateHandler}/>
        }              
        <DetailsLog data={this.state.data} delete={this.deleteHandler} formToggle={this.formToggler}/>
      </div>
      </div>
    )
  }
}
