import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
interface Props {
  userChoice: string,
  score: number,
  setScore: React.Dispatch<React.SetStateAction<number>>,
}

const PlayGround: React.FC<Props> = ({userChoice, score, setScore}) => {
  const [computerChoice, setComputerChoice] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [counter, setCounter] = useState<number>(3);

  const newOponentPicked = () => {
    const choices: string[] = ["rock", "paper", "scissors"];
    setComputerChoice(choices[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    newOponentPicked();
    Result();
  }, []);

  const Result = () => {
    if (userChoice === "rock" && computerChoice === "scissors") {
      setResult("win");
      setScore(score + 1);
    } else if (userChoice === "rock" && computerChoice === "paper") {
      setResult("lose");
      setScore(score - 1);
    } else if (userChoice === "scissors" && computerChoice === "paper") {
      setResult("win");
      setScore(score + 1);
    } else if (userChoice === "scissors" && computerChoice === "rock") {
      setResult("lose");
      setScore(score - 1);
    } else if (userChoice === "paper" && computerChoice === "rock") {
      setResult("win");
      setScore(score + 1);
    } else if (userChoice === "paper" && computerChoice === "scissors") {
      setResult("lose");
      setScore(score - 1);
    } else {
      setResult("draw");
    }
  };

  useEffect(() => {
    const timer: any =
      counter > 0
        ? setInterval(() => {
            setCounter(counter - 1);
          }, 1000)
        : Result();

    return () => {
      clearInterval(timer);
    };
  }, [counter, computerChoice]);

  return (
    <section className='game'>
        <div className='game-user'>
            <p className='text-side'>You Picked</p>
            <div
              className={`icon icon-${userChoice} ${result === "win" ? `icon--${userChoice}--winner` : ""}`}>
            </div>
        </div>

        <div className='game-result'>
            <p className='text-result'>{counter === 0 ? result : null}</p>
            <Link to="/" className='play-again'>Play Again</Link>
        </div>

        <div className='game-pc'>
            <p className='text-side'>Opponent Picked</p>
            {counter === 0 ? (
            <div
              className={`icon icon-${computerChoice} ${result === "lose" ? `icon--${computerChoice}--winner` : ""}`}>
            </div>
            ) : (
              <div className="counter">{counter}</div>
            )}
        </div>
    </section>
  )
}

export default PlayGround