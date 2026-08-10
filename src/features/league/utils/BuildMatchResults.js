export const buildMatchResults = (matchResults, teams, lastMatch) => {
  const fullMatchResults = [...matchResults];

  if (!lastMatch) {
    return fullMatchResults;
  }

  const player = teams.find((team) => team.name === lastMatch.playerTeam.name);

  const rival = teams.find((team) => team.name === lastMatch.rivalTeam.name);

  if (!player || !rival) {
    return fullMatchResults;
  }

  let result;

  if (lastMatch.playerGoals > lastMatch.rivalGoals) {
    result = "winner";
  } else if (lastMatch.playerGoals < lastMatch.rivalGoals) {
    result = "lose";
  } else {
    result = "draw";
  }

  fullMatchResults.push({
    HomeId: player.id,
    AwayId: rival.id,
    result,
    goalsFor: lastMatch.playerGoals,
    goalsAgainst: lastMatch.rivalGoals,
  });

  return fullMatchResults;
};
