import React, { useState } from 'react'
import "./Login.css"

export default function Login() {
   const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')
    const submitHandler =(e)=>{
      e.preventDefualt();
      console.log(email,password)
    }
  return (
    <>
    <div className='container'>
        <center>
            <h1>Login</h1>
        </center>
    <form onSubmit={submitHandler}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="example1InputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)}/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-danger">Login</button>
</form>
</div>
    </>
  )
}
