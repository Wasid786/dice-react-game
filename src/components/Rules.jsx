import React from 'react'
import styled from 'styled-components';

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game </h2>
      <div className="text">
       <p>Select any Number </p>
       <p>Click on dice image </p>
       <p>
        after click on dice if slected number is equal to dice number you will get same  points as dice{" "},
       </p>
       <p>if you get wrong guess then 2 point will be deducted </p>
      
      </div>
    </RulesContainer>
  )
}

export default Rules;

const RulesContainer = styled.div`
    background-color: rgb(200, 241, 238);
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 20px;
    h2{
        font-size: 24px;
    }
    .text{
        margin-top: 24px;
    }
`;