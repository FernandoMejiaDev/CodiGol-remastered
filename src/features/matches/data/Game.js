// Game Test
const GameData = [
  {
    id: 1,
    level: 1,
    prompt:
      "Usa un tamaño base para el texto y haz que aumente en pantallas grandes a 5xl.",

    requiredClasses: ["text-base", "lg:text-5xl"],
  },
  {
    id: 2,
    level: 1,
    prompt:
      "Inicia con un tamaño grande (lg). Al llegar a pantallas md, triplica su impacto a 4xl, y en pantallas lg elévatelo al nivel 7xl.",
    requiredClasses: ["text-lg", "md:text-4xl", "lg:text-7xl"],
  },
  {
    id: 3,
    level: 1,
    prompt:
    "El texto debe ser pequeño (sm) en móviles. Aplica saltos de tamaño en cada breakpoint: en sm usa 2xl, en lg sube a 5xl y en 2xl termina con el tamaño 8xl.",
    requiredClasses: ["text-sm", "sm:text-2xl", "lg:text-5xl", "2xl:text-8xl"],
  },

  {
    id: 4,
    level: 1,
    prompt:
    "Crea una escala gradual: empieza en extra pequeño (xs). En cada breakpoint (sm, md, lg, xl), sube el texto exactamente dos niveles en la escala de Tailwind.",
    requiredClasses: [
      "text-xs",
      "sm:text-xl",
      "md:text-2xl",
      "lg:text-3xl",
      "xl:text-5xl",
    ],
  },

  {
    id: 5,
    level: 1,
    prompt:
    "Crea un texto completamente responsive usando todos los breakpoints de Tailwind para aumentar gradualmente su tamaño empezando con xl por cada breakpoints sumale un 1 al texto.",
    requiredClasses: [
      "text-xl",
      "sm:text-2xl",
      "md:text-3xl",
      "lg:text-4xl",
      "xl:text-5xl",
      "2xl:text-6xl",
    ],
  },
];

export default GameData;
