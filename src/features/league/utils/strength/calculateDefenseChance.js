export const calculateDefenseChance = (attackingTeam, defendingTeam) => {
  return (
    attackingTeam.attack /
    (attackingTeam.attack + defendingTeam.defense)
  );
};

/*
calculate Defense Chance File

The first filter is with the defense, where to know the result the local attack 
is divided between the local attack + the visiting defense

localTeam.attack / (localTeam.attack + visitorTeam.defense)

*/