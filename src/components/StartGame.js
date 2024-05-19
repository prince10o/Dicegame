import React from "react";
import styled from "styled-components";
import { Button } from "../styled/Button";

export const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="images/dices.png" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}> Play Now</Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  padding-right: 600px;
  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
