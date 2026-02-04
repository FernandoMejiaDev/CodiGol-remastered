![CódiGolLogo](https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/CodiGolLogo.webp)

# ⚽ **CódiGol**

**CódiGol** es un pequeño videojuego web diseñado para ayudarte a aprender y practicar Tailwind CSS de forma divertida y diferente. Inspirado en la emoción del fútbol, este juego te reta a anotar goles completando desafíos de diseño utilizando Tailwind.

Esta idea surgió como un concepto que había descartado tiempo atrás, pero gracias a la experiencia adquirida y la motivación de la [Hackathon de MiduDev 2025](https://github.com/midudev/hackaton-clerk-2025?tab=readme-ov-file#%EF%B8%8F-c%C3%B3mo-participar-en-la-hackat%C3%B3n), decidí retomarla y convertirla en una demo funcional. El desarrollo **se realizó en menos de 10 días, desde el 8 hasta el 21 de mayo de 2025**, como parte del reto.

Inicialmente, el proyecto estaba pensado para enseñar JavaScript, pero al notar que ya existen muchas plataformas enfocadas en eso, decidí optar por **Tailwind CSS**, ya que más allá de su documentación oficial, no encontré recursos prácticos e interactivos para aprenderlo. Por eso, este proyecto busca ser una forma diferente, entretenida y dinámica de dominar **Tailwind CSS**, combinando aprendizaje y mecánicas de juego.

Como parte del desarrollo para la [Hackathon de MiduDev 2025](https://github.com/midudev/hackaton-clerk-2025?tab=readme-ov-file#%EF%B8%8F-c%C3%B3mo-participar-en-la-hackat%C3%B3n), se integró [Clerk](https://clerk.com/docs) para la autenticación de usuarios donde **es necesario registrarse o iniciar sesión para poder jugar**.

## 🏅 Mención Especial en la Final de la Hackathon de Midudev 

Durante la transmisión final de la Hackathon organizada por [Midudev](https://www.twitch.tv/videos/2465451345) y [Clerk](https://clerk.com/docs), ¡**CódiGol** fue destacado como uno de los proyectos más originales! ⚽🔥

> *"Luego también hay gente que se ha atrevido a hacer como una plataforma para aprender Tailwind. Se llama CódiGol. Tienes el entrenador, el coach aquí. Y entonces te va explicando la técnica del responsive y tal... Golazo. Has dominado la técnica..."*  
> — *Midudev en el stream de la final de la Hackathon 2025*

😅 Sí, el entrenador hablaba un poquito de más en la introducción (¡gracias por ese feedback, Midu!), pero ya lo solucioné: **ahora los diálogos son más cortos y directos al grano**, para que la experiencia sea más ágil y divertida.

📺 **Puedes ver ese momento aquí (¡es un tremendo golazo!):**

[![Ver mención en el stream](https://img.youtube.com/vi/0Z0Vy0VWQeY/hqdefault.jpg)](https://www.youtube.com/watch?v=0Z0Vy0VWQeY)

[![Ver mención en el stream](https://img.shields.io/static/v1?message=youtube&logo=Youtube&label=&color=c91e1e&logoColor=white&labelColor=&style=for-the-badge)](https://www.youtube.com/watch?v=0Z0Vy0VWQeY)


## 🌐 Enlace a la demo 

[![codigol](https://img.shields.io/static/v1?message=Juega-CódiGol-ahora&logo=devbox&label=&color=06B6D4&logoColor=white&labelColor=&style=for-the-badge)](https://codigol-demo.netlify.app/)

## 🧠 ¿Qué aprenderás?

- Fundamentos y clases de utilidad de **Tailwind CSS**
- Estilos responsive
- Buenas prácticas al trabajar con **Tailwind CSS**

## 🛠 Tecnologías utilizadas

<div align="left">

![javascript](https://img.shields.io/static/v1?message=javascript&logo=javascript&label=&color=F7DF1E&logoColor=black&labelColor=&style=for-the-badge)
![react](https://img.shields.io/static/v1?message=react&logo=react&label=&color=61DAFB&logoColor=black&labelColor=&style=for-the-badge)
![tailwind](https://img.shields.io/static/v1?message=tailwindCSS&logo=tailwindcss&label=&color=06B6D4&logoColor=white&labelColor=&style=for-the-badge)
![vite](https://img.shields.io/static/v1?message=vite&logo=vite&label=&color=646CFF&logoColor=white&labelColor=&style=for-the-badge)
![pnpm](https://img.shields.io/static/v1?message=pnpm&logo=pnpm&label=&color=F69220&logoColor=white&labelColor=&style=for-the-badge)
![clerk](https://img.shields.io/static/v1?message=clerk&logo=clerk&label=&color=6C47FF&logoColor=white&labelColor=&style=for-the-badge)

</div>

 ## 🔐 Autenticación con Clerk

Para poder jugar, los usuarios deben crear una cuenta o iniciar sesión.
**Clerk** se ha utilizado para manejar la autenticación, protegiendo las rutas del juego y personalizando la experiencia del jugador con sesiones activas.

## Integración con Clerk
**CódiGol** utiliza **Clerk** como sistema de autenticación para gestionar el acceso de los usuarios. La integración de **Clerk** permite proteger rutas y garantizar que solo los usuarios registrados puedan acceder a la experiencia completa del juego.

Cuando un usuario intenta iniciar el juego sin estar autenticado, se activa automáticamente el modal de inicio de sesión o registro proporcionado por **Clerk**.

A continuación se muestran capturas del flujo de autenticación:

<p align="center"> <img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/imgReadmeN1.webp"alt="Pantalla de inicio protegida por Clerk" /> <br/> <em>Pantalla inicial con botón de acceso</em> </p> <p align="center"> <img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/imgReadmeN2.webp" alt="Modal de login de Clerk" /> <br/> <em></em>Modal con una pequeña Introducción sobre CódiGol </p> <p align="center"> <img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/imgReadmeN3.webp" alt="Usuario autenticado" /> <br/> <em>Modal de login de Clerk Integrado</em> </p> <p align="center"> <img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/imgReadmeN4.webp"  alt="Protección de rutas con Clerk" /> <br/> <em>Verificación de Rutas protegidas que verifican si el usuario ya ha iniciado sesión de otro modo lo redirige a la página principal</em>   </p>

# Detalles del Juego 

## 🎞  Historia y Temática de CódiGol ⚽

En **CódiGol**, el jugador se une a los **Wind Jaguars**, un equipo decidido a conquistar la **Full Stack League**. Desde el primer momento, el entrenador te da la bienvenida al equipo y te explica cómo funcionará tu entrenamiento, en cada partido aprenderás una **nueva técnica de Tailwind CSS**.

El camino hacia la victoria está dividido en 10 partidos, y cada uno representa una lección clave sobre Tailwind. En el primer encuentro, por ejemplo, el jugador aprende sobre **diseño responsivo y clases de texto**. 

`text-xs, text-lg, md:text-xl, etc`

<img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/imgReadmeN5.webp" alt="imgReadmeN5" /> 

## 🧠 Entrenamiento antes del partido

Antes de cada partido, el jugador debe completar un entrenamiento. Aquí podrá **experimentar, cometer errores y aprender sin presión**. El entrenador explicará cómo funciona cada clase de Tailwind, y el jugador deberá resolver ejercicios prácticos para avanzar.

El entrenamiento solo termina cuando todas las respuestas son correctas, asegurando que el jugador domine bien la lección antes de entrar al campo.

<img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/imgReadmeN6.webp" alt="imgReadmeN6" /> 

## ⚔️ El Partido

Una vez completado el entrenamiento, es momento del partido. En la escena de VS, se presenta el contexto del enfrentamiento. Por ejemplo, en el primer partido, los **Wind Jaguars** van perdiendo 2-0 contra los **Gem Rubies**.

A medida que se avanza en la liga, el **margen de error se reduce** y los desafíos se vuelven más exigentes.

<img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/imgReadmeN7.webp" alt="imgReadmeN7" /> 

## 🧭 Estrategia y Recordatorio

Antes de entrar al segundo tiempo, el entrenador te recuerda lo aprendido y te da contexto de lo que está en juego. Además, menciona que tienes **5 jugadas o estrategias** para crear oportunidades de anotar — esto representa tus **5 intentos** para resolver correctamente los ejercicios en el partido.

<img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/imgReadmeN8.webp" alt="imgReadmeN8" /> 

## 🏟️ El Partido Real

Durante el partido, el jugador **aplica lo aprendido** en el entrenamiento. Cada ejercicio es una jugada, y solo hay **una oportunidad** para acertar. Si fallas, se pasa directamente al siguiente ejercicio.

Al final del partido, se muestra el resultado, que determinará la posición del equipo en la tabla:

- ✅ Victoria = 3 puntos
- 🤝 Empate = 1 punto
- ❌ Derrota = 0 puntos

El objetivo final es **sumar la mayor cantidad de puntos** a lo largo de la liga y convertirte en el campeón de la Full Stack League, dominando las técnicas más importantes de **Tailwind CSS** en el camino.

<img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/imgReadmeN9.webp" alt="imgReadmeN9" /> 

# 📱 Detalle sobre la Responsividad y Modal de Tamaño

**CódiGol** ha sido diseñado para ofrecer la mejor experiencia en pantallas grandes, ya que cuenta con un editor de código integrado que requiere espacio suficiente para su uso cómodo y funcional. Por esta razón, cuando el juego se ejecuta en dispositivos con un ancho de pantalla menor a **1280px**, se muestra un modal informativo que indica que el tamaño de la pantalla no es el adecuado.

Este modal tiene como objetivo evitar problemas de visualización y usabilidad, especialmente en **celulares o tablets**, donde el entorno de desarrollo no sería óptimo. Para disfrutar de **CódiGol** correctamente, se recomienda utilizarlo en una computadora de escritorio o laptop con una resolución igual o superior a 1280px de ancho.

<img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/imgReadmeN10.webp" alt="imgReadmeN10" /> 

## 🎯 Objetivo del juego

- Ganar la liga enfrentando a 10 equipos diferentes
- Resolver ejercicios reales de Tailwind para avanzar
- Mejorar tus habilidades de **TailwindCSS** en un contexto práctico y divertido

## 📋 Notas técnicas

- Cada pantalla está pensada como una fase: introducción, entrenamiento, partido y resultado.
- Los ejercicios se evalúan en tiempo real y afectan el marcador.
- Las rutas están protegidas con **Clerk** por que si se intenta acceder lo redireccionará a la página principal.

## 🚀 Instalación y uso local

Si deseas correr **CódiGol** en tu máquina local, sigue estos pasos:

1. Clona el repositorio
2. Instala las dependencias
     ```
    npm install
3. Crea el archivo `.env` y integra la variable de entorno para integrar **Clerk SDK**
4. Inicia el servidor de desarrollo
    ```
     npm start
## ⚡ ¿Por qué usar npm start?
**CódiGol** está construido con React, por lo que requiere un entorno de desarrollo para compilar y visualizar correctamente la aplicación.
El comando `npm start` inicia el servidor de desarrollo de React, permitiendo ver los cambios en tiempo real.

## 🚧  Estructura del proyecto 🧱
La arquitectura de **CódiGol** está pensada para mantener el código limpio, modular y fácil de escalar. Aquí se explica cada carpeta y archivo clave del proyecto:

<details>
<summary>📁 Estructura completa</summary>
    
  ```bash
src/
├── assets/
│   ├── images/         # Imágenes utilizadas en el juego (fondos, jugadores, logos, etc.)
│   └── svg/            # Archivos SVG como íconos o elementos vectoriales
│
├── context/
│   └── GameContext.jsx # Maneja el estado global del juego (progreso, marcador, etc.)
│
├── Data/
│   ├── Dialogue.js           # Contiene los diálogos del entrenador y escenas del juego
│   ├── exercises.js          # Ejercicios interactivos para practicar Tailwind
│   ├── Game.js               # Datos y configuración del partido en curso
│   ├── MatchData.js          # Información de los partidos (equipos, rondas, etc.)
│   ├── MatchPresentation.js  # Datos para la pantalla de presentación del partido
│   ├── SubBench.js           # Datos de los jugadores en la banca
│   └── Training.js           # Datos para la sección de entrenamiento
│
├── Hook/
│   └── ProtectedRoute.jsx    # Hook que protege rutas para usuarios autenticados con Clerk
│
├── Page/                     # Páginas que muestra contenido de cada escena de Screens
│
├── screens/
│   ├── LessonIntro.jsx       # Introducción teórica de cada lección
│   ├── Training.jsx          # Entrenamiento previo al partido (resolución de ejercicios)
│   ├── MatchPresentation.jsx # Pantalla de presentación tipo “versus” antes del partido
│   ├── SubBench.jsx          # Pantalla de selección de jugador desde la banca
│   ├── Game.jsx              # Escenario principal donde se juega y se resuelven ejercicios
│   ├── LeagueTable.jsx       # Tabla de posiciones o progreso en la liga
│   ├── FinalScore.jsx        # Muestra el resultado final del partido
│   └── FinalScene.jsx        # Escena final del juego 
│
├── styles/
│   ├── index.css             # Archivo base de estilos generales
│   └── tailwind.css          # Importaciones de Tailwind y configuración personalizada
│
├── ui/                       # Componentes reutilizables en diferentes pantallas
│   ├── CodeEditor.jsx        # Editor donde el jugador escribe código
│   ├── DialogueBox.jsx       # Cuadro de diálogo para mensajes del entrenador
│   ├── Editor.jsx            # Componente visual del editor
│   ├── EventTime.jsx         # Representa eventos en tiempo real durante el juego
│   ├── Modal.jsx             # Modal genérico
│   ├── ModalNavigation.jsx   # Modal para navegación entre fases
│   ├── ModalSize.jsx         # Modal para elegir tamaño de componente visual
│   ├── Navigation.jsx        # Barra de navegación del juego
│   ├── Preview.jsx           # Vista previa del resultado del código
│   ├── ScoreBoard.jsx        # Marcador en tiempo real del partido
│   ├── Timer.jsx             # Cronómetro del juego
│   └── TrainingPoint.jsx     # Punto de progreso en el entrenamiento
│
├── utils/                    # Funciones de utilidad para lógica del juego
│   ├── EvaluateAnswer.js         # Evalúa si el código del jugador es correcto
│   ├── navigateToNextPhase.js   # Lógica para pasar a la siguiente fase del juego
│   ├── routeFlow.js             # Flujo de rutas del juego según el estado
│   ├── routeGuard.js            # Protege rutas si no hay sesión iniciada
│   └── useTime.js               # Hook personalizado para el manejo del tiempo
│
├── App.jsx                 # Define el flujo de rutas principales y estructura del juego
└── index.js                # Punto de entrada de la aplicación

```
</details>

## ❤️ Agradecimientos

- A **MiduDev y Clerk** por organizar la hackathon.
- A ti, por jugar y aprender con **CódiGol** y leer este readMe.

## 📜 Licencia
Este proyecto fue desarrollado como proyecto para la [Hackathon de MiduDev 2025](https://github.com/midudev/hackaton-clerk-2025?tab=readme-ov-file#%EF%B8%8F-c%C3%B3mo-participar-en-la-hackat%C3%B3n) y está disponible con fines educativos y demostrativos.


---

