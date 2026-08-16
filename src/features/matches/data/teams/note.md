Force system notation

To simulate the results of the other matches from the 1st to 3rd round, a force system will be created, with a file containing formula annotations and sequences.

calculate Match Result File

This file is responsible for simulating the match.
All matches have a total base of 20 chances which is divided between the possession of each one, corresponding to the percentage, the amount is assigned to each one

--
The equations are done between the home and visiting teams, explaining the formulas in the home team but they are the same for the visiting team, only reversing the parameters of the formulas.

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
localTeam.attack * localTeam.Strength / (localTeam.attack * localTeam.Strength) + (localTeam.defense X visitorTeam.strength)

Reverse formula for the visiting team

filters of the occasion

Possession filters are used because possession and scoring probability do not guarantee a goal, but rather the probability of scoring. The scoring probability involves calculating the probability of the defense stopping the ball, the probability of the goalkeeper making a save (the defense property is used to refer to the goalkeeper as well), and the scoring probability itself.

strength, attack and defense
          ↓
calculatePossessionChance
          ↓
number of occasions
          ↓
calculateScoringChance
          ↓
 ┌───────────────────────┐
 │ Filter 1: defense     │
 │ Filter 2: goalkeeper  │
 │ Filter 3: completion  │
 └───────────────────────┘
          ↓
calculateMatchResult
          ↓
       marker

Therefore, an initial scoring opportunity would have a cumulative probability of approximately 10-15%. That is, roughly 1 out of every 10 initial scoring opportunities would result in a goal if these three probabilities were applied, thus avoiding potentially high-scoring matches and ensuring that individual team statistics have a significant impact.

The filter is to prevent matches of teams that are played in the background from ending with a 50% probability of scoring goals; by passing through filters, their accumulated percentage decreases, resulting in more realistic matches.

calculate Defense Chance File

The first filter is with the defense, where to know the result the local attack is divided between the local attack + the visiting defense

localTeam.attack / (localTeam.attack + visitorTeam.defense)

calculate Goalkeeper Chance File

Using the same defense data as defenders and goalkeeper instead of the goalkeeper being a separate property, the local attack is calculated as the result of the away defense plus the away team's strength.

localTeam.attack / localTeam.attack + (visitorTeam.defense + visitorTeam.Strength)

calculate Goal Chance File
If he manages to get past the defense and the goalkeeper, there remains a chance for him to score.

calculating the local attack + the local strength divided by the local strength + the local strength + the local defense

localTeam.attack + localTeam.Strength / localTeam.attack + localTeam.Strength + visitorTeam.defense