import { useState } from "react";
import styled from "styled-components";

const RollDice = ({ currentDice, roleDice }) => {
  // const [currentDice, setCurrentDice] = useState(1);



  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`./assets/dice/dice_${currentDice}.png`} alt="" />
      </div>
      <p>Click on Dice to Roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  margin-top: 48px;

  .dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;
  }
`;
