export const buildMatchResults = (lastMatch) => {
  if (!lastMatch) {
    return [];
  }

  let result;

  if (lastMatch.playerGoals > lastMatch.rivalGoals) {
    result = "winner";
  } else if (lastMatch.playerGoals < lastMatch.rivalGoals) {
    result = "lose";
  } else {
    result = "draw";
  }

  return [
    {
      HomeId: lastMatch.playerTeam.id,
      AwayId: lastMatch.rivalTeam.id,
      result,
      goalsFor: lastMatch.playerGoals,
      goalsAgainst: lastMatch.rivalGoals,
    },
  ];
};