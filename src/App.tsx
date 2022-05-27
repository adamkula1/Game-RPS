import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import PlayGround from './components/PlayGround'

const App: React.FC = () => {
  const [userChoice, setUserChoice] = useState<string>("");
  const [score, setScore] = useState<number>(0);

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