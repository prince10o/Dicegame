import { TotalScore } from "./TotalScore";
import { NumberSelector } from "./NumberSelector";
import styled from "styled-components";
import { RoleDice } from "./RoleDice";
import { useState } from "react";
import { Button } from "../styled/Button";
import { OutlineButton } from "../styled/Button";
import { Rules } from "./Rules";

export const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [SelectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!SelectedNumber) {
      setError("You have not slected any number");
      return;
    }
    setError("");
    const randomNumder = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumder);

    if (SelectedNumber === randomNumder) {
      setScore((prev) => prev + randomNumder);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContanier>
      <div className="top-section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          SelectedNumber={SelectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btn">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show Rules"}
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContanier>
  );
};

const MainContanier = styled.main`
  padding-top: 60px;
  .top-section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  .btn {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
`;
