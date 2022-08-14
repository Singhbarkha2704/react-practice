import React from 'react'
import { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    const [inp, setInp] = useState('')


    const incrementCounter = (e) =>{
        e.preventDefault()
        setCount(count+1)
    }

    const decrementCounter = (e) =>{
        e.preventDefault()
        setCount(count-1)
    }

    const changeInput=(e)=>{
        e.preventDefault()
        setInp(e.target.value)
    }

    const handleSubmit=(e)=>{
      e.preventDefault()
      setName(inp)
    }

  return (
    <div>
    <h2>{name}</h2>
    Name: <input placeholder='Enter Name' onChange={(e)=>changeInput(e)}/><br/>
    <button className='btn btn-outline-dark'  onClick={(e)=>{handleSubmit(e)}}>Submit</button><br/><br/>
    <hr></hr>
    <div>
      <h1>Counter</h1>
      <button className='btn btn-outline-success' onClick={e=>{incrementCounter(e)}}>+</button>
    <h2>{count}</h2>
    <button className='btn btn-outline-danger'  onClick={e=>{decrementCounter(e)}}>-</button>
    </div>
    
    </div>
  )
}

export default UseState