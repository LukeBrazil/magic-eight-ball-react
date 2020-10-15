import React, { useState } from "react";
import Answer from './Answer';
import styled from 'styled-components';

const MagicEightBall = styled.div `
    background-color: black;
    border: 1px solid black;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin: 0 auto;
    margin-bottom: 30px;
    margin-top: 30px;
    content: '8';
  
`

const WhiteEightBall = styled.div `
    background-color: white;
    border: 1px solid white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin: 0 auto;
    margin-bottom: 30px;
    margin-top: 30px;
    content: '8';

  
`

const EightBall = (props) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const _handleChange = (question) => {
    setQuestion(question);
  };

  const _handleSubmit = async (event) => {
    event.preventDefault();
    const url = `https://8ball.delegator.com/magic/JSON/${question}`;
    const response = await fetch(url);
    const data = await response.json();
    setAnswer(data.magic.answer);
  };

  return (
    <>
      <MagicEightBall > <WhiteEightBall /> </MagicEightBall>
      <form onSubmit={(event) => _handleSubmit(event)}>
        <label>
          What is your question???
          <input
            type="text"
            value={question}
            onChange={(event) => _handleChange(event.target.value)}
          />
        </label>
        <button type="submit">Ask the Magic 8 Ball</button>
      </form>
      
      {!!question ? <p>Magic 8 Ball question: {question}</p> : null}
      {!!answer ? <Answer answer={answer} /> : null}
    </>
  );
};

export default EightBall;
