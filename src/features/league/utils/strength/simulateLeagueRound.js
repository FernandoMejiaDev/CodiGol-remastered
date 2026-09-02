import { calculateMatchResult } from "@/features/league/utils/strength/calculateMatchResult";

export const simulateLeagueRound = (fixtures, teams, playerResult) => {
  const results = [];

  fixtures.forEach((match) => {
    const homeTeam = teams.find((team) => team.id === match.homeId);

    const visitorTeam = teams.find((team) => team.id === match.awayId);

    const isPlayerMatch = homeTeam.isPlayer || visitorTeam.isPlayer;

    if (isPlayerMatch) {
      results.push({
        ...playerResult,
        HomeId: homeTeam.id,
        AwayId: visitorTeam.id,
      });

      return;
    }

    const result = calculateMatchResult(homeTeam, visitorTeam);

    results.push({
      HomeId: homeTeam.id,
      AwayId: visitorTeam.id,
      goalsFor: result.localGoals,
      goalsAgainst: result.visitorGoals,
      result:
        result.localGoals > result.visitorGoals
          ? "winner"
          : result.localGoals < result.visitorGoals
            ? "lose"
            : "draw",
    });
  });

  return results;
};
