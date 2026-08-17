import { calculatePossessionChance } from "./calculatePossessionChance";
import { calculateDefenseChance } from "./calculateDefenseChance";
import { calculateGoalkeeperChance } from "./calculateGoalkeeperChance";
import { calculateGoalChance } from "./calculateGoalChance";
import { rollChance } from "./rollChance";

const BASE_OCCASIONS = 20;

export const calculateMatchResult = (localTeam, visitorTeam) => {
  const possession = calculatePossessionChance(
    localTeam,
    visitorTeam
  );

  const totalPossession =
    possession.local + possession.visitor;

  const localOccasions = Math.round(
    BASE_OCCASIONS *
    (possession.local / totalPossession)
  );

  const visitorOccasions =
    BASE_OCCASIONS - localOccasions;

  let localGoals = 0;
  let visitorGoals = 0;

  for (let i = 0; i < localOccasions; i++) {
    const passesDefense = rollChance(
      calculateDefenseChance(localTeam, visitorTeam)
    );

    if (!passesDefense) continue;

    const passesGoalkeeper = rollChance(
      calculateGoalkeeperChance(localTeam, visitorTeam)
    );

    if (!passesGoalkeeper) continue;

    const scores = rollChance(
      calculateGoalChance(localTeam, visitorTeam)
    );

    if (scores) {
      localGoals++;
    }
  }

  for (let i = 0; i < visitorOccasions; i++) {
    const passesDefense = rollChance(
      calculateDefenseChance(visitorTeam, localTeam)
    );

    if (!passesDefense) continue;

    const passesGoalkeeper = rollChance(
      calculateGoalkeeperChance(visitorTeam, localTeam)
    );

    if (!passesGoalkeeper) continue;

    const scores = rollChance(
      calculateGoalChance(visitorTeam, localTeam)
    );

    if (scores) {
      visitorGoals++;
    }
  }

  return {
    localGoals,
    visitorGoals,
    localOccasions,
    visitorOccasions,
  };
};