//Configurable feedback by level/topic

export const feedbackConfig = {
  1: {
    TrainingMessages: {
      CompletionMessage: [
        "Buen trabajo. El entrenamiento terminó. Ahora prepárate: entrarás en el segundo tiempo. Es momento de aplicar lo aprendido.",
      ],

      //Success messages
      successMessages: [
        "¡Golazo! Dominaste la técnica.",
        "¡Perfecto! Aplicaste todo correctamente.",
        "¡Excelente! Se nota el entrenamiento.",
        "¡Impecable! Entendiste el responsive.",
        "Bien! Sigue así.",
      ],

      // Feedback messages
      FeedbackMessages: {
        missingBase:
          "Vas bien, pero falta definir correctamente el estilo base del texto.",
        missingResponsive:
          "Casi lo tienes. Falta adaptar el estilo para pantallas más grandes.",
        extra:
          "Estás usando clases innecesarias. Intenta simplificar la solución.",
        fallback: "Revisa cómo estás aplicando las clases responsive.",
      },

      //Error messages
      errorMessages: [
        "Estás fallando demasiado. Concéntrate y revisa bien.",
        "No tires por tirar, piensa la jugada.",
        "Así no vas a anotar. Analiza lo que haces.",
        "Detente un momento y revisa el ejercicio.",
        "Vas rápido, pero no correcto. Ajusta.",
      ],
    },

    MatchMessages: {
      CompletionMessage: [
        "¡Pitazo final! El partido termina y todo se decidirá en el marcador.",
      ],

      successMessages: [
        "¡GOOOOOOL de Wind Jaguars! Gran definición del jugador.",
        "¡Golazo! Tremenda jugada colectiva y excelente remate.",
        "¡La mandó al fondo de la red! Wind Jaguars encuentra el espacio.",
        "¡Qué definición! El arquero no pudo hacer nada ante ese disparo.",
        "¡Gol de Wind Jaguars! La afición estalla en las gradas.",
      ],

      // Feedback messages
      FeedbackMessages: {
        missingBase:
          "Buen pase, pero faltó definir correctamente el estilo base del texto.",
        missingResponsive:
          "La jugada fue buena, pero no logró adaptarse al cambio de ritmo en la cancha.",
        extra:
          "Demasiados movimientos innecesarios. La jugada perdió claridad en el área.",
        fallback:
          "Wind Jaguars mantiene la posesión, pero necesita construir mejor la jugada.",
      },

      //Error messages
      errorMessages: [
        "¡Disparo desviado! La jugada termina sin peligro para el rival.",
        "¡Ataja el arquero! Wind Jaguars desperdicia una oportunidad clara.",
        "¡La pelota se estrella en el poste! Qué cerca estuvo el gol.",
        "Intentó sorprender desde lejos, pero el disparo se va por encima del arco.",
        "La defensa rival corta la jugada y aleja el peligro del área.",
      ],
    },
  },

  2: {
    // color + responsive
    messages: {
      missingBase: "Falta definir el color base del texto.",
      missingResponsive:
        "El color no está cambiando correctamente en pantallas más grandes.",
      wrongColor: "El color no es el correcto.",
      wrongShade: "El tono del color no es el adecuado.",
      extra: "Estás usando clases de más, revisa los colores.",
      fallback: "Revisa cómo estás aplicando los colores.",
    },
  },

  3: {
    messages: {
      fallback: "Revisa tu solución.",
    },
  },
};
