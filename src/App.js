import { useState } from "react";
import { StartGame } from "./components/StartGame";
import { GamePlay } from "./components/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarteds] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarteds((prev) => !prev);
  };

  return (
    <>{isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
}

export default App;
