import "./Assignment-5.css";
import { useState } from "react";
import PropTypes from "prop-types";


const Counter = ({ score, setScore }) => {
  return (
    <div className="counter">
      <button onClick={() => setScore(score + 1)} className="btn"> +1</button>
      <p>{score}</p>
    </div>
  );
};
Counter.propTypes = {
  score: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
};

const AllPlus1 = ({ incrementAll }) => {
  return (
    <button onClick={incrementAll} className="btn">
      All +1
    </button>
  );
};
AllPlus1.propTypes = {
  incrementAll: PropTypes.func.isRequired,
};

const AddCounter = ({ addCounter }) => {
  return (
    <button onClick={addCounter} className="btn">
      Add Counter
    </button>
  );
};
AddCounter.propTypes = {
  addCounter: PropTypes.func.isRequired,
};

const Wireframe = () => {
  const [scores, setScores] = useState([0]); 

  const incrementAll = () => {
    setScores(scores.map((score) => score + 1));
  };

  const addCounter = () => {
    setScores([...scores, 0]);
  };

  return (
    <div>
      <AllPlus1 incrementAll={incrementAll} />
      {scores.map((score, index) => (
        <Counter
          key={index}
          score={score}
          setScore={(newScore) => {
            const newScores = [...scores];
            newScores[index] = newScore;
            setScores(newScores);
          }}
        />
      ))}
      <AddCounter addCounter={addCounter} />
    </div>
  );
};

export default Wireframe;
