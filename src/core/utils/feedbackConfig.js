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
      successMessages: [],

      // Feedback messages
      FeedbackMessages: {
        missingBase: "",
        missingResponsive: "",
        extra: "",
        fallback: "",
      },

      //Error messages
      errorMessages: [""],
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
