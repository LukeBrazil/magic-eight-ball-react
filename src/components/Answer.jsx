import React from "react";
import styled from 'styled-components';

const EightBallAnswer = styled.p`
    font-size: 1.5rem;
    font-weight: bold;

    .answerText {
        color: purple;
    }
`

const Answer = ({answer}) => {
  return (
      <EightBallAnswer>
          Magic EightBall Says: <span className="answerText">{answer}</span>
      </EightBallAnswer>
  )
};

export default Answer;
