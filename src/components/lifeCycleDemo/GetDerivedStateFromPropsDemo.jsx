import React from 'react';
class GetDerivedStateFromPropsDemo extends React.Component {
render() {
	return (
	<div>
	<Derived name = "sachin"></Derived>
	</div>
	)
}
}
class Derived extends React.Component{
	constructor(props){
		super(props);
		this.state = {
		name: "kapil"
		};
	}
	static getDerivedStateFromProps(props, state) {
		if(props.name !== state.name){
			//Change in props
			return{
				name: props.name
			};
		}
		return null; // No change to state
	}
	/* if props changes then after getDerivedStateFromProps
	method, state will look something like

	{
		name: props.name
	}
	*/
	render(){
	return (
		<div> My name is {this.state.name }</div>
	)
	}
}
					
export default GetDerivedStateFromPropsDemo;
