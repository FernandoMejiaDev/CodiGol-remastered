export const calculateTable = ( teams, matchResults) => {
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
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0,
      hasGoalData: false,
    };
  });

  matchResults.forEach(({ HomeId, AwayId, result, goalsFor, goalsAgainst }) => {
    const home = table[HomeId];
    const away = table[AwayId];

    if (!home || !away) return;

    if (result === "winner") {
      home.wins++;
      home.points += 3;
      away.losses++;
    } else if (result === "lose") {
      away.wins++;
      away.points += 3;
      home.losses++;
    } else if (result === "draw") {
      home.draws++;
      away.draws++;
      home.points += 1;
      away.points += 1;
    }

    if (typeof goalsFor === "number" && typeof goalsAgainst === "number") {
      home.goalsFor += goalsFor;
      home.goalsAgainst += goalsAgainst;

      away.goalsFor += goalsAgainst;
      away.goalsAgainst += goalsFor;

      home.hasGoalData = true;
      away.hasGoalData = true;
    }
  });

  Object.values(table).forEach((team) => {
    if (team.hasGoalData) {
      team.goalDifference = team.goalsFor - team.goalsAgainst;
    }
  });

  return table;
};
