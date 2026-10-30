# Sistema de fuerzas

Para simular los resultados de los partidos que no disputan directamente los **Wind Jaguars**, se desarrolló un **sistema de fuerzas** encargado de generar los encuentros de las demás jornadas y añadir sus resultados a la clasificación de la liga.

En **CódiGol (versión original)**, estos resultados estaban definidos de manera predeterminada. Esto significaba que los marcadores de los demás equipos debían establecerse previamente dentro de los datos del proyecto. Aunque este enfoque era suficiente para una demo pequeña, no resultaba práctico a medida que aumentaba la cantidad de jornadas y enfrentamientos.

La remasterización reemplaza este sistema predeterminado por una **simulación dinámica**, lo que permite generar los resultados automáticamente sin tener que definir manualmente cada combinación de partidos.

Este cambio también mejora la escalabilidad del sistema. La **Full Stack League** está formada por 16 equipos y, en una temporada de ida y vuelta, puede llegar a tener hasta 30 jornadas. Definir manualmente los resultados de cada enfrentamiento implicaría crear y mantener una gran cantidad de combinaciones entre equipos, haciendo que los datos fueran cada vez más difíciles de gestionar.

En su lugar, cada equipo dispone de un archivo dentro de:

*[src/features/matches/data/teams](https://github.com/FernandoMejiaDev/CodiGol-remastered/tree/main/src/features/matches/data/teams)*

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

*[src/features/league/utils/strength](https://github.com/FernandoMejiaDev/CodiGol-remastered/tree/main/src/features/league/utils/strength)*

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

### Defensa

*[calculateDefenseChance.js](https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/src/features/league/utils/strength/calculateDefenseChance.js)* determina la probabilidad de que la defensa consiga detener o impedir que una ocasión continúe.

  ```
localTeam.attack / (localTeam.attack + visitorTeam.defense)
  ```

### Portero

*[calculateGoalkeeperChance.js](https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/src/features/league/utils/strength/calculateGoalkeeperChance.js)* determina la probabilidad de que el portero consiga realizar una parada. En esta parte se utiliza la propiedad **Defense** del equipo como representación simplificada de la capacidad defensiva asociada al portero.

  ```
localTeam.attack / localTeam.attack + (visitorTeam.defense + visitorTeam.Strength)
  ```

### Finalización

*[calculateGoalChance.js](https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/src/features/league/utils/strength/calculateGoalChance.js)* determina la posibilidad final de que la ocasión termine en gol después de superar los filtros anteriores.

  ```
localTeam.attack + localTeam.Strength / localTeam.attack + localTeam.Strength + visitorTeam.defense
  ```

Estos filtros no pretenden representar cada posible resultado de una jugada de fútbol. Por ejemplo, una ocasión puede terminar en un disparo desviado, un tiro al poste o una acción que simplemente no termina en gol. Incorporar cada uno de esos resultados como una categoría independiente requeriría añadir más variables y reglas al sistema.

En su lugar, el sistema utiliza estos filtros como una **simplificación de la secuencia ofensiva:** una ocasión debe superar varias probabilidades antes de convertirse en una anotación.

Como consecuencia, la probabilidad acumulada de marcar disminuye considerablemente respecto a la probabilidad inicial de generar una ocasión. Esto evita que una gran cantidad de ocasiones se convierta automáticamente en goles.

El resultado es una distribución de marcadores más adecuada para un partido de fútbol, donde pueden aparecer resultados como **1-0, 2-0, 2-1 o 2-2**, pero también existe la posibilidad de obtener un partido muy cerrado o una goleada dependiendo de las características y de la variación aleatoria de la simulación.

## 4. Simulación del resultado

Una vez procesadas las ocasiones y determinados los goles de cada equipo, *[calculateMatchResult.js](https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/src/features/league/utils/strength/calculateMatchResult.js)* reúne los resultados obtenidos y construye el marcador final del encuentro.

La simulación no selecciona directamente un marcador predeterminado. El resultado surge de la combinación de:

- Las características de ambos equipos.
- La distribución de la posesión.
- La cantidad de ocasiones disponibles.
- La probabilidad de generar ocasiones.
- Los filtros defensivos y del portero.
- La variación aleatoria de cada intento.

De esta manera, las estadísticas de los equipos influyen en el resultado, pero no lo determinan completamente.

## 5. Generación de resultados aleatorios

Para resolver las diferentes probabilidades se utiliza *[rollChance.js.](https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/src/features/league/utils/strength/rollChance.js)*

Esta función recibe una probabilidad expresada entre 0 y 1 y la convierte en un resultado de éxito o fracaso.

De forma simplificada:

  ```
0 → resultado negativo
1 → resultado positivo
  ```

Los valores intermedios representan diferentes probabilidades de que ocurra el resultado.

Esta función es utilizada por las demás etapas que necesitan tomar una decisión aleatoria basada en una probabilidad calculada.

## 6. Simulación de la jornada

Una vez definido el sistema capaz de simular un encuentro, *[simulateLeagueRound.js](https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/src/features/league/utils/strength/simulateLeagueRound.js)* se encarga de utilizarlo para generar los resultados de una jornada completa.

La función recibe los encuentros de la jornada y simula únicamente aquellos que **no corresponden al partido que está disputando el jugador.**

De esta forma, mientras el partido de los **Wind Jaguars** depende directamente de las respuestas del jugador, los demás encuentros de la jornada pueden resolverse automáticamente utilizando el sistema de fuerzas.

Sus resultados posteriormente se incorporan a la clasificación de la **Full Stack League.**

## 7. Pruebas del sistema

Para comprobar que el sistema se comporta de la manera esperada se utiliza *[testStrengthSystem.js](https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/src/features/league/utils/strength/testStrengthSystem.js)*

Esta herramienta permite ejecutar las simulaciones directamente desde la consola y repetir un mismo enfrentamiento múltiples veces.

Por ejemplo, un partido puede simularse 1,000 veces para observar cómo se distribuyen sus resultados y comprobar si las características de los equipos producen un comportamiento coherente.

Esto permite probar el sistema sin tener que ejecutar manualmente toda la interfaz del juego y facilita la detección de comportamientos inesperados en las probabilidades.

## 8. Construcción del resultado y clasificación

Finalmente, *[BuildMatchResults.js](https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/src/features/league/utils/BuildMatchResults.js)* se encarga de construir los datos necesarios para representar el resultado del encuentro dentro de la aplicación.

A partir de los resultados generados, *[calculateTable.js](https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/src/features/league/utils/calculateTable.js)* calcula la posición de los equipos en la clasificación de la liga.

De esta manera, el proceso completo conecta la simulación matemática con el funcionamiento de la competición:

  ```
Datos de los equipos
        ↓
Sistema de fuerzas
        ↓
Simulación de encuentros
        ↓
Resultados de la jornada
        ↓
Clasificación de la liga
  ```

El sistema de fuerzas permite así que los partidos secundarios de la competición se generen dinámicamente, manteniendo una relación entre las características de los equipos y sus probabilidades de obtener determinados resultados, sin convertir la competición en una secuencia completamente predeterminada.

<details>
<summary>Ejemplo práctico: Phantom Viper vs. Tusk Elephants</summary>
  
# Phantom Viper vs. Tusk Elephants

Para comprender cómo funciona el sistema de fuerzas, se puede analizar un enfrentamiento entre Phantom Viper, como equipo local, y Tusk Elephants, como visitante.

Este partido permite observar cómo las características de cada equipo influyen en la simulación. Phantom Viper cuenta con mejores valores de fuerza general y ataque, mientras que Tusk Elephants posee una defensa superior. Por lo tanto, el primero parte con ventajas ofensivas, pero el segundo tiene características que pueden dificultar sus oportunidades de anotar.

## Ejemplo práctico: Phantom Viper vs. Tusk Elephants

Para comprender cómo funciona el sistema de fuerzas, se puede analizar un enfrentamiento entre **Phantom Viper, como equipo local, y Tusk Elephants, como visitante**.

Este partido permite observar cómo las características de cada equipo influyen en la simulación. Phantom Viper cuenta con mejores valores de fuerza general y ataque, mientras que Tusk Elephants posee una defensa superior. Por lo tanto, el primero parte con ventajas ofensivas, pero el segundo tiene características que pueden dificultar sus oportunidades de anotar.

### 1. Características de los equipos

| Propiedad | Phantom Viper | Tusk Elephants |
|---|---:|---:|
| Strength | 92 | 85 |
| Attack | 95 | 77 |
| Defense | 89 | 92 |


</details>

---

