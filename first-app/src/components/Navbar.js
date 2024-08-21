import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <div>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/login2'>Login2</Link>
        <Link to='/profile'>Profile</Link>

    </div>
    </>
  )
}