export const calculatePossessionChance = (localTeam, visitorTeam) => {
  const localChance =
    localTeam.attack /
    (localTeam.attack + visitorTeam.defense);

  const visitorChance =
    visitorTeam.attack /
    (visitorTeam.attack + localTeam.defense);

  return {
    local: localChance,
    visitor: visitorChance,
  };
};

//To calculate possession, each team has 3 properties of type number (strength, attack and defense)
//To calculate, we divide the local attack by the sum of the local attack and the visiting defense.
//localTeam.attack / (localTeam.attack + visitorTeam.defense)
//And the opposite for the visiting team.
// visitorTeam.attack / (visitorTeam.attack + localTeam.defense)
//The result will give us the percentage of possession for each team