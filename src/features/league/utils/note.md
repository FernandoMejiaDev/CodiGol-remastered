# Sistema de fuerzas

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

## Funcionamiento del sistema de fuerzas

El sistema de fuerzas está dividido en varias funciones independientes, cada una encargada de una parte específica de la simulación. En lugar de concentrar toda la lógica en una única función, el proceso se divide en diferentes etapas que se conectan entre sí.

Esta separación permite modificar, probar o ampliar una parte del sistema sin tener que intervenir directamente en toda la lógica de simulación.

La secuencia principal del sistema es la siguiente:

  ```
Equipo local                         Equipo visitante
     │                                      │
     └──── Strength / Attack / Defense ────┘
                       ↓
         calculatePossessionChance
                       ↓
              Número de ocasiones
                       ↓
           calculateScoringChance
                       ↓
              Filtros de ocasión
              ┌─────────────────┐
              │ Defense         │
              │ Goalkeeper      │
              │ Completion      │
              └─────────────────┘
                       ↓
             calculateMatchResult
                       ↓
                    Marcador
  ```

Las funciones que participan en este proceso se encuentran dentro de:
`src/features/league/utils/strength/`

  ```
src/
└── features/             
     └── league/              
         ├── data/
         │   ├── fixtures.js
         │   ├── leagueData.jsx 
         │   └── matchResults.js 
         ├── pages/
         │   └── LeagueTable.jsx
         └── utils/
             ├── strength/
             │   ├── calculateDefenseChance.js
             │   ├── calculateGoalChance.js
             │   ├── calculateGoalkeeperChance.js
             │   ├── calculateMatchResult.js
             │   ├── calculatePossessionChance.js
             │   ├── calculateScoringChance.js
             │   ├── rollChance.js
             │   ├── simulateLeagueRound.js
             │   └── testStrengthSystem.js
             ├── BuildMacthResult.jsx
             ├── calculateTable.jsx
             └── note.md 
  ```

Cada archivo tiene una responsabilidad concreta:

- **calculatePossessionChance.js:** calcula la probabilidad de posesión de cada equipo.
- **calculateScoringChance.js:** calcula la probabilidad de que un equipo genere una ocasión de gol.
- **calculateDefenseChance.js:** calcula la probabilidad de que la defensa detenga una ocasión.
- **calculateGoalkeeperChance.js:** calcula la probabilidad de que el portero detenga el disparo.
- **calculateGoalChance.js:** determina la posibilidad final de que la ocasión termine en gol después de superar los filtros anteriores.
- **calculateMatchResult.js:** coordina los cálculos anteriores para simular el desarrollo del partido.
- **rollChance.js:** convierte una probabilidad numérica en un resultado aleatorio de éxito o fracaso.
- **simulateLeagueRound.js:** toma los partidos de una jornada y simula únicamente aquellos que no corresponden al encuentro que disputa el jugador.
- **testStrengthSystem.js:** permite ejecutar simulaciones desde consola para comprobar el comportamiento del sistema, incluyendo pruebas repetidas de un mismo encuentro.
- **BuildMacthResult.jsx:** construye los resultados que serán utilizados por la interfaz del partido.
- **calculateTable.jsx:** utiliza los resultados de los encuentros para calcular la clasificación de la liga.

## 1. Cálculo de la posesión

El primer paso de la simulación consiste en determinar cómo se distribuye la posesión entre ambos equipos.

Para realizar este cálculo, cada equipo utiliza sus valores de Attack y Defense. En el caso del equipo local, se compara su capacidad ofensiva con la defensa del rival:

  ```
localTeam.attack / (localTeam.attack + visitorTeam.defense)
  ```

Para el equipo visitante se realiza el cálculo inverso:

  ```
visitorTeam.attack / (visitorTeam.attack + localTeam.defense)
  ```

El resultado representa la proporción de posesión que tendrá cada equipo durante el encuentro.

A partir de esta proporción se establece una cantidad predeterminada de **20 ocasiones de juego** que serán distribuidas entre ambos equipos según la posesión calculada.

Por ejemplo, una distribución aproximada podría resultar en **12 ocasiones para un equipo y 8 para el otro**. Esto representa que uno de los equipos tuvo un mayor dominio del encuentro, pero tener más posesión no garantiza ganar el partido.

La posesión únicamente determina cómo se distribuyen las oportunidades de generar jugadas. El resultado final dependerá de las siguientes etapas de la simulación.

## 2. Cálculo de la probabilidad de generar una ocasión

Una vez distribuido el número de ocasiones, el sistema calcula qué tan probable es que cada una de ellas se convierta en una **ocasión de gol**.

Para ello se utilizan nuevamente las características de ambos equipos. En el caso del equipo local, se combinan su capacidad ofensiva y su fuerza general con la capacidad defensiva y la fuerza del rival.

Conceptualmente, el cálculo compara:

  ```
localTeam.attack × localTeam.Strength
  ```

frente a:

  ```
visitorTeam.defense × visitorTeam.Strength
  ```

De esta manera, un equipo con mejores características ofensivas tiene una mayor probabilidad de generar ocasiones, mientras que las características defensivas del rival influyen en esa posibilidad.

El cálculo se realiza de forma equivalente para el equipo visitante, invirtiendo los parámetros correspondientes.

Es importante distinguir esta probabilidad de una probabilidad de gol. **Generar una ocasión no significa marcar automáticamente**. Si todas las ocasiones pudieran convertirse directamente en goles según este porcentaje, los resultados serían demasiado elevados para representar un partido de fútbol de forma razonable.

Por esta razón, el sistema incorpora varias etapas adicionales que actúan como filtros.

## 3. Filtros de las ocasiones

Después de determinar la probabilidad de generar una ocasión, cada jugada pasa por diferentes filtros antes de poder convertirse en gol.

Estos filtros representan de forma simplificada algunos de los obstáculos que existen entre generar una ocasión y conseguir una anotación.

  ```
Ocasión generada
       ↓
¿La defensa permite continuar la jugada?
       ↓
¿El portero consigue detener el disparo?
       ↓
¿La ocasión termina en gol?
       ↓
Gol / No gol
  ```

El sistema utiliza tres cálculos principales en esta etapa:

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
