export const calculateGoalChance = (
  attackingTeam,
  defendingTeam
) => {
  return (
    (attackingTeam.attack + attackingTeam.strength) /
    (
      attackingTeam.attack +
      attackingTeam.strength +
      defendingTeam.defense
    )
  );
};

/*
calculate Goal Chance File
If he manages to get past the defense and the goalkeeper, there remains a chance for him to score.

calculating the local attack + the local strength divided 
by the local strength + the local strength + the local defense

localTeam.attack + localTeam.Strength / localTeam.attack + localTeam.Strength + visitorTeam.defense
*/