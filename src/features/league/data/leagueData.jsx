import { createContext, useContext, useState } from "react";

import { fixtures } from "@/features/league/data/fixtures";
import { teams } from "@/features/matches/data/teams";
import { simulateLeagueRound } from "@/features/league/utils/strength/simulateLeagueRound";

const leagueData = createContext();

export const GameProvider = ({ children }) => {
  const [currentLevel, setCurrentLevel] = useState(1);

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

  const [finalResult, setFinalResult] = useState(null);

  const [lastMatch, setLastMatch] = useState(null);

  const [leagueResults, setLeagueResults] = useState([]);

  const saveMatchResult = (
    playerTeam,
    rivalTeam,
    playerGoals,
    rivalGoals
  ) => {

    /*
    console.log("Saving match result:", {
      playerTeam,
      rivalTeam,
      playerGoals,
      rivalGoals
    });
    */

    const playerResult = {
      HomeId: playerTeam.id,
      AwayId: rivalTeam.id,
      goalsFor: playerGoals,
      goalsAgainst: rivalGoals,
      result:
        playerGoals > rivalGoals
          ? "winner"
          : playerGoals < rivalGoals
            ? "lose"
            : "draw",
    };

    setLastMatch({
      playerTeam,
      rivalTeam,
      playerGoals,
      rivalGoals,
    });

    const roundFixtures = fixtures[currentLevel];

    const results = simulateLeagueRound(
      roundFixtures,
      teams,
      playerResult
    );

    setLeagueResults(results);

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
        leagueResults,
      }}
    >
      {children}
    </leagueData.Provider>
  );
};

export const useGame = () => useContext(leagueData);