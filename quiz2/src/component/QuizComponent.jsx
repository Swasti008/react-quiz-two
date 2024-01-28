import React, { useState } from "react";
import { Component } from "react";
import Data from "./resources/quizQuestion.json";

export default class QuizComponent extends Component {
  constructor(props){
    super(props)
    this.state={
      question:0
    }
  }

  handlePrevious = () => {
    if (this.state.question > 0) {
      this.setState(previous =>({
        question:previous.question-1
      }))
    }
  };

  handleNext = () => {
    if (this.state.question < Data.length - 1) {
      this.setState(previous =>({
        question:previous.question+1
      }))
    }
  };

  handleQuit =()=>{
    return(alert("Are you sure you want to quit ?"))
  }
  render(){
  return (
    <div className="QuizComponent">
      <h1>Question</h1>
      <p>{this.state.question + 1} of {Data.length}</p>
      <h3>{Data[this.state.question].question}</h3>
      <div className="options">
        {Object.values(Data[this.state.question]).slice(1,5).map((option, index) => (
          <option key={index} className="choose">{option}</option>
        ))}
      </div>
      <div className="buttons">
        <button className="button1" onClick={this.handlePrevious}>Previous</button>
        <button className="button2" onClick={this.handleNext}>Next</button>
        <button className="button3" onClick={this.handleQuit}>Quit</button>
      </div>
    </div>
  );
  }
}
