import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import PlayGround from './components/PlayGround'

const App = () => {
  // const [myChoice, setMyChoice] = useState("");

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='playground' element={<PlayGround />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App