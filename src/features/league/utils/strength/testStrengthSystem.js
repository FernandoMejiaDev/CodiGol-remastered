import { useEffect, useRef} from "react";
import TuskElephants from "@/features/matches/data/teams/tusk_elephants";
import JuggernautLeopard from "@/features/matches/data/teams/juggernaut_leopard";

import CodeSharks from "@/features/matches/data/teams/code_sharks";
import SoarSwifts from "@/features/matches/data/teams/soar_swifts";

import KnightCoders from "@/features/matches/data/teams/knight_coders";
import ByteGophers from "@/features/matches/data/teams/byte_gophers";

import StyleChameleons from "@/features/matches/data/teams/style_chameleons";
import PhantomViper from "@/features/matches/data/teams/phantom_viper";

import ForgeMinotaurs from "@/features/matches/data/teams/forge_minotaurs";
import WebHawks from "@/features/matches/data/teams/web_hawks";

import { calculateMatchResult } from "@/features/league/utils/strength/calculateMatchResult";

const TestStrengthSystem = () => {

  const hasRun = useRef(false);

  useEffect(() => {

     if (hasRun.current) return;

    hasRun.current = true;

    const simulateMatches = (
      localTeam,
      visitorTeam,
      //1,000 matches to analyze the result and see the correct 
      // functioning of the equations
      numberOfMatches = 1000
    ) => {

      let localWins = 0;
      let draws = 0;
      let visitorWins = 0;

      let totalLocalGoals = 0;
      let totalVisitorGoals = 0;

      for (let i = 0; i < numberOfMatches; i++) {

        const result = calculateMatchResult(
          localTeam,
          visitorTeam
        );

        totalLocalGoals += result.localGoals;
        totalVisitorGoals += result.visitorGoals;

        if (result.localGoals > result.visitorGoals) {
          localWins++;
        } else if (result.localGoals < result.visitorGoals) {
          visitorWins++;
        } else {
          draws++;
        }
      }

      console.log("===");

      console.log(
        `${localTeam.name} VS ${visitorTeam.name}`
      );

      console.log("Partidos:", numberOfMatches);
      console.log("Victorias local:", localWins);
      console.log("Empates:", draws);
      console.log("Victorias visitante:", visitorWins);

      console.log(
        "Promedio goles local:",
        totalLocalGoals / numberOfMatches
      );

      console.log(
        "Promedio goles visitante:",
        totalVisitorGoals / numberOfMatches
      );
    };

    const result = calculateMatchResult(
      TuskElephants,
      JuggernautLeopard,
    );

    console.log("TUSK ELEPHANTS VS JuggernautLeopard");
    console.log(result);

    simulateMatches(
      TuskElephants,
      JuggernautLeopard,
    );

    const result2 = calculateMatchResult(
      CodeSharks,
      SoarSwifts
    );

    console.log("CODE SHARKS VS SOAR SWIFTS");
    console.log(result2);

    simulateMatches(
      CodeSharks,
      SoarSwifts,
      
    );

    const result3 = calculateMatchResult(
      KnightCoders,
      ByteGophers
    );

    console.log("KnightCoders VS ByteGophers");
    console.log(result3);

    simulateMatches(
      KnightCoders,
      ByteGophers
      
    );

    const result4 = calculateMatchResult(
      StyleChameleons,
      PhantomViper
    );

    console.log("StyleChameleons VS PhantomViper");
    console.log(result4);

    simulateMatches(
      StyleChameleons,
      PhantomViper
    );

    const result5 = calculateMatchResult(
      ForgeMinotaurs,
      WebHawks
    );

    console.log("ForgeMinotaurs VS WebHawks");
    console.log(result5);

    simulateMatches(
      ForgeMinotaurs,
      WebHawks
    );

  }, []);

  return null;
};

export default TestStrengthSystem;