import React from 'react';

class ComponentDidUpdateDemo extends React.Component{
    constructor(){  //1
        super();
        console.warn('constructor..');
        this.state = {count:0, msg: 'msgs'}
    }

    componentDidMount(){
        console.warn('Mounted..');
    }

    static getDerivedStateFromProps(props,state){
        console.log("inside DS",props);
        return {msg:props.initialMsg};
    }

    countHandler=()=>{
        // this.count=this.state.count+1 //No!

        // special function to update the state --> this.setState()
        this.setState({count:this.state.count+1})
    }

    componentDidUpdate(pp, ps, ss){
        console.log("pp ",pp);
        console.log('ps ',ps);
        // this.setState({msg:'updated msg'}) //without condition we can't use setState() -> infinite loop and error
        if(ps.count<4){
            this.setState({count:this.state.count+1})
        }
    }

   
    
    render(){
        console.warn('inside render..'); //2
        return(
            <>
                <h1>componentDidUpdate Demo</h1>
                <div>{this.state.msg}</div>
                <div>{this.state.count}</div>
                <button onClick={this.countHandler}>Increment</button>
            </>
        )
    }
}

export default ComponentDidUpdateDemo;