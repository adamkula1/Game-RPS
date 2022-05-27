import { Link } from 'react-router-dom';
import Triangle from "../assets/images/bg-triangle.svg";
import Footer from './Footer';
interface Props {
  setUserChoice: React.Dispatch<React.SetStateAction<string>>;
}

const Home: React.FC<Props> = ({setUserChoice}) => {

  return (
    <>
      <main>
          <section className='choice'>
              <img className='icon-triangle' src={Triangle} alt="Triangle" />
              <div onClick={() => setUserChoice("paper")} className='button-choice'><Link to="/playground" className='icon icon-paper'></Link></div>
              <div onClick={() => setUserChoice("scissors")} className='button-choice'><Link to="/playground" className='icon icon-scissors'></Link></div>
              <div onClick={() => setUserChoice("rock")} className='button-choice'><Link to="/playground" className='icon icon-rock'></Link></div>
          </section>
      </main>
      <Footer />
    </>
  )
}

export default Home