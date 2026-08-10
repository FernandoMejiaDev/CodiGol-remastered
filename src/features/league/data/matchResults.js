//Simulation of match data, to test data in the table
//For home teams, the first parameter (HomeId) is used, 
// and for away teams, the second (AwayId) is used; 
// the result is about the home team.

//For example, HomeId 3 is about the Tusk Elephants versus the Juggernaut Leopard, 
// with the Juggernaut Leopard being the winners, therefore the home team (Tusk Elephants) lost, 
// their result being "lose".

export const matchResults = [
  {
    HomeId: 3,
    AwayId: 4,
    result: "lose",
  },
  {
    HomeId: 5,
    AwayId: 6,
    result: "draw",
  },
  {
    HomeId: 7,
    AwayId: 8,
    result: "winner",
  },
  {
    HomeId: 9,
    AwayId: 10,
    result: "lose",
  },
  {
    HomeId: 11,
    AwayId: 12,
    result: "lose",
  },
];