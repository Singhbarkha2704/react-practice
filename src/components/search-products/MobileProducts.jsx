import React, { Component, Fragment } from 'react';
import './MobileProducts.css'

class MobileProducts extends Component {
    constructor(props){
            super(props);
            this.state={
                prodDetails: [],
                search: '',
                result: []
            }
        }

        static getDerivedStateFromProps(props,state){
            // console.log(props.data);
        return {prodDetails:props.data}
    }

        changeHandler = (event) =>{
            // console.log(event.target.value);
            this.setState({search:event.target.value})
        }

        clickHandler = (event) =>{
            event.preventDefault();
            let data = this.state.prodDetails.filter(item => item.name === this.state.search)
                // console.log(data);
                this.setState({result: data})

        }

    render() {
        
        return(
            <Fragment>
                <div className='page'>
                    
                <form className='search-form'>
                    <input className='prod-input' type='text' placeholder='Enter Product Name' onChange={(e) =>{this.changeHandler(e)}}></input>
                    <button className='search-btn' onClick={(e) =>{this.clickHandler(e)}}>Search</button>
                </form>

                <div className='container'>
                    <h1 className='heading'>Search Results</h1>
                    <div className='products'>
                       {this.state.result.map(item => (
                        <div className="cards" >
  
                        <div className='img-container'>           
                            <img
                                src={item.image}
                                className="product-image"
                                alt={item.name}
                            />
                            
                        </div> 
                <div>
                    <h5 className="product-name">{item.name}</h5> 
                    <h6 className='product-price'> Rs. {item.Price}</h6>
                    <div><button className='product-add-btn'>Add to Cart</button></div>
                </div> 
                </div>
                       ))} 
                    </div>

                </div>
            </div>    
            </Fragment>
        );
    }
}

export default MobileProducts;