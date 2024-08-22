import { useEffect, useState } from "react";
import "./guess.css";
const GuessGame = () => {
  const [msgTried, setMsgTried] = useState("Try To Guess the Number");
  const [stateNumberGuess, setStateNumberGuess] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [win, setWin] = useState(false);
  const [count, setCount] = useState(0);
  // Initialize Random Number between 1 and 100  and using by state to prevent Initialize new random number when component rerender
  const [number] = useState(Math.floor(Math.random() * 100) + 1);

  // To Print One Time and if you want to win check console 😂
  useEffect(() => {
    console.log(number);
  }, [number]);

  const handleGuess = (e) => {
    e.preventDefault();
    setCount((prev) => prev + 1);
    if (+inputNumber > number) {
      setMsgTried(`You tried ${count + 1} times`);
      setStateNumberGuess("high");
    } else if (+inputNumber < number) {
      setMsgTried(`You tried ${count + 1} times`);
      setStateNumberGuess("low");
    } else {
      setMsgTried("Congratulations! You guessed it.");
      setWin(true);
    }
    if (count + 1 === 6) {
      setMsgTried(
        `Sorry! You've tried too many times. The number was: ${number}`
      );
    }
  };
  return (
    <div className="box bg-warning  mx-auto my-4">
      <h2>Guess the Number Game</h2>
      <p className="my-3 fw-bold">{msgTried}</p>
      {win || count === 6 ? null : (
        <>
          {count > 0 ? <p>Too {stateNumberGuess}! Try again.</p> : null}
          <form
            className="d-flex justify-content-center align-items-center"
            onSubmit={handleGuess}
          >
            <span>Guess the number between 1 and 100:</span>
            <input
              type="number"
              value={inputNumber}
              onChange={(e) => {
                setInputNumber(e.target.value);
              }}
              className="form-control w-25 mx-2"
            />
            <button className="btn btn-secondary mx-2">Submit</button>
          </form>
        </>
      )}
    </div>
  );
};

export default GuessGame;
