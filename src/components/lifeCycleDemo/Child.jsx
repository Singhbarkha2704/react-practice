import React, { Component } from "react";

//child class of LifeCycle class
class Child extends Component{
componentWillUnmount(){
    console.warn('unmount..');
}
  render(){
    return(
      <>
        <h1>Child..</h1>
      </>
    )
  }
}

export default Child;