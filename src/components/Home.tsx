import React from 'react'
import Triangle from "../assets/images/bg-triangle.svg";
import Paper from "../assets/images/icon-paper.svg";

const Home = () => {
  return (
    <main>
        <section className='choice'>
            <img className='icon-triangle' src={Triangle} alt="Triangle" />
            <div className='icon icon-paper'></div>
            <div className='icon icon-scissors'></div>
            <div className='icon icon-rock'></div>
        </section>
    </main>
  )
}

export default Home