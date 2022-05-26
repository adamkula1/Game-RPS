import React from 'react'

const PlayGround = () => {
  return (
    <section className='game'>
        <div className='game-my'>
            <p>You Picked</p>
            <div className='icon icon-paper'></div>
        </div>

        <div className='game-result'>
            <p className='text-result'></p>
            <a className='play-again' href="/">Play Again</a>
        </div>

        <div className='game-pc'>
            <p>Opponent Picked</p>
            <div className='icon icon-paper'></div>
        </div>
    </section>
  )
}

export default PlayGround