"use client";

import React, { useState, useEffect } from "react";
import styles from "./animated-story.module.css";

const AnimatedStory = () => {
  const storyText = `DLAY fue fundado por un grupo de estudiantes apasionados de ciencias de la computación que compartían una visión común: cerrar la brecha entre ideas innovadoras y soluciones de software prácticas.

Lo que comenzó como sesiones de programación nocturnas en nuestro laboratorio universitario ha evolucionado hacia un equipo dedicado comprometido con transformar cómo las empresas abordan la tecnología.

Creemos que el gran software no se trata solo de código limpio, se trata de entender las necesidades de nuestros clientes y entregar soluciones que marquen una diferencia real.`;

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentCharIndex = 0;

    const interval = setInterval(() => {
      if (currentCharIndex < storyText.length) {
        setDisplayedText((prev) => prev + storyText[currentCharIndex]);
        currentCharIndex++;
      } else {
        clearInterval(interval);
      }
    }, 25); // Velocidad aumentada

    return () => clearInterval(interval);
  }, [storyText]);

  return (
    <div className={styles.editorContainer}>
      <div className={styles.editorHeader}>Nuestra Historia</div>
      <div className={styles.editorContent}>{displayedText}</div>
    </div>
  );
};

export default AnimatedStory;