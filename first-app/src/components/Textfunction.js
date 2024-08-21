import React, { useState } from 'react'
import './Text.css'
export default function Textfunction() {
    const [value,setValue]=useState('')
      
    // const changeText = (event) =>(
    //         setValue(event.target.value)
    //     )

        // function upper(){
        //     const sample=value.toUpperCase();
        //     setValue(sample)
        //  }
  //       const length=()=>{
  //           const l=value.split(' ').length
  //           console.log(l)
  //           setValue(l)
  //       }
  return (
    <>
    <div>
        <div className='text'>
        <textarea rows={6} cols={100} placeholder='Enter your text' value={value} onChange={(event)=>setValue(event.target.value)} />
        </div>
    </div>
    <div className='Button'>
    <button onClick={()=>setValue(value.toUpperCase())}>Upper case</button>
    <button onClick={()=>setValue(value.toLowerCase())}>Lower case</button>
    <button onClick={(()=>setValue(value.split(' ').length))}>Length</button>
    <button onClick={()=>setValue('')}>Clear</button>
    </div>
    </>
  )
}
