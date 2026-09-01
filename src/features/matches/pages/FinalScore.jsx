import React, { useEffect } from "react";
//import { useUser } from "@clerk/clerk-react";
import ProtectedRoute from "@/features/auth/components/ProtectedRoute";
import { useGame } from "@/features/league/data/leagueData";
import { unlockNextPage } from "@/core/utils/routeGuard";
import { useNavigate } from "react-router-dom";
import { navigateToNextPhase } from "@/core/utils/navigateToNextPhase";

//import ModalSize from "@/ui/ModalSize";

const FinalScore = () => {

  const { lastMatch } = useGame();

  const navigate = useNavigate();
  
  useEffect(() => {
    unlockNextPage("/LeagueTable");
    const timeout = setTimeout(() => {
      navigateToNextPhase("FinalScore", navigate);
    }, 10000);

    return () => clearTimeout(timeout);
  }, [navigate]);
  

  return (
    <div className="relative w-full overflow-hidden h-dvh">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(/img/Background.webp)` }}
      ></div>

      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="flex flex-row h-full">

        {/* <ModalSize className="absolute" /> */}

        <div className="relative flex flex-col h-full p-4 m-auto text-center text-white ">
          <h1 className="text-6xl font-bold md:text-6xl drop-shadow-lg">
            Liga Full Stack
          </h1>

          <h1 className="mt-4 text-5xl font-bold md:text-6xl drop-shadow-lg">
            90:00
          </h1>

          <div className="grid grid-cols-3 m-auto max-w-[60rem]">
            <div className="flex flex-col items-center justify-center gap-2 text-white">
              <img
                src={lastMatch.playerTeam.logo}
                alt={lastMatch.playerTeam.name}
                className="object-contain w-80 h-80"
                loading="lazy"
              />
              <div className="w-full h-2 bg-white"></div>
              <h1 className="text-4xl font-bold text-center">
                {lastMatch.playerTeam.name}
              </h1>
            </div>

            <div className="flex flex-col items-center justify-center gap-2 text-white">
              <h1 className="font-bold text-center text-7xl">
                {lastMatch.playerGoals} - {lastMatch.rivalGoals}
              </h1>
            </div>

            <div className="flex flex-col items-center justify-center gap-2 text-white">
              <img
                src={lastMatch.rivalTeam.logo}
                alt={lastMatch.rivalTeam.Name}
                className="object-contain w-80 h-80"
                loading="lazy"
              />
              <div className="w-full h-2 bg-white"></div>
              <h1 className="text-4xl font-bold text-center">
                {lastMatch.rivalTeam.name}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalScore;
