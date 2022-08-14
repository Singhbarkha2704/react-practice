import React, { Fragment, useState } from 'react';
import './Counter.css';

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const incrementHandler =()=>{
        setCounter(counter+1)
    }

    const decrementHandler =()=>{
        setCounter(counter-1)
    }

    const resetHandler = () =>{
        setCounter(0)
    }
  return (
    <Fragment>
        <div className='container'>
            <h1 className='title'>Counter</h1>
            <div className='counter'>{counter}</div>
            <div className='btn-container'>
                <button className='btns' onClick={incrementHandler}>+</button>
                <button className='btns' onClick={decrementHandler}>-</button>
                <button className='btns reset' onClick={resetHandler}>Reset</button>
            </div>
            
        </div>        
    </Fragment>
    
  )
}

export default Counter