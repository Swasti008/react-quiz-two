import React, { useState } from "react";
import Data from "./resources/quizQuestion.json";

export default function QuizComponent() {
  const [question, setQuestion] = useState(0);

  const handlePrevious = () => {
    if (question > 0) {
      setQuestion((prev)=>prev-1);
    }
  };

  const handleNext = () => {
    if (question < Data.length - 1) {
      setQuestion((prev)=>prev+1);
    }
  };
  const handleQuit =()=>{
    return(alert("Are you sure you want to quit ?"))
  }

  return (
    <div className="QuizComponent">
      <h1>Question</h1>
      <p>{question + 1} of {Data.length}</p>
      <h3>{Data[question].question}</h3>
      <div className="options">
        {Object.values(Data[question]).slice(1,5).map((option, index) => (
          <option key={index} className="choose">{option}</option>
        ))}
      </div>
      <div className="buttons">
        <button className="button1" onClick={handlePrevious}>Previous</button>
        <button className="button2" onClick={handleNext}>Next</button>
        <button className="button3" onClick={handleQuit}>Quit</button>
      </div>
    </div>
  );
}
