import React, { useState } from 'react'

export default function Assesment() {
    const [color,setStyle]=useState(
        {
            color:'red'
        }
    )
    const yellow =()=>{
        setStyle(
            {
            color:"yellow"
        }
    )

    }
        
  return (
    <div>
        <div style={color} id='style'>
            <p>Hello guys welcome to react </p>
        </div>
        <button  onClick={()=>setStyle({color:"blue"})}>blue</button>
        <button  onClick={()=>setStyle({color:"green"})}>green</button>
        <button  onClick={()=>setStyle({color:"black"})}>black</button>
        <button  onClick={()=>setStyle({color:"pink"})}>pink</button>
        <button onClick={yellow}>yellow</button>
    </div>
  )
}
