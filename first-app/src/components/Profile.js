import React from 'react'

export default function Profile(props) {
  return (
    <div>
      <h1>this is a profile page</h1>
  <h3>{props.name}</h3>
  <h3>{props.age}</h3>
  <h3>{props.mobile}</h3>
  <h3>{props.branch}</h3>
    </div>
  )
}
