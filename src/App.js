import React from 'react'
import Incrementclick from './components/Incrementclick'
import Incrementhover from './components/Incrementhover'
import './App.css'


const App = () => {
  return (
    <div className='pos'>
      <Incrementclick/>
      <Incrementhover/>
    </div>
  )
}

export default App
