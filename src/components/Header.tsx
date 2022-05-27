interface Props {
  score: number;
}

const Header: React.FC<Props> = ({score}) => {
  return (
    <header>
      <section className='header-box'>
        <ul className='rps-text'>
            <li>Rock</li>
            <li>Paper</li>
            <li>Scissors</li>
        </ul>

        <section className='score-box'>
            <span>Score</span>
            <h1 className='score-result'>{score}</h1>
        </section>
      </section>
    </header>
  )
}

export default Header