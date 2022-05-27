import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import PlayGround from './components/PlayGround'

const App = () => {
  const [userChoice, setUserChoice] = useState("");
  const [score, setScore] = useState(0);

  return (
    <>
      <Header score={score} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home setUserChoice={setUserChoice} />} />
          <Route path='playground' element={<PlayGround userChoice={userChoice} score={score} setScore={setScore} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App