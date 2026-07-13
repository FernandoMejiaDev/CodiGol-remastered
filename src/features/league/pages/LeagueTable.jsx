//Points table (general progress)
import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { navigateToNextPhase } from "@/core/utils/navigateToNextPhase";
import { useUser } from "@clerk/clerk-react";
import { unlockNextPage } from "@/core/utils/routeGuard";
import ProtectedRoute from "@/features/auth/components/ProtectedRoute";
import DialogueBox from "@/ui/DialogueBox";
import ModalSize from "@/ui/ModalSize";
import { useGame } from "@/features/league/data/leagueData";

export const teams = [
  { id: 1, name: "Wind Jaguars", logo: "/img/Wind_Jaguars.webp" },
  { id: 2, name: "Gem Rubies", logo: "/img/Gem_Rubies.webp" },
  { id: 3, name: "Tusk Elephants", logo: "/img/Tusk_Elephants.webp" },
  { id: 4, name: "Juggernaut Leopard", logo: "/img/Juggernaut_Leopards.webp" },
  { id: 5, name: "Code Sharks", logo: "/img/Code_Sharks.webp" },
  { id: 6, name: "Soar Swifts", logo: "/img/Soar_Swifts.webp" },
  { id: 7, name: "Knight Coders", logo: "/img/Knight_Coders.webp" },
  { id: 8, name: "Byte Gophers", logo: "/img/Byte_Gophers.webp" },
  { id: 9, name: "Style Chameleons", logo: "/img/Style_Chameleons.webp" },
  { id: 10, name: "Phantom Viper", logo: "/img/Phantom_Viper.webp" },
  { id: 11, name: "Forge Minotaurs", logo: "/img/Forge_Minotaurs.webp" },
  { id: 12, name: "Web Hawks", logo: "/img/Web_Hawks.webp" },

];

//For home teams, the first parameter (HomeId) is used, 
// and for away teams, the second (AwayId) is used; 
// the result is about the home team.

//For example, HomeId 3 is about the Tusk Elephants versus the Juggernaut Leopard, 
// with the Juggernaut Leopard being the winners, therefore the home team (Tusk Elephants) lost, 
// their result being "lose".

export const matchResults = [
  { HomeId: 3, AwayId: 4, result: "lose" },
  { HomeId: 5, AwayId: 6, result: "draw" },
  { HomeId: 7, AwayId: 8, result: "winner" },
  { HomeId: 9, AwayId: 10, result: "lose" },
  { HomeId: 11, AwayId: 12, result: "lose" },

];

const LeagueTable = () => {
  const { finalResult } = useGame();

  let fullMatchResults = [...matchResults];

  if (finalResult) {
    const player = teams.find((team) => team.name === "Wind Jaguars");
    const rival = teams.find((team) => team.name === "Gem Rubies");

    let result;
    if (finalResult === "win") result = "winner";
    else if (finalResult === "lose") result = "lose";
    else result = "draw";

    fullMatchResults.push({
      HomeId: player.id,
      AwayId: rival.id,
      result,
    });
  }

  const calculateTable = (matchResults) => {
    const table = {};

    teams.forEach((team) => {
      table[team.id] = {
        id: team.id,
        name: team.name,
        logo: team.logo,
        wins: 0,
        draws: 0,
        losses: 0,
        points: 0,
        goalsFor: "-",
        goalsAgainst: "-",
        goalDifference: "-",
      };
    });

    matchResults.forEach(({ HomeId, AwayId, result }) => {
      const winner = table[HomeId];
      const lose = table[AwayId];

      if (result === "winner") {
        winner.wins++;
        winner.points += 3;
        lose.losses++;
      } else if (result === "lose") {
        lose.wins++;
        lose.points += 3;
        winner.losses++;
      } else if (result === "draw") {
        winner.draws++;
        lose.draws++;
        winner.points += 1;
        lose.points += 1;
      }
    });

    return table;
  };

  const leagueTable = Object.values(calculateTable(fullMatchResults)).sort(
    (a, b) => b.points - a.points
  );

  /*
  const navigate = useNavigate();

  useEffect(() => {
    //unlockNextPage("/FinalScene");

    const timeout = setTimeout(() => {
      navigateToNextPhase("LeagueTable", navigate);
    }, 20000);
    
    return () => clearTimeout(timeout);
  }, [navigate]);
    */

  return (
    <div className="relative overflow-hidden flex flex-col p-6 m-auto text-white h-dvh">

      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(/img/Background.webp)` }}
      ></div>

      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative flex flex-col justify-center h-full m-auto max-w-7xl">

        <h1 className="mb-6 text-4xl font-bold text-center text-white drop-shadow-lg">
          Tabla de Resultados
        </h1>

        <div
          className="
      grid
      grid-cols-[60px_2.5fr_repeat(8,70px)]
      items-center
      gap-2
      p-3
      font-bold
      bg-neutral-950/70
      rounded-t-2xl
    "
        >
          <div className="text-center">Pos</div>
          <div>Equipo</div>

          <div className="text-center">PJ</div>
          <div className="text-center">G</div>
          <div className="text-center">E</div>
          <div className="text-center">P</div>

          <div className="text-center">GF</div>
          <div className="text-center">GC</div>
          <div className="text-center">DG</div>

          <div className="text-center">Pts</div>
        </div>

        <div className="max-h-[40rem] overflow-y-auto">


          {leagueTable.map((team, index) => (
            <div
              key={team.id}
              className={`
        grid
        grid-cols-[60px_2.5fr_repeat(8,70px)]
        items-center
        gap-2
        p-3
        transition
        bg-neutral-950/60

                ${index === 0
                  ? "bg-cyan-800/60 border-l-4 border-cyan-600"
                  : index === leagueTable.length - 1
                    ? "bg-red-800/60 border-l-4 border-red-600"
                    : ""
                }

        hover:bg-neutral-950/80

        ${index === leagueTable.length - 1
                  ? "rounded-b-2xl"
                  : ""
                }
      `}
            >

              {/* Table position */}
              <div
                className={"text-center font-bold"}
              >
                {index + 1}
              </div>

              <div className="flex items-center">
                <img
                  src={team.logo}
                  alt={team.name}
                  className="object-contain w-10 h-10 mr-3"
                  loading="lazy"
                />

                <span className="font-medium">
                  {team.name}
                </span>
              </div>

              {/* PJ */}
              <div className="text-center">
                {team.wins + team.draws + team.losses}
              </div>

              {/* G */}
              <div className="text-center">
                {team.wins}
              </div>

              {/* E */}
              <div className="text-center">
                {team.draws}
              </div>

              {/* P */}
              <div className="text-center">
                {team.losses}
              </div>

              {/* GF */}
              <div className="text-center">
                {team.goalsFor}
              </div>

              {/* GC */}
              <div className="text-center">
                {team.goalsAgainst}
              </div>

              {/* DG */}
              <div className="text-center">
                {team.goalDifference}
              </div>

              {/* points */}
              <div className="text-xl font-bold text-center ">
                {team.points}
              </div>

            </div>

          ))}
        </div>
      </div>

    </div>
  );
};

export default LeagueTable;
