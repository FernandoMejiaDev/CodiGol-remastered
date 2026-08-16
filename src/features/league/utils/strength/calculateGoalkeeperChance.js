export const calculateGoalkeeperChance = (
  attackingTeam,
  defendingTeam
) => {
  return (
    attackingTeam.attack /
    (
      attackingTeam.attack +
      defendingTeam.defense +
      defendingTeam.strength
    )
  );
};

/*
calculate Goalkeeper Chance File

Using the same defense data as defenders and goalkeeper instead 
of the goalkeeper being a separate property, the local attack is calculated as 
the result of the away defense plus the away team's strength.

localTeam.attack / localTeam.attack + (visitorTeam.defense + visitorTeam.Strength)
*/