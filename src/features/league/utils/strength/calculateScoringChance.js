export const calculateScoringChance = (localTeam, visitorTeam) => {
  const localChance =
    (localTeam.attack * localTeam.strength) /
    (
      (localTeam.attack * localTeam.strength) +
      (visitorTeam.defense * visitorTeam.strength)
    );

  const visitorChance =
    (visitorTeam.attack * visitorTeam.strength) /
    (
      (visitorTeam.attack * visitorTeam.strength) +
      (localTeam.defense * localTeam.strength)
    );

  return {
    local: localChance,
    visitor: visitorChance,
  };
};

/*
calculate Possession Chance file

To calculate possession, each team has 3 properties of type number (strength, attack and defense)
To calculate, we divide the local attack by the sum of the local attack and the visiting defense.
localTeam.attack / (localTeam.attack + visitorTeam.defense)
And the opposite for the visiting team.
visitorTeam.attack / (visitorTeam.attack + localTeam.defense)
The result will give us the percentage of possession for each team

calculate Scoring Chance File

The probability of scoring refers to the likelihood that the team will create scoring opportunities.

The formula is (local attack * local strength) divided by (local attack * local strength) and the sum of (visiting defense * visiting strength)

Formula:
localTeam.attack * localTeam.Strength / (localTeam.attack * localTeam.Strength) + (localTeam.defense * visitorTeam.strength)

Reverse formula for the visiting team
*/