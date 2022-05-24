import React from 'react'

const Header = () => {
  return (
    <header>
        <ul className='rps-text'>
            <li>Rock</li>
            <li>Paper</li>
            <li>Scissors</li>
        </ul>

        <section className='score-box'>
            <span>Score</span>
            <h1 className='score-result'>0</h1>
        </section>
    </header>
  )
}

export default Header