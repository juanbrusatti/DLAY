"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/language-context";
import styles from "./animated-story.module.css";

const AnimatedStory = () => {
  const { t, language } = useLanguage();
  
  const storyText = `${t('about.storyText1')}

${t('about.storyText2')}

${t('about.storyText3')}`;

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText(""); // Reset cuando cambie el idioma o el texto
    let currentCharIndex = 0;

    const interval = setInterval(() => {
      if (currentCharIndex < storyText.length) {
        const char = storyText[currentCharIndex];
        if (char !== undefined) {
          setDisplayedText((prev) => prev + char);
        }
        currentCharIndex++;
      } else {
        clearInterval(interval);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [storyText, language]);

  return (
    <div className={styles.editorContainer}>
      <div className={styles.editorHeader}>{t('about.ourStory')}</div>
      <div className={styles.editorContent}>{displayedText}</div>
    </div>
  );
};

export default AnimatedStory;