> [!IMPORTANT]
> Este repositorio corresponde a la versión remasterizada de **CódiGol**, reconstruida desde cero a partir del proyecto original presentado en la **Hackathon de MiduDev 2025.**
>   
> El objetivo es mejorar la arquitectura, optimizar el código e implementar las funcionalidades que no pudieron incluirse en la versión inicial.  
> 
> Puedes ver la versión original aquí:  
> [CodiGol-Demo](https://github.com/FernandoMejiaDev/CodiGol-Demo)

![CódiGolLogo](https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/CodiGolLogo.webp)

# ⚽ **CódiGol**

**CódiGol** es un pequeño videojuego web diseñado para ayudarte a aprender y practicar **Tailwind CSS** de forma divertida y diferente. Inspirado en la emoción del fútbol, este juego te reta a anotar goles completando desafíos de diseño utilizando **Tailwind CSS**.

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
- Buenas prácticas al trabajar con **Tailwind CSS**

## 🛠 Tecnologías utilizadas

<div align="left">

![javascript](https://img.shields.io/static/v1?message=javascript&logo=javascript&label=&color=F7DF1E&logoColor=black&labelColor=&style=for-the-badge)
![react](https://img.shields.io/static/v1?message=react&logo=react&label=&color=61DAFB&logoColor=black&labelColor=&style=for-the-badge)
![tailwind](https://img.shields.io/static/v1?message=tailwind_CSS&logo=tailwindcss&label=&color=06B6D4&logoColor=white&labelColor=&style=for-the-badge)
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

<p align="center"> <img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Image_readme_Home_N1.webp"alt="Pantalla de inicio protegida por Clerk" /> <br/> <em>Pantalla inicial con botón de acceso</em> </p> <p align="center"> <img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Image_readme_Home_N2.webp" alt="Modal de login de Clerk" /> <br/><em>Modal de login de Clerk Integrado</em></p> <p align="center"> <img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Image_readme_Home_N3.webp" alt="Usuario autenticado" /> <br/> <em>Modal con una pequeña Introducción sobre CódiGol </em> </p> <p align="center"> <img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Image_readme_Home_N4.webp"alt="Protección de rutas con Clerk" /> <br/> <em>Verificación de Rutas protegidas que verifican si el usuario ya ha iniciado sesión de otro modo lo redirige a la página principal</em>   </p>

# Detalles del Juego 

## 🎞  Historia y Temática de CódiGol ⚽

En **CódiGol**, el jugador se une a los **Wind Jaguars**, un equipo decidido a conquistar la **Full Stack League**. Desde el primer momento, el entrenador te da la bienvenida al equipo y te explica cómo funcionará tu entrenamiento, en cada partido aprenderás una **nueva técnica de Tailwind CSS**.

El camino hacia la victoria está dividido en 10 partidos, y cada uno representa una lección clave sobre **Tailwind CSS**. En el primer encuentro, por ejemplo, el jugador aprende sobre **diseño responsivo y clases de texto**. 

<img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Image_Readme_Training_New_N1.webp" alt="Image_Readme_Training_New" /> 

## 🧠 Entrenamiento antes del partido

Antes de cada partido, el jugador debe completar un entrenamiento. Aquí podrá **experimentar, cometer errores y aprender sin presión**. El entrenador explicará cómo funciona cada clase de **Tailwind CSS**, y el jugador deberá resolver ejercicios prácticos para avanzar.

El entrenamiento solo termina cuando todas las respuestas son correctas, asegurando que el jugador domine bien la lección antes de entrar al campo.

<p align="center"> <img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Image_Readme_Training_New_N2.webp"alt="alt" /> <br/> <em>Pantalla inicial de entrenamiento</em> </p> <p align="center"> <br/> <img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Image_Readme_Training_New_N3.webp" alt="Image_Readme_Training_New" /> <br/> <em></em>Ejercicio práctico</p> <p align="center"> <br/> <img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Image_Readme_Training_New_N4.webp" alt="Image_Readme_Training_New" /> <br/> <em>Anotación</em> </p> <p align="center"> <br/> <img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Image_Readme_Training_New_N8.webp"  alt="Image_Readme_Training_New" /> <br/> <em>Modal de explicación sobre las clases de Tailwind CSS</em>   </p>

## ⚔️ El Partido

Una vez completado el entrenamiento, es momento del partido. En la escena de **VS**, se presenta el contexto del enfrentamiento. Por ejemplo, en el primer partido, los **Wind Jaguars** van empatados 0-0 contra los **Gem Rubies**.

A medida que se avanza en la liga, el **margen de error se reduce** y los desafíos se vuelven más exigentes.

<img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/img_readme_Scene_VS_New_N1.webp" alt="img_readme_Scene_VS_New" /> 

## 🧭 Estrategia y Recordatorio

Antes de entrar al segundo tiempo, el entrenador te recuerda lo aprendido y te da contexto de lo que está en juego. Además, menciona que tienes **5 jugadas o estrategias** para crear oportunidades de anotar esto representa tus **5 intentos** para resolver correctamente los ejercicios en el partido.

<img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/img_readme_bench_scene_new.webp" alt="imgReadmeN11" /> 

## 🏟️ El Partido Real

Durante el partido, el jugador **aplica lo aprendido** en el entrenamiento. Cada ejercicio es una jugada, y solo hay **una oportunidad** para acertar. Si fallas, se pasa directamente al siguiente ejercicio.

Al final del partido, se muestra el resultado, que determinará la posición del equipo en la tabla:

- ✅ Victoria = **3 puntos**
- 🤝 Empate = **1 punto**
- ❌ Derrota = **0 puntos**

El objetivo final es **sumar la mayor cantidad de puntos** a lo largo de la liga y convertirte en el campeón de la Full Stack League, dominando las técnicas más importantes de **Tailwind CSS** en el camino.

<p align="center"> <img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/img_readme_new_match_N1.webp"alt="alt" /> <br/> <em>Partido</em> </p> <p align="center"> <img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/imgReadmeN13.webp" alt="alt" /> <br/> <em></em>Posición en la liga</p>

# 📱 Detalle sobre la Responsividad y Modal de Tamaño

**CódiGol** ha sido diseñado para ofrecer la mejor experiencia en pantallas grandes, ya que cuenta con un editor de código integrado que requiere espacio suficiente para su uso cómodo y funcional. Por esta razón, cuando el juego se ejecuta en dispositivos con un ancho de pantalla menor a **1280px**, se muestra un modal informativo que indica que el tamaño de la pantalla no es el adecuado.

Este modal tiene como objetivo evitar problemas de visualización y usabilidad, especialmente en **celulares o tablets**, donde el entorno de desarrollo no sería óptimo. Para disfrutar de **CódiGol** correctamente, se recomienda utilizarlo en una computadora de escritorio o laptop con una resolución igual o superior a **1280px de ancho.**

<img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/imgReadmeN15.webp" alt="imgReadmeN15" /> 

## 🎯 Objetivo del juego

- Ganar la liga enfrentando a 10 equipos diferentes
- Resolver ejercicios reales de **Tailwind CSS** para avanzar
- Mejorar tus habilidades de **Tailwind CSS** en un contexto práctico y divertido

## ✨Mejoras de la remasterización

## 📋 Notas técnicas

- Cada pantalla está pensada como una fase: introducción, entrenamiento, partido y resultado.
- Los ejercicios se evalúan en tiempo real y afectan el marcador.
- Las rutas están protegidas con **Clerk** por que si se intenta acceder lo redireccionará a la página principal.

## 🚀 Instalación y uso local

Si deseas correr **CódiGol** en tu máquina local, sigue estos pasos:

1. Clona el repositorio
2. Instala las dependencias usando pnpm
3. Instalación globalmente usando npm
     ```
    npm install -g pnpm
3. Instalación de las dependencias
     ```
    pnpm install
4. Crea el archivo `.env` y integra la variable de entorno para integrar **Clerk**
5. Inicia el servidor de desarrollo
    ```
     pnpm start
## ⚡ ¿Por qué usar pnpm start?
**CódiGol** está construido con React, por lo que requiere un entorno de desarrollo para compilar y visualizar correctamente la aplicación.
El comando `pnpm start` inicia el servidor de desarrollo de React, permitiendo ver los cambios en tiempo real.

## 🚧  Estructura del proyecto 🧱
La arquitectura de **CódiGol** está pensada para mantener el código limpio, modular y fácil de escalar. Aquí se explica cada carpeta y archivo clave del proyecto:

<details>
<summary>📁 Estructura completa</summary>
 
<br/>
    
  ```
src/
├── app/
│   ├── Providers/
│   │   └── GameProvider.jsx
│   ├── App.jsx
│   └── routes.jsx
│ 
├── assets/
│   ├── svg/
│   │   ├── Close.jsx 
│   │   └── MobileMenu.jsx
│   └──  # Las imágenes están en la carpeta public por que se usan rutas absolutas
│
├── core/   
│   ├── constans/              
│   │   └── gameConfig.js               
│   ├── hooks/              
│   │   └── userTime.js
│   └── utils/
│       ├── AnalysisClasses.js
│       ├── analyzeAnswer.js
│       ├── evaluateAnswer.js
│       ├── feedbackConfig.js
│       ├── matchManager.js
│       ├── NavigateToNextPhase.js
│       ├── routeFlow.js
│       └── routeGuard.js
│
├── features/
│   ├── Final/              
│   │   └── pages/
│   │       └── FinalScene.jsx 
│   ├── auth/              
│   │   ├── components/
│   │   │   └── ProtectedRoute.jsx
│   │   └── services/
│   │       └── clerkSession.js
│   │ 
│   ├── home/              
│   │   └── pages/
│   │       ├── Home.jsx 
│   │       └── Prove.jsx
│   │ 
│   ├── league/              
│   │   ├── data/
│   │   │   └── leagueData.jsx 
│   │   └── pages/
│   │       └── LeagueTable.jsx
│   │ 
│   ├── matches/              
│   │   ├── data/
│   │   │   ├── matches/ 
│   │   │   │   ├── gem-rubies.js 
│   │   │   │   ├── knight-coders.js 
│   │   │   │   └── style-chamaleons.js 
│   │   │   ├── Game.jsx
│   │   │   ├── MatchData.jsx
│   │   │   ├── MatchesList.js
│   │   │   ├── MatchPresentation.js
│   │   │   └── SubBench.js
│   │   │ 
│   │   └── Page/ 
│   │       ├── Final.jsx 
│   │       ├── Game.jsx 
│   │       ├── MatchPresentation.jsx 
│   │       └── SubBench.jsx 
│   │   
│   └── training/              
│       ├── data/
│       │   ├── lessonIntroDialogue.js
│       │   ├── trainingDialogues.js
│       │   └── trainingLessons.js 
│       │ 
│       └── Page/ 
│           ├── LessonIntro.jsx 
│           └── Training.jsx
│ 
├── styles/
│   ├── index.css 
│   └── tailwind.css 
│ 
├── ui/
│   ├── AlertFeedback.jsx
│   ├── DialogueBox.jsx 
│   ├── Editor.jsx
│   ├── EventTime.jsx 
│   ├── ModalExplanation.jsx 
│   ├── ModalInstruction.jsx 
│   ├── ModalSize.jsx 
│   ├── Preview.jsx
│   ├── ResizingLine.jsx
│   ├── Scoreboard.jsx 
│   ├── Timer.jsx
│   ├── TrainingPoint.jsx
│   ├── VerifyButton.jsx 
│   └── renderTextWithCode.jsx
│
└── index.js
```
</details>

## ❤️ Agradecimientos

- A **MiduDev y Clerk** por organizar la hackathon.
- A ti, por jugar y aprender con **CódiGol** y leer este **readMe.**  

## 📜 Licencia
Este proyecto fue desarrollado como proyecto para la [Hackathon de MiduDev 2025](https://github.com/midudev/hackaton-clerk-2025?tab=readme-ov-file#%EF%B8%8F-c%C3%B3mo-participar-en-la-hackat%C3%B3n) y está disponible con fines educativos y demostrativos.

---
