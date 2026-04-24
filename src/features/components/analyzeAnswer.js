
const successMessages = [
  "¡Golazo! Dominaste la técnica.",
  "¡Perfecto! Aplicaste todo correctamente.",
  "¡Excelente! Se nota el entrenamiento.",
  "¡Impecable! Entendiste el responsive.",
  "Bien! Sigue así.",
];

const errorMessages = [
  "Estás fallando demasiado. Concéntrate y revisa bien.",
  "No tires por tirar, piensa la jugada.",
  "Así no vas a anotar. Analiza lo que haces.",
  "Detente un momento y revisa el ejercicio.",
  "Vas rápido, pero no correcto. Ajusta.",
];

export const analyzeAnswer = (analysis, attempts) => {
  // If that's correct
  if (analysis.isCorrect) {
    const randomMessage =
      successMessages[Math.floor(Math.random() * successMessages.length)];

    return {
      type: "success",
      message: randomMessage,
      resetAttempts: true,
    };
  }

  // ERROR CASE (many attempts)
  if (attempts >= 3) {
    const randomError =
      errorMessages[Math.floor(Math.random() * errorMessages.length)];

    return {
      type: "error",
      message: randomError,
      resetAttempts: false,
    };
  }

  //  WARNING (feedback )
  let message = "";

  // PRIORITY 1  lack of base
  const missingBase = analysis.missing.filter((cls) => !cls.includes(":"));

  if (missingBase.length > 0) {
    message =
      "Vas bien, pero falta definir correctamente el estilo base del texto.";
  }

  // PRIORITY 2  lack of responsive
  else if (analysis.missing.length > 0) {
    message =
      "Casi lo tienes. Falta adaptar el estilo para pantallas más grandes.";
  }

  // PRIORITY 3 extra classes
  else if (analysis.extra.length > 0) {
    message =
      "Estás usando clases innecesarias. Intenta simplificar la solución.";
  }

  // fallback
  else {
    message =
      "Revisa cómo estás aplicando las clases y vuelve a intentarlo.";
  }

  return {
    type: "warning",
    message,
    resetAttempts: false,
  };
};