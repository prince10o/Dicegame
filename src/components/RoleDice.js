import styled from "styled-components";

export const RoleDice = ({ roleDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`images/Dice/dice_${currentDice}.png`} alt="dice 1"></img>
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

const DiceContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 24px;
  }

  .dice {
    cursor: pointer;
  }
`;
