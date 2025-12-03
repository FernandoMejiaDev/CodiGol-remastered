// leagueData.js
import { createContext, useContext, useState } from "react";

const leagueData = createContext();
export const GameProvider = ({ children }) => {
  const [currentLevel, setCurrentLevel] = useState(1); // Current level (1 = first match)

  const [currentTeam, setCurrentTeam] = useState(null);
  const [playerGoals, setPlayerGoals] = useState(0);
  const [rivalGoals, setRivalGoals] = useState(2); 
  const [playerTeam, setPlayerTeam] = useState({
    name: "Wind Jaguars",
    logo: "/img/WindJaguars.webp",
  });
  const [rivalTeam] = useState({
    name: "Gem Rubies",
    logo: "/img/GemRubies.webp",
  });

  const nextLevel = () => setCurrentLevel((prev) => prev + 1);

  const updatePlayerGoals = () => setPlayerGoals((prev) => prev + 1);

  const [finalResult, setFinalResult] = useState(null); // 'win' | 'draw' | 'lose'

  const saveMatchResult = () => {
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
        playerGoals,
        rivalGoals,
        playerTeam,
        rivalTeam,
        updatePlayerGoals,
        saveMatchResult,
        finalResult,
      }}
    >
      {children}
    </leagueData.Provider>
  );
};

export const useGame = () => useContext(leagueData);
