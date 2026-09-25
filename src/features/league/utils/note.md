# ### Sistema de fuerzas

Para simular los resultados de los partidos que no disputan directamente los **Wind Jaguars**, se desarrolló un **sistema de fuerzas** encargado de generar los encuentros de las demás jornadas y añadir sus resultados a la clasificación de la liga.

En **CódiGol (versión original)**, estos resultados estaban definidos de manera predeterminada. Esto significaba que los marcadores de los demás equipos debían establecerse previamente dentro de los datos del proyecto. Aunque este enfoque era suficiente para una demo pequeña, no resultaba práctico a medida que aumentaba la cantidad de jornadas y enfrentamientos.

La remasterización reemplaza este sistema predeterminado por una **simulación dinámica**, lo que permite generar los resultados automáticamente sin tener que definir manualmente cada combinación de partidos.

Este cambio también mejora la escalabilidad del sistema. La **Full Stack League** está formada por 16 equipos y, en una temporada de ida y vuelta, puede llegar a tener hasta 30 jornadas. Definir manualmente los resultados de cada enfrentamiento implicaría crear y mantener una gran cantidad de combinaciones entre equipos, haciendo que los datos fueran cada vez más difíciles de gestionar.

En su lugar, cada equipo dispone de un archivo dentro de:

`src/features/matches/data/teams`

En estos archivos se encuentran, entre otros datos, tres propiedades utilizadas por el sistema de fuerzas:

- **Strength:** representa la fuerza general del equipo.
- **Attack:** representa su capacidad ofensiva.
- **Defense:** representa su capacidad defensiva.

A partir de estos tres valores se realizan los cálculos necesarios para determinar las probabilidades de los posibles resultados de un encuentro.

El sistema está diseñado para que las características de los equipos influyan en el resultado sin convertirlas en un resultado determinista. Es decir, un equipo con mejores valores puede tener una mayor probabilidad de ganar, pero **no tiene garantizada la victoria**. También existe la posibilidad de que pierda o empate.

De esta manera, los partidos simulados mantienen una cierta variabilidad y la clasificación puede cambiar entre jornadas, mientras que las características de cada equipo siguen teniendo un impacto real sobre sus probabilidades de obtener un resultado favorable.

El objetivo no es simplemente asignar un ganador según cuál equipo tenga los valores más altos, sino utilizar esos datos como base para **simular un encuentro con resultados variables**, evitando que los partidos secundarios de la liga sean completamente predecibles.

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
