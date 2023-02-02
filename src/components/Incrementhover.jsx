import React from 'react'
import { useState } from 'react'

const Incrementhover = () => {
    const [Message, setMessage] =useState(0);
    function increment() {
        setMessage(Message+1);
    }
  return (
    <div>
      <div>
        {Message}
        <p onMouseOver={increment} >increment on hover</p>
      </div>
      
    </div>
  )
}

export default Incrementhover
