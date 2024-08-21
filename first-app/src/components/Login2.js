import React, { useState } from 'react'

export default function Login2() {
  const [name,setName]=useState('')
  const [mail,setMail]=useState('')
  const [password,setPassword]=useState('')
  const [Rpassword,setRpassword]=useState('')
  const submitHandler=(e)=>{
    e.preventDefault()
    console.log(name,password,mail,Rpassword)
  }
  return (
   <>
     <h1>LOGIN</h1>
     <form onSubmit={submitHandler}>
  <input type='text' placeholder='enter your name' value={name} onChange={(e)=>setName(e.target.value)}/><br/>
  <input type='Email' placeholder='enter your mail' value={mail}  onChange={(e)=>setMail(e.target.value)}/><br/>
  <input type='password' placeholder='enter your password' value={password}  onChange={(e)=>setPassword(e.target.value)}/><br/>
  <input type='password' placeholder=' re-enter your password' value={Rpassword}  onChange={(e)=>setRpassword(e.target.value)}/><br/>
     <button type='submit'>Register</button>



     </form>
    




   </>
  )
}
