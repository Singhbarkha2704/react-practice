import React, { Component } from "react";
import Child from "./Child";

class LifeCycle extends Component{
  constructor(){
    super()
    console.warn('constructor');
    this.state ={show:false}
  }  

  componentDidMount(){
    console.warn('mounted');
  }

 

  render(){
    console.warn('render');
    return(
      <>
        {
          this.state.show? <Child/>: null
        }

        <button onClick={() =>{this.setState({show:!this.state.show})}}>Hit</button>
      </>
    )
  }
}

export default LifeCycle;