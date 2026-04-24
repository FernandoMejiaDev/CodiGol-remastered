//Configurable feedback by level/topic

export const feedbackConfig = {
  1: {
    // responsive
    messages: {
      missingBase:
        "Vas bien, pero falta definir correctamente el estilo base del texto.",
      missingResponsive:
        "Casi lo tienes. Falta adaptar el estilo para pantallas más grandes.",
      extra:
        "Estás usando clases innecesarias. Intenta simplificar la solución.",
      fallback:
        "Revisa cómo estás aplicando las clases responsive.",
    },
  },

  2: {
    // color + responsive
    messages: {
      missingBase:
        "Falta definir el color base del texto.",
      missingResponsive:
        "El color no está cambiando correctamente en pantallas más grandes.",
      wrongColor:
        "El color no es el correcto.",
      wrongShade:
        "El tono del color no es el adecuado.",
      extra:
        "Estás usando clases de más, revisa los colores.",
      fallback:
        "Revisa cómo estás aplicando los colores.",
    },
  },

  3: {
    messages: {
      fallback: "Revisa tu solución.",
    },
  },
};