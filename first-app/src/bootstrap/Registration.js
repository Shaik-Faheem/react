import React from 'react'

export default function Registration() {
  return (
    <>
    <div className='container'>
        <center>
            <h1>Registration</h1>
        </center>
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"></input>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"checked></input>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <div>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Female
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label class="form-check-label" for="flexRadioDefault2">
    Male
  </label>
</div>
  </div>
  <button type="submit" class="btn btn-danger">Registration</button>
</form>
</div>
    </>
  )
}
