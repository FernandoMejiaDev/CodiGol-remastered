// leagueData.jsx
import { createContext, useContext, useState } from "react";

const leagueData = createContext();
export const GameProvider = ({ children }) => {
  const [currentLevel, setCurrentLevel] = useState(1); // Current level (1 = first match)

  const [currentTeam, setCurrentTeam] = useState(null);

  const [playerTeam, setPlayerTeam] = useState({
    name: "Wind Jaguars",
    logo: "/img/WindJaguars.webp",
  });
  const [rivalTeam] = useState({
    name: "Gem Rubies",
    logo: "/img/GemRubies.webp",
  });

  const nextLevel = () => setCurrentLevel((prev) => prev + 1);

  const [finalResult, setFinalResult] = useState(null); // 'win' | 'draw' | 'lose'

  const [lastMatch, setLastMatch] = useState(null);

  const saveMatchResult = (playerTeam, rivalTeam, playerGoals, rivalGoals) => {

     console.log("saveMatchResult", {
    playerTeam,
    rivalTeam,
    playerGoals,
    rivalGoals,
  });

    setLastMatch({
      playerTeam,
      rivalTeam,
      playerGoals,
      rivalGoals,
    });

    if (playerGoals > rivalGoals) {
      setFinalResult("win");
    } else if (playerGoals === rivalGoals) {
      setFinalResult("draw");
    } else {
      setFinalResult("lose");
    }
  };

  return (
    <leagueData.Provider
      value={{
        currentLevel,
        nextLevel,
        playerTeam,
        rivalTeam,
        saveMatchResult,
        finalResult,
        lastMatch,
      }}
    >
      {children}
    </leagueData.Provider>
  );
};

export const useGame = () => useContext(leagueData);