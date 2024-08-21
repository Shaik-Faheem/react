import React, { useState } from "react";

export default function Cart() {
  const [count, setcount] = useState(0)
  const increase=()=>{
    setcount(count+1);
  }
  const decrease=()=>{
    setcount(count-1);
  }
  return (
    <>
      <button onClick={increase}>+</button>
      <p> {count} </p>
      <button onClick={decrease}>-</button>
    </>
  )
}
