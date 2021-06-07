import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./Lamp.module.scss";

const initialBrightness = 0.5;
const minBrightness = 0.2;
const maxBrightness = 0.8;
const diffBrightnessPerFrame = 0.05;
const animationFPS = 30;

const LightEffect = (): JSX.Element => {
  const [brightness, setBrightness] = useState(initialBrightness);

  function getBrightness(before: number): number {
    const value = before + (Math.random() * diffBrightnessPerFrame * 2 - diffBrightnessPerFrame);
    return Math.min(maxBrightness, Math.max(minBrightness, value));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setBrightness(getBrightness);
    }, 1 / animationFPS);
    return () => clearInterval(interval);
  });

  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" className={styles.light}>
      <defs>
        <radialGradient id="light1">
          <stop offset="0%" stopColor="#fff" stopOpacity={brightness} />
          <stop offset="5%" stopColor="#fff" stopOpacity={brightness * 0.8} />
          <stop offset="10%" stopColor="#fff" stopOpacity={brightness * 0.6} />
          <stop offset="20%" stopColor="#fff" stopOpacity={brightness * 0.4} />
          <stop offset="40%" stopColor="#fff" stopOpacity={brightness * 0.2} />
          <stop offset="100%" stopColor="#fff" stopOpacity={0} />
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="200" fill="url(#light1)" />
    </svg>
  );
};

const Lamp = (): JSX.Element => (
  <div className={styles.lamp}>
    <Image src="/lamp3.png" layout="fill" />
    <LightEffect />
  </div>
);

export default Lamp;
