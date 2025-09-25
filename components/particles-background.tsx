"use client";

import React, { useEffect } from "react";
import styles from "./particles-background.module.css";

const ParticlesBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById("particles-canvas") as HTMLCanvasElement;
    const ctx = canvas?.getContext("2d");

    if (!ctx) return;

    const particles = Array.from({ length: 100 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 3,
      dx: Math.random() - 0.5,
      dy: Math.random() - 0.5,
    }));

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
      });
    };

    const updateParticles = () => {
      particles.forEach((particle) => {
        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x < 0 || particle.x > window.innerWidth) particle.dx *= -1;
        if (particle.y < 0 || particle.y > window.innerHeight) particle.dy *= -1;
      });
    };

    const animate = () => {
      drawParticles();
      updateParticles();
      requestAnimationFrame(animate);
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    animate();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }, []);

  return <canvas id="particles-canvas" className={styles.particlesCanvas}></canvas>;
};

export default ParticlesBackground;