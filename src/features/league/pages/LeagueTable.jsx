//Points table (general progress)
import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { navigateToNextPhase } from "@/core/utils/navigateToNextPhase";
import { useUser } from "@clerk/clerk-react";
import { unlockNextPage } from "@/core/utils/routeGuard";
import ProtectedRoute from "@/features/auth/components/ProtectedRoute";
//import ModalSize from "@/ui/ModalSize";
import { useGame } from "@/features/league/data/leagueData";

import { calculateTable } from "@/features/league/utils/calculateTable";
import { buildMatchResults } from "@/features/league/utils/BuildMatchResults";
import { teams } from "@/features/matches/data/teams/index";
import { matchResults } from "@/features/league/data/matchResults";

const LeagueTable = () => {

  const { lastMatch } = useGame();

   const fullMatchResults = buildMatchResults(
    matchResults,
    teams,
    lastMatch
  );
  //console.log("FULL MATCH RESULTS:", fullMatchResults)

  const leagueTable = Object.values(calculateTable(teams, fullMatchResults)).sort(
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
    <div className="relative flex flex-col p-6 m-auto overflow-hidden text-white h-dvh">

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
                {team.hasGoalData ? team.goalsFor : "-"}
              </div>

              {/* GC */}
              <div className="text-center">
                {team.hasGoalData ? team.goalsAgainst : "-"}
              </div>

              {/* DG */}
              <div className="text-center">
                {team.hasGoalData ? team.goalDifference : "-"}
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
