import React, { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import PlayGround from './components/PlayGround'

const App = () => {
  // const [myChoice, setMyChoice] = useState("");

  return (
    <>
      <Header />
      <Home />
      <PlayGround />
    </>
  )
}

export default App