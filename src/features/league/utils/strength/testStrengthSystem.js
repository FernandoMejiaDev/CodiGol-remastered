import { useEffect, useRef} from "react";
import TuskElephants from "@/features/matches/data/teams/tusk_elephants";
import PhantomViper from "@/features/matches/data/teams/phantom_viper";
import CodeSharks from "@/features/matches/data/teams/code_sharks";
import KnightCoders from "@/features/matches/data/teams/knight_coders";

import { calculateMatchResult } from "@/features/league/utils/strength/calculateMatchResult";

const TestStrengthSystem = () => {

  const hasRun = useRef(false);

  useEffect(() => {

     if (hasRun.current) return;

    hasRun.current = true;

    const simulateMatches = (
      localTeam,
      visitorTeam,
      //100 matches to analyze the result and see the correct 
      // functioning of the equations
      numberOfMatches = 100 
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
      PhantomViper,
      TuskElephants
    );

    console.log("PHANTOM VIPER VS TUSK ELEPHANTS");
    console.log(result);

    simulateMatches(
      PhantomViper,
      TuskElephants,
      100
    );

    const result2 = calculateMatchResult(
      CodeSharks,
      KnightCoders
    );

    console.log("CODE SHARKS VS KNIGHT CODERS");
    console.log(result2);

    simulateMatches(
      CodeSharks,
      KnightCoders,
      100
    );

  }, []);

  return null;
};

export default TestStrengthSystem;