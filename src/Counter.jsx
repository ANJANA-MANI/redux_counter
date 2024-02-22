import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,incrementByamount,reset } from './redux/counterSlice'

function Counter() {
    const count=useSelector((state)=>state.counter.count)
    const dispatch=useDispatch()
    const[amount,setamount]=useState(0);
    const handleClick=()=>{

      if(amount=="")
      {
        alert('please enter the amount');
      }
      else{
        dispatch(incrementByamount (Number(amount)));
      }
    }
  return (
    
 <div className="value">
<h1 className='text-danger'>{count}</h1>
<div>
<div className="btn btn-warning p-2 m-2 text-white" onClick={()=>dispatch(increment())}>Increment</div>
 <div className="btn btn-danger p-2 m-2" onClick={()=>dispatch(reset())}>Reset</div>
 <div className="btn btn-success p-2 m-2"onClick={()=>dispatch(decrement())}>Decrement</div>
</div>
<div className='d-flex mt-5 justify-content-center'>
    <input  onChange={(e)=>setamount(e.target.value)} type="text"className='form-control w-25' placeholder='enter the amount to be incremented'/>
    <button onClick={handleClick}className='btn btn-primary ms-3'>Increment Amount</button>
</div>
</div>
 
   
  )
}

export default Counter