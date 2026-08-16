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

