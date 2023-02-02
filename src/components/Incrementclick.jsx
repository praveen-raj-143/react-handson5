import React from 'react'
import { useState } from 'react';
const Incrementclick = () => {
    const [Counter, setCounter]=  useState(0);
    function increment(){
      setCounter(Counter+1);
    }
  return (
    <div>
      <div >
        {Counter}
      </div>
      <button onClick={increment}>increment</button>
      
    </div>
  )
}

export default Incrementclick
