//Training trainingLessons used in Training
const trainingLessons = [
  {
    id: 1,
    level: 1,
    prompt:
      "El texto debe iniciar muy pequeño (12px). Al llegar al breakpoint sm, aumenta su tamaño drásticamente usando la clase text-5xl.",
    requiredClasses: ["text-xs", "sm:text-5xl"],
  },

  {
    id: 2,
    level: 1,
    prompt:
      "Inicia con un tamaño base de 16px. En pantallas md cámbialo a 24px y en pantallas lg usa la clase text-4xl para un acabado de titular.",
    requiredClasses: ["text-base", "md:text-2xl", "lg:text-4xl"],
  },

  {
    id: 3,
    level: 1,
    prompt:
      "Inicia con un tamaño de 18px. En pantallas medianas (md) sube a 30px, y para pantallas extra grandes (xl), usa con la clase text-7xl.",
    requiredClasses: ["text-sm", "md:text-3xl", "xl:text-7xl"],
  },

  {
    id: 4,
    level: 1,
    prompt:
      "Crea una escala completa: empieza en 12px, sube a un tamaño estándar (16px) en sm, aumenta a 24px en md y termina con la clase 2xl:text-6xl.",
    requiredClasses: ["text-xs", "sm:text-base", "md:text-2xl", "2xl:text-6xl"],
  },
];

export default trainingLessons;
