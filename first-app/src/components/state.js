import React, { useState } from 'react'

export default function State() {
    const [count,setcount]=useState(0)
    const increase=()=>{
         setcount(count+1);
    }
  return (
    <div>
        <p>The valus of count is {count} </p>
        <button onClick={increase}>Click</button>
    </div>
  )
}